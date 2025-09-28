import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        brand: { DEFAULT: "#0EA5E9", 600: "#0284C7", 700: "#0369A1" },
        primary: { 
          DEFAULT: "#149AD7", 
          50: "#f0f9ff", 
          100: "#e0f2fe", 
          200: "#bae6fd", 
          300: "#7dd3fc", 
          400: "#38bdf8", 
          500: "#149AD7", 
          600: "#0f7bb8", 
          700: "#0c6a9e", 
          800: "#0a5a84", 
          900: "#084a6a" 
        },
      },
      boxShadow: { card: "0 8px 24px rgba(2,6,23,.08)" },
      borderRadius: { xl: "0.875rem" }
    }
  },
  plugins: []
};

export default config;