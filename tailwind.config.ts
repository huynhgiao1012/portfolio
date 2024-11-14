import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('/images/bg6.jpg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000000",
        dark: "#222222",
        gray: {
          50: "#EEEEEE",
          70: "#F5F5F5",
          100: "#E5E5E5",
          300: "#A5A5A5",
          400: "#888888",
          500: "#555555",
          600: "#333333",
        },
        red: "#FF4C4C",
        orange: {
          500: "#ff724c",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-motion")],
};
export default config;
