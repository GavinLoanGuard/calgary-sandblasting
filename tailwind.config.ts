import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Placeholder palette — swap for real brand colors when provided.
        // Story: ink (raw steel), hazard (safety-tag yellow), rust (the oxide we remove).
        ink: {
          DEFAULT: "#15171A",
          soft: "#1E2124",
          plate: "#25282C",
        },
        hazard: {
          DEFAULT: "#F2C230",
          dim: "#C99A1E",
        },
        rust: {
          DEFAULT: "#B8461F",
          dark: "#8F3517",
          light: "#D5622F",
        },
        // legacy aliases kept so existing brand/accent utility classes keep working
        brand: {
          DEFAULT: "#15171A",
          dark: "#0D0F11",
          light: "#25282C",
        },
        accent: {
          DEFAULT: "#B8461F",
          dark: "#8F3517",
          light: "#D5622F",
        },
        steel: {
          50: "#F6F5F2",
          100: "#E8E5DE",
          200: "#D2CCC0",
          300: "#AEA593",
          400: "#8A8071",
          500: "#6B6357",
          600: "#524B41",
          700: "#3A352E",
          800: "#26221D",
          900: "#15171A",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        mark: ["var(--font-mark)", "cursive"],
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
        "hazard-stripe":
          "repeating-linear-gradient(135deg, #F2C230 0, #F2C230 18px, #15171A 18px, #15171A 36px)",
      },
    },
  },
  plugins: [],
};

export default config;
