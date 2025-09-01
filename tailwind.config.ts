import { type Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffbd00',
        secondary: '#f8f9fa',
        'text-primary': '#1a1a1a',
        'text-secondary': '#6c757d',
        'dark-bg': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
} satisfies Config;
