import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-hero":
          "linear-gradient(to bottom, #C1DEE6 0%, 15%, #D3E4EA 30%, 40%, #E1E7E7 50%, 60%, #EBE7E2 75%, 87%, #F1E2DB 89%, 94%, #F3D1C6 100%)",
        "gradient-header":
          "linear-gradient(to bottom, #C1DEE6 0%, 15%, #D3E4EA 30%, 40%, #E1E7E7 100%)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        dmSans: ["var(--font-dm-sans)"],
      },
      colors: {
        dark: {
          bg: "#1a202c",
          text: "#e2e8f0",
          primary: "#38a169",
          secondary: "#718096",
        },
        light: {
          bg: "#ffffff",
          text: "#1A202C",
          primary: "#38a169",
          secondary: "#718096",
        },
        "blue-gradient": "#C1DEE6",
      },
    },
  },
  plugins: [],
};
export default config;
