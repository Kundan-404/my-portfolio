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
        // Light Mode
        primary: '#722F37',
        secondary: '#8A3E46',
        background: '#F5F5F5',
        surface: '#FFFFFF',
        textPrimary: '#2D2D2D',
        textSecondary: '#555555',
        accent: '#A0525D',

        // Dark Mode
        // darkPrimary: '#B87D87',
        darkPrimary: '#722F37',
        darkSecondary: '#8A3E46',
        darkBackground: '#121212',
        darkSurface: '#2D2D2D',
        darkTextPrimary: '#F5F5F5',
        darkTextSecondary: '#CCCCCC',
        darkAccent: '#722F37',
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