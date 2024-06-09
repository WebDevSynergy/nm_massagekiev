import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      '2xl': '1920px',

      sm480: { max: '479.98px' },
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      xlOnly: { min: '1280px', max: '1919.98px' },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '40px',
        xl: '40px',
        '2xl': '140px',
      },
    },
    extend: {
      fontFamily: {
        'open-sans': ['var(--font-open-sans)'],
      },

      colors: {
        whiteBeige: '#FDFAF7',
        beige: '#F9F2E8',
        white: '#FFFFFF',
        greenLight: '#F1F1ED',
        beigeDark: '#F1DEC6',
        green: '#4C7B63',
        greenDark: '#1E5B2A',
        orange: '#CC680B',
        brownLight: '#8A5C23',
        red: '#961C1C',
        grey: '#979797',
        brown: '#534236',
        brownDark: '#3B291D',
        blackLight: '#29170B',
        orangeDark: '#AE5400',
        subwayBlue: '#00AEFF',
        subwayRed: '#E90202',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
export default config;
