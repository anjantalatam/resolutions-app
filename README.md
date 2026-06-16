# Resolutions Planner

A clean, simple mobile/web app for turning your resolutions into actionable plans. Break down any goal into **Resolution → Milestones → Tasks**, then focus on what matters today.

Built with [Expo](https://expo.dev) (React Native) and [NativeWind](https://www.nativewind.dev/).

## Features

- **Resolutions** — Set up to 3 goals with categories and optional deadlines
- **Milestones** — Major checkpoints that mark progress toward your resolution
- **Tasks** — Actionable steps under each milestone (or standalone simple tasks)
- **Today's View** — See all tasks due or marked for today; pick 2–3 as your daily action plan
- **Focus Task** — One prioritized task to keep you on track
- **Progress Tracking** — Visual progress bars for milestones, resolutions, and today
- **Templates** — Starter templates (Lose Weight, Save Money, Read More, etc.) with pre-filled milestones and tasks
- **Notifications** — Daily reminders, weekly check-ins, monthly reflections
- **Dark Mode** — Full light/dark theme support

## Tech Stack

- [Expo SDK 56](https://expo.dev) — Cross-platform framework
- [React Native](https://reactnative.dev) — Mobile UI
- [Expo Router](https://docs.expo.dev/router/introduction) — File-based routing
- [NativeWind](https://www.nativewind.dev/) — Tailwind CSS for React Native
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) — Animations
- TypeScript — Strict mode

## Getting Started

```bash
npm install
npx expo start
```

Open in:
- [Expo Go](https://expo.dev/go) (limited sandbox)
- iOS Simulator
- Android Emulator
- Development build

## Project Structure

```
app/                # Expo Router pages (file-based routing)
├── (tabs)/         # Bottom tab navigation
│   ├── index.tsx   # Today's View
│   └── explore.tsx # Explore / Info
├── _layout.tsx     # Root layout
├── modal.tsx       # Modal screen
└── global.css      # Global styles
components/         # Shared UI components
constants/          # Theme colors and fonts
hooks/              # Custom hooks
agents/             # Product specs and design docs
```

## License

MIT
