/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text_light: '#f3f5f4',
				text_dark: '#0c0a0b',
				background_light: '#dcdcdc',
				background_dark: '#232323',
				special_gray: '#575757'
			},
			fontFamily: {
				heading2: ['"Futura Bold"', 'sans-serif'],
				heading3: ['"Futura Bold"', 'sans-serif'],
				body: ['"Futura Book"', 'sans-serif'],
				heading1: ['"Futura Heavy"', 'sans-serif'],
				special: ['"Futura Light"', 'sans-serif'],
				label: ['"Futura Medium"', 'sans-serif']
			},
			fontSize: {
				heading1: '8rem',
				heading2: '4rem',
				heading3: '2rem',
				body: '1,5rem',
				label: '2rem',
				special: '3rem'
			}
		}
	},
	plugins: []
};
