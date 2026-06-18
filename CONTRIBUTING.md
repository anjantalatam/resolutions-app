# Contributing

Thanks for your interest in contributing to Resolutions Planner.

## Prerequisites

- Node.js 20+
- npm
- [Expo Go](https://expo.dev/go) (for testing on device) or Xcode/Android Studio

## Setup

```bash
git clone https://github.com/anjantalatam/resolutions-app.git
cd resolutions-app
npm install
npx expo start
```

## Project Structure

```
app/          # Expo Router pages (file-based routing)
components/   # Reusable UI components
constants/    # Theme colors and fonts
hooks/        # Custom React hooks
types/        # TypeScript type definitions
agents/       # Product specs and design docs
```

## Code Style

- TypeScript strict mode
- No semicolons
- Single quotes
- Trailing commas
- 100 char print width
- Format with Prettier before committing

## Pull Requests

1. Create a branch from `main`
2. Keep PRs small and focused on one change
3. Reference the issue number in the PR description
4. Ensure the app builds without errors

## Reporting Issues

Use the issue templates — include device info, steps to reproduce, and expected behavior.
