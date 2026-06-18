const SCHEMA_VERSION = 1;

export const migrations = [
  // v1: Initial schema
  `
  CREATE TABLE IF NOT EXISTS resolutions (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'Other',
    deadline TEXT,
    createdAt TEXT NOT NULL,
    updatedAt TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS milestones (
    id TEXT PRIMARY KEY,
    resolutionId TEXT NOT NULL REFERENCES resolutions(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    deadline TEXT,
    sortOrder INTEGER NOT NULL DEFAULT 0,
    createdAt TEXT NOT NULL,
    updatedAt TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_milestones_resolutionId ON milestones(resolutionId);

  CREATE TABLE IF NOT EXISTS tasks (
    id TEXT PRIMARY KEY,
    milestoneId TEXT REFERENCES milestones(id) ON DELETE SET NULL,
    resolutionId TEXT NOT NULL REFERENCES resolutions(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    isCompleted INTEGER NOT NULL DEFAULT 0,
    priority TEXT NOT NULL DEFAULT 'medium' CHECK(priority IN ('high', 'medium', 'low')),
    deadline TEXT,
    sortOrder INTEGER NOT NULL DEFAULT 0,
    createdAt TEXT NOT NULL,
    updatedAt TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_tasks_milestoneId ON tasks(milestoneId);
  CREATE INDEX IF NOT EXISTS idx_tasks_resolutionId ON tasks(resolutionId);
  CREATE INDEX IF NOT EXISTS idx_tasks_isCompleted ON tasks(isCompleted);

  CREATE TABLE IF NOT EXISTS today_plans (
    date TEXT PRIMARY KEY,
    taskIds TEXT NOT NULL DEFAULT '[]',
    focusTaskId TEXT
  );

  PRAGMA user_version = 1;
  `,
];
