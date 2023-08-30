import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#3542BF',
      'primary-sub': '#F1F3FB',
      'secondary': '#FF99C4',
      'dark-grey-1': '#333333',
      'dark-grey-2': '#6C6C6C',
      'dark-grey-3': '#929292',
      'light-grey-1': '#F6F6F6',
      'light-grey-2': '#ACACAC',
      'white': '#FFFFFF'
    },
    extend: {
    },
  },
  plugins: [], 
}
export default config
