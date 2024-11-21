// eslint-disable-next-line no-undef
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				prime: colors.red,
				second: colors.white,
			},
		},
	},
	plugins: [],
};

