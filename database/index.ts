import { openDatabaseSync, type SQLiteDatabase } from 'expo-sqlite';
import { migrations } from './schema';

let db: SQLiteDatabase | null = null;

/**
 * Open (or create) the database and run pending migrations.
 */
export function getDatabase(): SQLiteDatabase {
  if (db) return db;

  db = openDatabaseSync('resolutions.db');

  // Run any pending migrations
  const row = db.sql<{ version: number }>`PRAGMA user_version`.firstSync();
  const currentVersion = row?.version ?? 0;

  for (let i = currentVersion; i < migrations.length; i++) {
    db.execSync(migrations[i]);
  }

  return db;
}

/**
 * Close the database connection.
 */
export function closeDatabase(): void {
  if (db) {
    db.closeSync();
    db = null;
  }
}

/**
 * Generate a unique ID (nanoid-style, crypto-safe).
 */
export function generateId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const bytes = new Uint8Array(21);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => chars[b % chars.length]).join('');
}

/**
 * Current ISO timestamp string.
 */
export function nowISO(): string {
  return new Date().toISOString();
}
