# Resolution Tracker App - Design System & Decisions

## Overview

Building a habit/resolution tracking app inspired by modern fitness and goal-tracking applications. Focus on motivational design with warm, energetic color palette combined with calm, focused backgrounds.

## Font Choices

### Selected: Inter

- **Headings**: Inter Bold / Extra Bold (700-800 weight)
- **Body Text**: Inter Regular (400 weight)
- **Why**: Clean, modern, confident. Conveys clarity and determination. Perfect for goal-setting apps. Already web-standard font.

### Alternative Considered: Sora

- **Headings**: Sora Bold
- **Body Text**: Sora Regular
- **Why**: Slightly rounder, more friendly and warm. More personality while staying professional.

**Implementation**: Use Inter via Tailwind defaults with fallback stack: `'Inter', system-ui, -apple-system, sans-serif`

---

## Color Palette

### Primary Colors (Foundation)

| Color          | Hex       | Usage          | Purpose                         |
| -------------- | --------- | -------------- | ------------------------------- |
| Soft Off-White | `#FAFAF7` | Background     | Calm, clean, reduces eye strain |
| Dark Navy      | `#1A1A2E` | Primary Text   | Professional, readable          |
| Warm Gray      | `#8B8B9E` | Secondary Text | Descriptions, hints             |

### Accent Colors (Goal Categories & Visual Feedback)

| Color         | Hex       | Category                | Psychology                            |
| ------------- | --------- | ----------------------- | ------------------------------------- |
| Warm Orange   | `#FF9E64` | Fitness/Energy          | Primary action, motivation, alertness |
| Fresh Green   | `#6BCB77` | Health/Wellness         | Calm focus, balance, growth           |
| Vibrant Blue  | `#4D96FF` | Personal Dev/Learning   | Concentration, growth, focus          |
| Coral Red     | `#FF6B6B` | Strength Goals          | Energy, intensity, determination      |
| Golden Yellow | `#FFD93D` | Achievements/Milestones | Celebration, positivity, rewards      |
| Mint/Teal     | `#00D9FF` | Support (Optional)      | Additional visual hierarchy           |

### Color Psychology Rationale

- Research shows warm colors (orange, red) stimulate energy and alertness - crucial for motivation
- Green provides calm focus for health/wellness goals
- Blue supports concentration for learning and personal development
- Neutral backgrounds reduce cognitive load and let content shine
- Multiple accent colors let users categorize goals by type
- This mix is proven in habit-tracking apps (Habitica, Streaks, Way of Life)

---

## Design Principles

### 1. Motivational & Energetic

- Warm orange as primary accent drives action and motivation
- Color-coded goals help users visually organize their resolutions
- Positive reinforcement through achievement colors (gold, green)

### 2. Calm & Focused

- Soft off-white background prevents overwhelm
- Warm gray for secondary information maintains visual hierarchy
- Minimal cognitive load for daily tracking

### 3. Visual Clarity

- Dark navy text ensures readability
- Accent colors provide immediate visual feedback on goal status
- Color associations help users quickly understand goal types

---

## Implementation Details

### Tailwind Configuration

```javascript
// tailwind.config.js
theme: {
  colors: {
    // Brand Colors
    'off-white': '#FAFAF7',
    'navy': '#1A1A2E',
    'gray-warm': '#8B8B9E',

    // Goal Categories
    'accent-orange': '#FF9E64',    // Fitness
    'accent-green': '#6BCB77',     // Wellness
    'accent-blue': '#4D96FF',      // Learning
    'accent-red': '#FF6B6B',       // Strength
    'accent-yellow': '#FFD93D',    // Achievements
    'accent-teal': '#00D9FF',      // Support
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  }
}
```
