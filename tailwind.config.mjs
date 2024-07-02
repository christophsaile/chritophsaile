/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'brand-blue': '#003BDF',
        'brand-green': '#00B574',
        'brand-purple': '#6960E2',
        'brand-lavender': '#AEA0F2',
        'brand-red': '#FF3D09',
        'brand-orange': '#FF3E21',
        'brand-yellow': '#FFD100',
        'brand-yellow-light': '#FFD12A',
      },
    },
  },
  plugins: [],
};
