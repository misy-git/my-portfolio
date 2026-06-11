import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#08090d",
        bg2: "#0f1117",
        bg3: "#161822",
        accent: "#6c63ff",
        accent2: "#00d4ff",
        accent3: "#ff6b9d",
        muted: "#8b8ea8",
        light: "#e8e9f0",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;