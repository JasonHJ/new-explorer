import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        light: {
          999: "#999"
        },
        normal: {
          111: '#345D9D'
        }
      },
      backgroundImage: {
        "theme-light": "url('/bg-light.png')",
        "theme-dark": "url('/bg-dark.png')",
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
      borderRadius: ["first", "last"],
      zIndex: ["hover"],
      borderWidth: ["dark", "last"],
      backgroundImage: ["dark"],
      backgroundColor: ["dark"],
      textColor: ["dark", "visited"],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
