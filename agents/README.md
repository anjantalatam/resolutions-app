# Goal Model Notes

## Goal Types

- **Project**: Milestones → weekly tasks → optional daily actions. Event-type tasks allowed. Soft prompts to add children.
- **Habit**: Frequency-based (e.g., 3x/week, daily). No milestones required; track completions/streaks per period.
- **Budget/Limit**: Target vs cap per period (week/month). No tasks required; track usage vs cap and remaining.
- **Collection/Count**: Target count (e.g., books, events). Optional due date or monthly pacing; no tasks required.
- **Ratio/Linked**: Paired metrics (e.g., work hours ↔ relax minutes). Track compliance to rule.
- **Event**: Single-date tasks/milestones; may sit under a resolution without daily actions.

## Validation (Soft, Not Hard Blocks)

- Default scaffold prompts (add milestone/weekly/daily) but allow exceptions.
- Allow event-type weekly tasks with zero daily actions.
- Allow “skip week” state (travel/sick) when no daily actions are set.
- Warnings, not blockers: e.g., “Milestone has no weekly tasks—add one?” / “Week has 0 daily actions—mark as skipped?”

## Progress Calculation

- **Project**: Completion % from milestones/tasks (on-the-fly queries).
- **Habit**: Completions vs target frequency per period; streaks.
- **Budget/Limit**: Usage vs cap; remaining.
- **Collection**: Items done vs total.
- **Ratio/Linked**: % of pairs satisfying the rule.

## Rationale (from real-world use cases)

- One-off goals, habits, budgets, ratios, collections, and rest weeks all break a rigid “every level must have children” rule.
- Soft prompts + type-driven flows cover more scenarios without user friction.
