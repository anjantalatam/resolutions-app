import type { Resolution } from '@/types';
import { getDatabase, generateId, nowISO } from './index';

export function getAllResolutions(): Resolution[] {
  const db = getDatabase();
  return db.sql<Resolution>`SELECT * FROM resolutions ORDER BY updatedAt DESC`.allSync() as Resolution[];
}

export function getResolutionById(id: string): Resolution | null {
  const db = getDatabase();
  return db.sql<Resolution>`SELECT * FROM resolutions WHERE id = ${id}`.firstSync() ?? null;
}

export function createResolution(
  title: string,
  category: Resolution['category'],
  deadline?: Date
): Resolution {
  const db = getDatabase();
  const id = generateId();
  const now = nowISO();

  db.sql`
    INSERT INTO resolutions (id, title, category, deadline, createdAt, updatedAt)
    VALUES (${id}, ${title}, ${category}, ${deadline?.toISOString() ?? null}, ${now}, ${now})
  `;

  return {
    id,
    title,
    category,
    deadline,
    createdAt: new Date(now),
    updatedAt: new Date(now),
  };
}

export function updateResolution(
  id: string,
  updates: { title?: string; category?: Resolution['category']; deadline?: Date | null }
): Resolution | null {
  const db = getDatabase();
  const existing = getResolutionById(id);
  if (!existing) return null;

  const title = updates.title ?? existing.title;
  const category = updates.category ?? existing.category;
  const deadline = updates.deadline !== undefined
    ? (updates.deadline ?? undefined)
    : existing.deadline;
  const now = nowISO();

  db.sql`
    UPDATE resolutions
    SET title = ${title}, category = ${category}, deadline = ${deadline?.toISOString() ?? null}, updatedAt = ${now}
    WHERE id = ${id}
  `;

  return { ...existing, title, category, deadline, updatedAt: new Date(now) };
}

export function deleteResolution(id: string): boolean {
  const db = getDatabase();
  const result = db.sql`DELETE FROM resolutions WHERE id = ${id}`;
  return (result as unknown as { changes: number }).changes > 0;
}
