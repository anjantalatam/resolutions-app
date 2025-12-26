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
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        full: "9999px",
      },
      boxShadow: {
        card: "0px 2px 6px rgba(0,0,0,0.05)",
        fab: "0px 8px 24px rgba(0,0,0,0.18)",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Text", "system-ui"],
      },
      fontSize: {
        xs: "11px",
        sm: "12px",
        base: "15px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
      },
    },
  },
  plugins: [],
};
