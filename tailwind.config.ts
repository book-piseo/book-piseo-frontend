import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			primary: '#3542BF',
			'primary-sub': '#F1F3FB',
			secondary: '#FF99C4',
			'dark-grey-1': '#333333',
			'dark-grey-2': '#6C6C6C',
			'dark-grey-3': '#929292',
			'light-grey-1': '#F6F6F6',
			'light-grey-2': '#ACACAC',
			white: '#FFFFFF',
		},
		fontSize: {
			// h1
			h1: '2.25rem',
			h1_bold: ['2.25rem', { fontWeight: '700' }],
			// h2
			h2: '1.875rem',
			h2_bold: ['1.875rem', { fontWeight: '700' }],
			// s1
			s1: '1.5rem',
			s1_semibold: ['1.5rem', { fontWeight: '600' }],
			s1_medium: ['1.5rem', { fontWeight: '500' }],
			s1_regular: ['1.5rem', { fontWeight: '400' }],
			// s2
			s2: '1.25rem',
			s2_semibold: ['1.25rem', { fontWeight: '600' }],
			s2_medium: ['1.25rem', { fontWeight: '500' }],
			s2_regular: ['1.25rem', { fontWeight: '400' }],
			// s3
			s3: '1.125rem',
			s3_semibold: ['1.125rem', { fontWeight: '600' }],
			s3_medium: ['1.125rem', { fontWeight: '500' }],
			s3_regular: ['1.125rem', { fontWeight: '400', lineHeight: '150%' }],
			// p1
			p1: '1rem',
			p1_semibold: ['1rem', { fontWeight: '600' }],
			p1_medium: ['1rem', { fontWeight: '500' }],
			p1_regular: ['1rem', { fontWeight: '400', lineHeight: '150%' }],
			// p2
			p2: '0.875rem',
			p2_semibold: ['0.875rem', { fontWeight: '600' }],
			p2_medium: ['0.875rem', { fontWeight: '500' }],
			p2_regular: ['0.875rem', { fontWeight: '400' }],
		},
		keyframes: {
			fadeIn: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' },
			},
			fadeOut: {
				'0%': { opacity: '1' },
				'100%': { opacity: '0' },
			},
		},
		animation: {
			fadeIn: 'fadeIn 0.3s ease-in-out',
			fadeOut: 'fadeOut 0.3s ease-in-out',
		},
		extend: {},
	},
	plugins: [require('tailwindcss-convert-px-to-rem')],
};
export default config;
