const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.tsx'], // allow
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   'futura-pt': ['Futura'],
      // sans: ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
      // futura: ['futura-pt', 'sans-serif'],
      // },
      colors: {
        // NOTE: https://tailwindcss.jp/docs/customizing-colors#default-color-palette
        ...defaultTheme.colors,
        body: '#DCDDD8',
        accent: '#D74B4B',
        link: '#3366FF',
        navy: '#475F77',
        white: '#FFF',
      },
      keyframes: {
        slideInFrame: {
          from: {
            transform: 'translateX(400px)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        slideOutFrame: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(400px)',
          },
        },
      },
      animation: {
        slideIn: 'slideInFrame 200ms ease-in forwards',
        slideOut: 'slideOutFrame 200ms ease-out forwards',
      },
      screens: {
        sm: { max: '640px' }, // ~sp
        md: { min: '768px' }, // pc~
        lg: { min: '1024px' },
        xl: { min: '1280px' },
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
    },
  },
  plugins: [],
}
