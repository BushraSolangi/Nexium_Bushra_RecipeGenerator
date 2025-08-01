/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",  // Added in case you use pages directory
  ],
  darkMode: 'class', // Enables dark mode via class strategy
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern UI font
      },
      colors: {
        primary: '#1e40af',     // Deep blue
        secondary: '#facc15',   // Yellow for highlights
        muted: '#f3f4f6',       // Light gray background
        dark: '#0a0a0a',        // Custom dark mode background
        light: '#ffffff',       // Custom light mode background
      },
      boxShadow: {
        card: '0 4px 10px rgba(0, 0, 0, 0.05)', // Soft card shadow
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
