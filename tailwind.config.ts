import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        canvas: "var(--canvas)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: "var(--text-primary)",
        muted: "var(--text-secondary)",
        border: "var(--border)",
        success: "var(--success)",
        paper: "var(--paper)"
      },
      boxShadow: {
        paper: "0 10px 30px rgba(0, 0, 0, 0.05)",
        float: "0 24px 60px rgba(90, 31, 43, 0.12)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      }
    }
  },
  plugins: []
};

export default config;
