import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          soft: "hsl(var(--primary-soft) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          soft: "hsl(var(--accent-soft) / <alpha-value>)",
        },
        blush: {
          DEFAULT: "hsl(var(--blush) / <alpha-value>)",
          soft: "hsl(var(--blush-soft) / <alpha-value>)",
        },
        taupe: {
          DEFAULT: "hsl(var(--taupe) / <alpha-value>)",
          soft: "hsl(var(--taupe-soft) / <alpha-value>)",
        },
        sage: {
          DEFAULT: "hsl(var(--sage) / <alpha-value>)",
          soft: "hsl(var(--sage-soft) / <alpha-value>)",
        },
        olive: {
          DEFAULT: "hsl(var(--olive) / <alpha-value>)",
          soft: "hsl(var(--olive-soft) / <alpha-value>)",
        },
        forest: {
          DEFAULT: "hsl(var(--forest) / <alpha-value>)",
          soft: "hsl(var(--forest-soft) / <alpha-value>)",
        },
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        drawbox: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        tagfade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        drawbox: "drawbox 1.1s ease 0.15s forwards",
        tagfade: "tagfade 0.4s ease 1.05s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
