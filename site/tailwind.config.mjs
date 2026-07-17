/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Slate-on-cyan dark palette — "principal engineer" vibe
        ink: {
          50:  '#f5f7fa',
          100: '#e4e9f0',
          200: '#cbd5e0',
          300: '#a0aec0',
          400: '#718096',
          500: '#4a5568',
          600: '#2d3748',
          700: '#1a202c',
          800: '#131820',
          900: '#0b0f15',
          950: '#06090d',
        },
        accent: {
          DEFAULT: '#22d3ee', // cyan-400
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.ink.200'),
            '--tw-prose-headings': theme('colors.ink.50'),
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            '--tw-prose-bold': theme('colors.ink.50'),
            '--tw-prose-code': theme('colors.accent.DEFAULT'),
            '--tw-prose-quotes': theme('colors.ink.200'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
