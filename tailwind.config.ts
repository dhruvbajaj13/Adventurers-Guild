import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Fantasy Manhwa-inspired colors
        obsidian: {
          DEFAULT: "#0F0F23", // Deep dark blue-black
          light: "#1A1A2E",
          foreground: "#E6E6FA", // Lavender white
        },
        mystical: {
          purple: "#6A0DAD", // Deep purple
          gold: "#FFD700", // Bright gold
          silver: "#C0C0C0", // Silver
          crimson: "#DC143C", // Deep red
          emerald: "#50C878", // Emerald green
          sapphire: "#0F52BA", // Sapphire blue
        },
        guild: {
          background: "#0A0A1A", // Very dark background
          surface: "#1A1A2E", // Card surfaces
          border: "#2E2E4A", // Borders
          text: "#E6E6FA", // Main text
          muted: "#9999B3", // Muted text
          accent: "#8A2BE2", // Blue violet accent
        },
        rank: {
          novice: "#8B4513", // Brown
          apprentice: "#708090", // Slate gray
          adept: "#4682B4", // Steel blue
          expert: "#9932CC", // Dark orchid
          master: "#FFD700", // Gold
          grandmaster: "#FF6347", // Tomato red
          legend: "#FF1493", // Deep pink
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px #8A2BE2, 0 0 10px #8A2BE2, 0 0 15px #8A2BE2" },
          "50%": { boxShadow: "0 0 10px #8A2BE2, 0 0 20px #8A2BE2, 0 0 30px #8A2BE2" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mystical-gradient": "linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #2E2E4A 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, #FFD700, transparent)",
      },
      fontFamily: {
        fantasy: ["Cinzel", "serif"],
        mystical: ["Philosopher", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
