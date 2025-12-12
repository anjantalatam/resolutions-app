# MVP

1. Core Outcome of MVP

A clean, simple mobile/web app where users manually build a structured plan:

Resolution → Milestones → Tasks → Today’s Focus Task

Milestones = major checkpoints toward the resolution

Tasks = actionable steps under each milestone

No months, weeks, or habits required

Timeframes are optional (deadlines, not rigid structure)

No AI. No auto-generation. Simple logic. Clean, intuitive UX.

2. MVP FEATURES (All Required)
   A. Resolutions (Top Layer)
   What users can do:

Add up to 3 resolutions in free tier.

Resolution contains:

Title

Category

Optional deadline

Each resolution can include:

Structured Milestones

Simple Tasks (one-off goals)

Edit/delete resolutions.

What we are not doing:

No AI suggestions.

No automated milestone creation.

No forced monthly/weekly breakdowns.

No dependency logic.

B. Milestones (Structured Checkpoints)

Milestones replace Monthly → Weekly → Daily hierarchy.

What users can do:

Create milestones under each resolution.

Milestones represent meaningful progress stages.

Add tasks under each milestone.

Assign optional deadlines.

Use limited starter templates (3–5):

Lose Weight

Save Money

Read More

Get Promoted / Better Job

Build a Side Project
Templates populate sample milestones + tasks (user can edit freely).

Not doing:

No question-based milestone generator.

No smart ordering.

No habit tracking inside milestones.

C. Tasks (Action Items)

Tasks replace Weekly Checklists and Daily Actions.

What users can do:

Add tasks inside milestones.

Add simple tasks directly under a resolution (for one-off or checklist goals).

Mark tasks as completed.

Tasks can optionally have:

Deadline

Importance (High / Medium / Low)

Not doing:

No recurring tasks.

No streaks.

No auto-scheduling.

No habit logic.

D. Today’s Actions View
What users can do:

See all tasks due today or marked by the user as “Today”.

Pick 2–3 tasks manually as today’s action plan.

Mark tasks complete.

Tasks can come from:

Any milestone

Simple tasks under the resolution

Not doing:

No auto-pick of daily tasks.

No daily habit tracking.

No calendar.

E. Today’s Focus Task

A simple prioritization to help users focus:

Rule-based selection (no algorithm):

Show ONE task as “Focus of the Day”

Based on:

Importance

Deadline

User selection (user may override)

F. Progress Tracking
Must have:

Milestone progress %
(Completed milestone tasks ÷ total tasks)

Resolution progress %
(Weighted completion of all milestones + simple tasks)

Today progress
(Completed vs selected tasks)

Displayed visually via:

Progress bars

Checkmarks

Completed vs remaining counts

Not doing:

No weekly progress percentages

No monthly progress percentages

No streaks

No aggregated habit analytics

G. Notifications

Basic and minimal:

Daily reminder

Weekly check-in prompt
(“Did you make progress on your resolutions?”)

Monthly reflection

No smart logic. No time-aware nudging.

H. UI/UX Requirements

The MVP MUST feel clean and polished:

Minimal, modern UI

Smooth navigation

Clear hierarchy: Resolution → Milestone → Task

No animations or complex interactions

Avoid overwhelming users with too much structure

Templates must feel simple and helpful

3. What’s intentionally excluded in MVP

AI breakdown or suggestions

Habit tracking

Recurring tasks

Calendar view

Monthly/weekly required structure

Streaks

Prioritization algorithms

Dependency-based task ordering

Goal types (numeric, limit-based, conditional) — deferred to V1

4. MVP Deliverables

By completion, MVP must include:

Add/Edit Resolution

Add/Edit Milestones

Add/Edit Tasks (inside milestones or standalone)

Templates (5 basic templates with milestones + example tasks)

Today View (daily action plan + Focus Task)

Progress visuals (resolution + milestone)

Basic notifications

Pricing/Upgrade screen + paywall logic

Clean and intuitive navigation (bottom nav with Today / Resolutions / Settings)

5. Updated Resolution Flow (Final MVP Model)
   Resolution (Yearly Goal)
   ├── Milestone 1
   │ ├── Task 1
   │ ├── Task 2
   │ └── Task 3
   ├── Milestone 2
   │ ├── Task 1
   │ └── Task 2
   └── Simple Tasks (optional)
   ├── Task A
   └── Task B

This model supports:

Complex goals (career, finance, fitness, projects)

Simple goals (insurance, certifications, cleanup tasks)

Mixed goals

Self-paced goals

Checklists

Reading, learning, saving, portfolio building

Everything seen in Reddit thread

Without requiring weeks/days/habits.

Example Use Cases (For DB + Architecture Clarity)

1. Lose 20kg (Outcome Goal)
   Resolution: Lose 20kg
   Milestones:

- Build healthy routines
- Improve workout consistency
- Reduce calorie intake
  Tasks:
- Join gym
- Buy weighing scale
- Meal prep
- Walk 8k steps (optional)

2. Read 12 Books (Count Goal)
   Resolution: Read 12 Books
   Milestones:

- Book 1
- Book 2
- ...
  Tasks (per milestone):
- Acquire book
- Read
- Finish

3. Become Financially Strong (Mixed Goal Type)
   Resolution: Become Financially Strong
   Milestones:

- Build emergency fund
- Improve income potential
- Strengthen financial security
  Tasks:
- Save INR 25k / 50k / 1L
- Update resume
- Complete certification
- Take health insurance (simple task)
- Take term insurance (simple task)

4. Get a High-Paying Job (Strategic Goal)
   Resolution: Get a High-Paying Job
   Milestones:

- Upgrade skills
- Build portfolio
- Improve profile (resume/LinkedIn)
- Apply for better roles
  Tasks:
- Complete certification
- Build 2 projects
- Shortlist companies
- Apply + follow-up
