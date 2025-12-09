# Resolution Tracker App - Design System & Decisions

## Overview

Building a resolution tracking app focused on personal growth and goal achievement. The design emphasizes growth, clarity, and motivation with a teal-centric palette that works seamlessly in both light and dark modes.

## Brand Identity

### Mascot: TBD (Post-MVP)

Custom mascot to be designed after MVP launch. For now, using:

- **Icons**: Lucide/Feather icons for UI elements
- **Illustrations**: Minimal vector illustrations for empty states (can use undraw.co or similar)
- **Emoji**: Strategic use for celebrations and feedback

**Future direction**: Friendly character representing growth/achievement (explored: sprout, dragon). Should match teal/orange palette.

---

## Font Choices

### Selected: Inter

- **Headings**: Inter Bold / Extra Bold (700-800 weight)
- **Body Text**: Inter Regular (400 weight)
- **Why**: Clean, modern, confident. Conveys clarity and determination. Perfect for goal-setting apps.

**Implementation**:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
}
```

---

## Color Palette (Dark Mode Ready)

### Adaptive Colors (Change Based on Theme)

| Token            | Light Mode | Dark Mode | Usage               |
| ---------------- | ---------- | --------- | ------------------- |
| `background`     | `#FAFAF7`  | `#0F172A` | App background      |
| `surface`        | `#FFFFFF`  | `#1E293B` | Cards, sheets       |
| `text-primary`   | `#1A1A2E`  | `#F8FAFC` | Headings, body      |
| `text-secondary` | `#64748B`  | `#94A3B8` | Descriptions, hints |
| `border`         | `#E2E8F0`  | `#334155` | Dividers, outlines  |

### Accent Colors (Same for Both Modes)

These colors are optimized to have good contrast on both light and dark backgrounds.

| Color      | Hex       | Role            | Usage                                                |
| ---------- | --------- | --------------- | ---------------------------------------------------- |
| **Teal**   | `#14B8A6` | Primary         | Buttons, selections, active states, focus task       |
| **Orange** | `#F97316` | Achievement     | Celebrations, streaks, rewards, completed milestones |
| **Green**  | `#22C55E` | Health/Success  | Health goals, task completion, positive feedback     |
| **Blue**   | `#3B82F6` | Learning        | Learning goals, personal development                 |
| **Red**    | `#EF4444` | Strength/Urgent | Strength goals, warnings, overdue items              |
| **Amber**  | `#FBBF24` | Milestones      | Milestone markers, progress highlights               |
| **Violet** | `#A78BFA` | Optional        | Additional variety, special features                 |

### Goal Category Color Mapping

```javascript
const goalCategories = {
  "Lose Weight": { color: "orange", icon: "TrendingDown" },
  "Gain Weight": { color: "red", icon: "TrendingUp" },
  "Build Muscle": { color: "red", icon: "Zap" },
  "Stay Healthy": { color: "green", icon: "Heart" },
  "Learn Skills": { color: "blue", icon: "BookOpen" },
  Exercise: { color: "orange", icon: "Activity" },
  Meditation: { color: "green", icon: "Zap" },
  "Read More": { color: "blue", icon: "BookOpen" },
  "Save Money": { color: "green", icon: "PiggyBank" },
  "Get Promoted": { color: "violet", icon: "Briefcase" },
  "Side Project": { color: "blue", icon: "Code" },
};
```

---

## Color Psychology Rationale

- **Teal as primary**: Represents growth, clarity, fresh starts - perfect for resolutions
- **Orange for achievements**: Celebrates wins without being the dominant color
- **Green for health**: Calm focus, balance, positive reinforcement
- **Blue for learning**: Concentration, growth, intellectual pursuits
- **Red for strength/urgency**: Energy, intensity, attention-grabbing
- **Neutral backgrounds**: Reduce cognitive load, let content shine

### Why Teal Over Orange?

1. **Differentiates from fitness apps** (which heavily use orange)
2. **Represents growth** - nature, fresh starts theme
3. **Works in dark mode** without needing adjustment
4. **Proven in successful apps** (Fabulous, Finch)
5. **More sophisticated** while still being motivational

---

## Design Principles

### 1. Growth-Focused

- Teal primary accent symbolizes new beginnings and clarity
- Visual progress indicators show advancement
- Celebratory feedback reinforces the growth journey

### 2. Calm & Focused

- Soft backgrounds prevent overwhelm
- Warm grays for secondary information
- Minimal cognitive load for daily tracking

### 3. Celebratory Moments

- Orange accent reserved for achievements and celebrations
- Creates clear distinction between regular actions and wins
- Positive reinforcement through color

### 4. Dark Mode First-Class

- All colors tested for both light and dark backgrounds
- Single accent palette works universally
- Seamless theme switching

---

## Component Patterns

### Selection Cards

- White/surface background
- Rounded corners (16px)
- Icon left-aligned with category color
- Title (bold) + description (secondary text)
- Selected state: Teal border + teal text

### Bottom Tab Bar

- Floating with rounded corners
- 5 tabs: Home, Today, (+) FAB, Progress, Profile
- Center FAB in teal, raised
- Active tab: teal icon

### CTA Buttons

- Primary: Dark background (`#1A1A2E` light / `#F8FAFC` dark text)
- Secondary: Teal background with white text
- Full-width with arrow icon
- Rounded corners (12px)

### Progress Indicators

- Onboarding: Dot indicators (teal = active)
- Tasks: Progress bars with percentage
- Milestones: Visual completion states

---

## Implementation Details

### React Native / NativeWind Configuration

```javascript
// theme/colors.js
export const colors = {
  // Adaptive (use with useColorScheme)
  light: {
    background: "#FAFAF7",
    surface: "#FFFFFF",
    textPrimary: "#1A1A2E",
    textSecondary: "#64748B",
    border: "#E2E8F0",
  },
  dark: {
    background: "#0F172A",
    surface: "#1E293B",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    border: "#334155",
  },
  // Accent (same for both modes)
  accent: {
    teal: "#14B8A6",
    orange: "#F97316",
    green: "#22C55E",
    blue: "#3B82F6",
    red: "#EF4444",
    amber: "#FBBF24",
    violet: "#A78BFA",
  },
};

// For NativeWind / Tailwind
module.exports = {
  theme: {
    extend: {
      colors: {
        // Light mode defaults
        background: "#FAFAF7",
        surface: "#FFFFFF",
        "text-primary": "#1A1A2E",
        "text-secondary": "#64748B",
        border: "#E2E8F0",
        // Accents
        teal: "#14B8A6",
        orange: "#F97316",
        green: "#22C55E",
        blue: "#3B82F6",
        red: "#EF4444",
        amber: "#FBBF24",
        violet: "#A78BFA",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
};
```

---

## References & Research

### Apps Analyzed

- **Fabulous**: Teal/cyan primary, self-improvement focus
- **Finch**: Soft teal, mascot-driven, self-care
- **Habitica**: Purple/violet, gamified
- **Streaks**: Multi-color per habit
- **Reference fitness app**: Orange primary, corgi mascot

### Key Findings

- Teal/cyan works well for growth and goal-setting apps
- Mascot characters increase engagement and emotional connection
- Single accent color palette simplifies dark mode
- Warm backgrounds reduce eye strain for daily use apps
- Orange reserved for celebrations creates clear reward moments
