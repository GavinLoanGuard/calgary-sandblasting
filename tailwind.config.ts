import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Placeholder industrial palette — swap for real brand colors when provided.
        brand: {
          DEFAULT: "#1F2933", // steel/charcoal
          dark: "#12181F",
          light: "#3E4C59",
        },
        accent: {
          DEFAULT: "#E8590C", // safety orange
          dark: "#C4470A",
          light: "#F76707",
        },
        steel: {
          50: "#F5F7F8",
          100: "#E4E7EB",
          200: "#CBD2D9",
          300: "#9AA5B1",
          400: "#7B8794",
          500: "#616E7C",
          600: "#52606D",
          700: "#3E4C59",
          800: "#323F4B",
          900: "#1F2933",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-oswald)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
