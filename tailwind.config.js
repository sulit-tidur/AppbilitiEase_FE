/** @type {import('tailwindcss').Config} */

import { screens } from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xxs': '360px',
      'xs': '475px',
      ...screens
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark': '#332C5C',
        'purple': '#5842DB',
        'orange': '#FF9A2C',
        'cream': '#FDF8EE',
        'rose': '#FE5A5D'
      }
    },
  },
  plugins: [],
}
