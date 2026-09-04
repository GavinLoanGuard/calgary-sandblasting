import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // ink + hazard are sampled directly from the real logo
        // (brand-assets/calgary-sandblasting-logo-full.png): ink #0E0E0E,
        // hazard #FEC208. rust is our own addition (not in the logo),
        // tying the accent color to the "rust removal" story.
        ink: {
          DEFAULT: "#0E0E0E",
          soft: "#1A1C1E",
          plate: "#222426",
        },
        hazard: {
          DEFAULT: "#FEC208",
          dim: "#CB9B06",
        },
        rust: {
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
          "repeating-linear-gradient(135deg, #FEC208 0, #FEC208 18px, #0E0E0E 18px, #0E0E0E 36px)",
      },
    },
  },
  plugins: [],
};

export default config;
