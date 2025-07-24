// tailwind.config.js
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          background: 'hsl(240 10% 4%)',
          foreground: 'hsl(0 0% 98%)',
          coral: {
            DEFAULT: 'hsl(358 72% 65%)',
            foreground: 'hsl(358 72% 95%)',
          },
          rose: {
            DEFAULT: 'hsl(337 64% 52%)',
            foreground: 'hsl(337 64% 95%)',
          },
          border: 'hsl(240 4% 16%)',
          muted: 'hsl(240 4% 46%)',
        },
        animation: {
          shimmer: 'shimmer 2s linear infinite',
        },
        keyframes: {
          shimmer: {
            '100%': { transform: 'translateX(100%)' },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('tailwindcss-animate')
    ],
  }