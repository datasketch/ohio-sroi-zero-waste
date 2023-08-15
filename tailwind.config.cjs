/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'darmouth-green': '#00694E',
				'british-racing-green': '#024230',
				'dim-gray': '#756E65',
				'floral-white': '#F9F7ED',
				'cream': '#E7ECC3',
				'gray': '#757575',
				'gray-2': '#767676',
				'robin-egg-blue': '#00C1D4',
				'silver': '#B4B4B4'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				monserrat: ['Montserrat', 'sans-serif']
			}
		},
	},
	plugins: [],
}
