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
        "gradient-dark":
          "linear-gradient(to bottom, #1A202B 0%, 15%, #516389 30%, 40%, #657CAB 50%, 60%, #7995CD 75%, 87%, #8DAEEF 89%, 94%, #8DAEEF 100%)",
        "hero-bg": "url('/assets/images/bg-hero.png')",
        "hero-bg-alt": "url('/assets/images/bg-deborn.avif')",
        "hero-bg-battle":
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/images/Battleview.jpg')",
        "image-project":
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/images/project.jpg')",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        dmSans: ["var(--font-dm-sans)"],
        playfair: ["var(--font-playfair-display)"],
        prisma: ["var(--font-prisma)"],
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
        "blue-light": "#eaf3f5",
        "yellow-light": "#fff3e3",
        "green-light": "#f2f4eb",
        "black-rgba": "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
