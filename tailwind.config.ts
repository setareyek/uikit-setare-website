import type { Config } from 'tailwindcss';
import tailwindForms from '@tailwindcss/forms';
import tailwindScrollbar from 'tailwind-scrollbar';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './stories/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [tailwindForms(), tailwindScrollbar],
  theme: {
    extend: {
      colors: {
        'Purple-01': '#FCFBFE',
        'Purple-02': '#F5F3FC',
        'Purple-03': '#EFEAFA',
        'Purple-04': '#BEACEC',
        'Purple-05': '#6F59CA',
        'Purple-06': '#3B1E85',
        'Purple-07': '#251354',

        'BlueGray-03': '#F0F2F5',
        'BlueGray-04': '#C2CCD6',
        'BlueGray-07': '#1D242B',
      },
    },
  },
};

export default config;
