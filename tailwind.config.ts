import type { Config } from 'tailwindcss';

function withOpacity(variableName: string) {
  return ({ opacityValue }: { opacityValue: string }): string => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgba(var(${variableName}))`;
    }
  };
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xsPhone: '320px',
        smPhone: '360px',
        basePhone: '400px',
        lgPhone: '440px',
        xlPhone: '480px',
        smTablet: '540px',
        baseTablet: '760px',
        lgTablet: '980px',
        laptop: '1020px',
        desktop: '1440px',
      },
      colors: {
        primary: {
          '50': withOpacity('--theme-50'),
          '100': withOpacity('--theme-100'),
          '200': withOpacity('--theme-200'),
          '300': withOpacity('--theme-300'),
          '400': withOpacity('--theme-400'),
          '500': withOpacity('--theme-500'),
          '600': withOpacity('--theme-600'),
          '700': withOpacity('--theme-700'),
          '800': withOpacity('--theme-800'),
          '900': withOpacity('--theme-900'),
          '950': withOpacity('--theme-950'),
        } as any,
        second: {
          '50': withOpacity('--second-50'),
          '100': withOpacity('--second-100'),
          '200': withOpacity('--second-200'),
          '300': withOpacity('--second-300'),
          '400': withOpacity('--second-400'),
          '500': withOpacity('--second-500'),
          '600': withOpacity('--second-600'),
          '700': withOpacity('--second-700'),
          '800': withOpacity('--second-800'),
          '900': withOpacity('--second-900'),
          '950': withOpacity('--second-950'),
        } as any,
      },
      backgroundImage: {
        noise: "url('/images/noise.png')",
        hurma: "url('/images/unlicence-hurma.jpg')",
        bayir: "url('/images/unlicence-bayir.jpg')",
        tea: "url('/images/unlicence-tea.jpg')",
        faces: "url('/images/unlicence-faces.webp')",
      },
    },
  },
  plugins: [],
};
export default config;