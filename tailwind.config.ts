import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#5B5FEF",
          violet: "#8B5FE6",
        },
        status: {
          ontime: "#22C55E",
          delayed: "#F59E0B",
          cancelled: "#EF4444",
        },
        dark: {
          bg: "#0B0C0F",
          surface: "#151721",
          elevated: "#1C1F2E",
          text: "#F5F6FA",
        },
        light: {
          bg: "#F1F3F8",
          surface: "#FFFFFF",
          text: "#14161F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #5B5FEF 0%, #8B5FE6 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(91,95,239,0.18) 0%, rgba(139,95,230,0.18) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(91,95,239,0.55)",
        "glow-violet": "0 0 48px -10px rgba(139,95,230,0.6)",
        card: "0 8px 40px -12px rgba(0,0,0,0.5)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "train-move": {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.22,1,0.36,1) infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
