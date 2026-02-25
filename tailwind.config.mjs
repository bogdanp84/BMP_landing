/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        slate: 'hsl(var(--slate))',
        steel: 'hsl(var(--steel))',
        'steel-light': 'hsl(var(--steel-light))',
        surface: 'hsl(var(--surface))',
        divider: 'hsl(var(--divider))',
        primary: 'hsl(var(--primary))',
        'on-primary': 'hsl(var(--on-primary))',
        destructive: 'hsl(var(--destructive))',
      },
      maxWidth: {
        '4xl': '56rem',
        '6xl': '72rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.025em',
      },
    },
  },
  plugins: [],
};
