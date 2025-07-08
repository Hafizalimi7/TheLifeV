/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#015f4f',
          light: '#b6e6b8',
          dark: '#00866b',
        },
        secondary: {
          DEFAULT: '#F5F7FA',
          dark: '#E4E9F2',
        },
        accent: {
          DEFAULT: '#FFB347',
          light: '#FFCB7F',
          dark: '#F99B17',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};