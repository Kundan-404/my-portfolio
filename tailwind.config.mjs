/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Use class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#2A2A2A", // Dark gray from your template
        // secondary: "#4F46E5", // Blue accent
        primary: "#121324", // Vibrant orange-red
        secondary: "#545748", // Muted olive green
        secondary1: "#474e2b", // Muted olive green
        accent: "#DB9F75",   // Warm beige
        neutral: "#804012",  // Deep brown
        tertiary: "#BE4B1B", // Burnt orange
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
};