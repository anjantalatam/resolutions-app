import type { Milestone } from '@/types';
import { getDatabase, generateId, nowISO } from './index';

export function getMilestonesByResolution(resolutionId: string): Milestone[] {
  const db = getDatabase();
  return db.sql<Milestone>`
    SELECT * FROM milestones WHERE resolutionId = ${resolutionId} ORDER BY sortOrder ASC
  `.allSync() as Milestone[];
}

export function getMilestoneById(id: string): Milestone | null {
  const db = getDatabase();
  return db.sql<Milestone>`SELECT * FROM milestones WHERE id = ${id}`.firstSync() ?? null;
}

export function createMilestone(
  resolutionId: string,
  title: string,
  sortOrder?: number,
  deadline?: Date
): Milestone {
  const db = getDatabase();
  const id = generateId();
  const now = nowISO();
  const order = sortOrder ?? Date.now();

  db.sql`
    INSERT INTO milestones (id, resolutionId, title, deadline, sortOrder, createdAt, updatedAt)
    VALUES (${id}, ${resolutionId}, ${title}, ${deadline?.toISOString() ?? null}, ${order}, ${now}, ${now})
  `;

  return {
    id,
    resolutionId,
    title,
    deadline,
    sortOrder: order,
    createdAt: new Date(now),
    updatedAt: new Date(now),
  };
}

export function updateMilestone(
  id: string,
  updates: { title?: string; sortOrder?: number; deadline?: Date | null }
): Milestone | null {
  const db = getDatabase();
  const existing = getMilestoneById(id);
  if (!existing) return null;

  const title = updates.title ?? existing.title;
  const sortOrder = updates.sortOrder ?? existing.sortOrder;
  const deadline = updates.deadline !== undefined
    ? (updates.deadline ?? undefined)
    : existing.deadline;
  const now = nowISO();

  db.sql`
    UPDATE milestones
    SET title = ${title}, sortOrder = ${sortOrder}, deadline = ${deadline?.toISOString() ?? null}, updatedAt = ${now}
    WHERE id = ${id}
  `;

  return { ...existing, title, sortOrder, deadline, updatedAt: new Date(now) };
}

export function deleteMilestone(id: string): boolean {
  const db = getDatabase();
  const result = db.sql`DELETE FROM milestones WHERE id = ${id}`;
  return (result as unknown as { changes: number }).changes > 0;
}
