import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0B2545",
          "primary-light": "#13315C",
          accent: "#FFC857",
          "accent-dark": "#E8A317",
        },
        ink: {
          main: "#1F2937",
          sub: "#6B7280",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8F6F3",
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-jp)", "serif"],
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
