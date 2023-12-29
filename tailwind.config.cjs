/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./src/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	],
	corePlugins: {
		container: false,
	},	
	darkMode: false,
	theme: {
		fontFamily: {
			heading: "Bhineka",
			subheading: "TRAFFIC5",
			sans: "CreatoDisplay"
		},	
		colors: {
			brand: "#1d4ed8",
			black: "#18181b",
			white: "#f5f5f4",
			transprent: "transparent"
		},
		fontSize: {
			10: "10px",
			12: "12px",
			14: "14px"
		},	
		screens: {
			"2xl": { max: "1440px" },
			"2xl_min": "1441px",
			xl: { max: "1199px" },
			xl_min: "1200px",
			lg: { max: "991px" },
			lg_min: "992px",
			md: { max: "767px" },
			md_min: "768px",
			sm: { max: "479px" },
			sm_min: "480px",
		},		
		extend: {},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant("supports-hover", "@media (hover)");
		}),
	],	
}
