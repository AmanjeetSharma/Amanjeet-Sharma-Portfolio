module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: 'var(--bg-primary-dark)',
          light: 'var(--bg-primary-light)',
        },
        accent: {
          blue: 'var(--accent-blue)',
          purple: 'var(--accent-purple)',
        },
        gray: {
          200: 'var(--text-gray-200)',
          400: 'var(--text-gray-400)',
        }
      },
      boxShadow: {
        neumorphic: '8px 8px 16px #0a0e1a, -8px -8px 16px #141e34',
        neumorphicInner: 'inset 4px 4px 8px #0a0e1a, inset -4px -4px 8px #141e34',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to_right,#80808012_1px,transparent_1px), linear-gradient(to_bottom,#80808012_1px,transparent_1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid-size': '24px 24px',
      },
      blur: {
        '3xl': '64px',
      },
      animation: {
        'float-slow': 'float 15s ease-in-out infinite',
        'float-medium': 'float 10s ease-in-out infinite',
        'float-fast': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        }
      }
    },
  },
  plugins: [],
}