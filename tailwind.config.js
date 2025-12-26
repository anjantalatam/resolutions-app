/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: This file is used by NativeWind AND Tailwind CSS.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        /* Brand */
        brand: {
          orange: "var(--brand-orange)",
          orangeSoft: "var(--brand-orange-soft)",
        },

        /* Backgrounds */
        card: "var(--bg-card)",
        app: "var(--bg-app)",
        track: "var(--bg-track)",

        /* Text */
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",

        /* Borders & dividers */
        light: "var(--border-light)",
        divider: "var(--divider)",

        /* Priority (explicit namespace is fine here) */
        priority: {
          p1: "var(--priority-p1)",
          p2: "var(--priority-p2)",
          p3: "var(--priority-p3)",
          none: "var(--priority-none)",
        },
      },
    },
  },
  plugins: [],
};
