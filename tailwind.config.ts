import type { Config } from 'tailwindcss';
import tailwindForms from '@tailwindcss/forms';
import tailwindScrollbar from 'tailwind-scrollbar';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/setereyek-ui-kit/**/*.{js,jsx,ts,tsx}'],
  plugins: [tailwindForms(), tailwindScrollbar],
};

export default config;
