import type { Task } from '@/types';
import { getDatabase, generateId, nowISO } from './index';

export function getTasksByResolution(resolutionId: string): Task[] {
  const db = getDatabase();
  return db.sql<Task>`
    SELECT * FROM tasks WHERE resolutionId = ${resolutionId} ORDER BY sortOrder ASC
  `.allSync() as Task[];
}

export function getTasksByMilestone(milestoneId: string): Task[] {
  const db = getDatabase();
  return db.sql<Task>`
    SELECT * FROM tasks WHERE milestoneId = ${milestoneId} ORDER BY sortOrder ASC
  `.allSync() as Task[];
}

export function getTaskById(id: string): Task | null {
  const db = getDatabase();
  return db.sql<Task>`SELECT * FROM tasks WHERE id = ${id}`.firstSync() ?? null;
}

export function createTask(params: {
  resolutionId: string;
  milestoneId?: string;
  title: string;
  priority?: Task['priority'];
  deadline?: Date;
  sortOrder?: number;
}): Task {
  const db = getDatabase();
  const id = generateId();
  const now = nowISO();
  const order = params.sortOrder ?? Date.now();

  db.sql`
    INSERT INTO tasks (id, milestoneId, resolutionId, title, isCompleted, priority, deadline, sortOrder, createdAt, updatedAt)
    VALUES (${id}, ${params.milestoneId ?? null}, ${params.resolutionId}, ${params.title}, 0, ${params.priority ?? 'medium'}, ${params.deadline?.toISOString() ?? null}, ${order}, ${now}, ${now})
  `;

  return {
    id,
    milestoneId: params.milestoneId,
    resolutionId: params.resolutionId,
    title: params.title,
    isCompleted: false,
    priority: params.priority ?? 'medium',
    deadline: params.deadline,
    sortOrder: order,
    createdAt: new Date(now),
    updatedAt: new Date(now),
  };
}

export function updateTask(
  id: string,
  updates: Partial<Pick<Task, 'title' | 'isCompleted' | 'priority' | 'deadline' | 'sortOrder' | 'milestoneId'>>
): Task | null {
  const db = getDatabase();
  const existing = getTaskById(id);
  if (!existing) return null;

  const title = updates.title ?? existing.title;
  const isCompleted = updates.isCompleted ?? existing.isCompleted;
  const priority = updates.priority ?? existing.priority;
  const milestoneId = updates.milestoneId !== undefined ? updates.milestoneId : existing.milestoneId;
  const deadline = updates.deadline !== undefined
    ? (updates.deadline ?? undefined)
    : existing.deadline;
  const sortOrder = updates.sortOrder ?? existing.sortOrder;
  const now = nowISO();

  db.sql`
    UPDATE tasks
    SET title = ${title}, isCompleted = ${isCompleted ? 1 : 0}, priority = ${priority},
        milestoneId = ${milestoneId ?? null}, deadline = ${deadline?.toISOString() ?? null},
        sortOrder = ${sortOrder}, updatedAt = ${now}
    WHERE id = ${id}
  `;

  return { ...existing, title, isCompleted, priority, milestoneId, deadline, sortOrder, updatedAt: new Date(now) };
}

export function toggleTaskCompletion(id: string): Task | null {
  const db = getDatabase();
  const existing = getTaskById(id);
  if (!existing) return null;

  const now = nowISO();
  db.sql`
    UPDATE tasks SET isCompleted = ${existing.isCompleted ? 0 : 1}, updatedAt = ${now} WHERE id = ${id}
  `;

  return { ...existing, isCompleted: !existing.isCompleted, updatedAt: new Date(now) };
}

export function deleteTask(id: string): boolean {
  const db = getDatabase();
  const result = db.sql`DELETE FROM tasks WHERE id = ${id}`;
  return (result as unknown as { changes: number }).changes > 0;
}

export function getTodayTasks(): Task[] {
  const db = getDatabase();
  const today = new Date().toISOString().split('T')[0];
  return db.sql<Task>`
    SELECT * FROM tasks WHERE deadline >= ${today} AND deadline < ${today + 'T23:59:59.999Z'} ORDER BY sortOrder ASC
  `.allSync() as Task[];
}
