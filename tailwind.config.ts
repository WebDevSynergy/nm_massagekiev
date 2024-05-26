import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      '2xl': '1920px',

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
        roboto: ['var(--font-roboto)'],
        'open-sans': ['var(--font-open-sans)'],
      },

      colors: {
        whiteBeige: '#FDFAF7',
        beige: '#F9F2E8',

        white: '#FFFFFF',
        accent: '#0052F2',
        red: '#FF0000',
        darkBg: '#030712',
        primaryText: '#33343C',
        secondaryText: 'rgba(51, 52, 60, 0.70)',
        greyText: '#8E8E93',
        darkBlue: '#0045CB',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
