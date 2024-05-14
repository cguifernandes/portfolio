/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.vue"],
	theme: {
		extend: {
			animation: {
				blink: "blink 1s infinite",
			},
			keyframes: {
				blink: {
					"0%": {
						borderColor: "transparent",
					},
					"45%": {
						borderColor: "transparent",
					},
					"50%": {
						borderColor: "#9CA3AF",
					},
					"100%": {
						borderColor: "#9CA3AF",
					},
				},
			},
			colors: {
				blue: {
					50: "#e7f4f7",
					100: "#b4dde5",
					200: "#8fccd9",
					300: "#5cb5c7",
					400: "#3da7bd",
					500: "#0c91ac",
					600: "#0b849d",
					700: "#09677a",
					800: "#07505f",
					900: "#053d48",
				},
				grey: {
					50: "#ebebeb",
					100: "#c0c0c0",
					200: "#a1a1a1",
					300: "#767676",
					400: "#5c5c5c",
					500: "#333333",
					600: "#2e2e2e",
					700: "#242424",
					800: "#1c1c1c",
					900: "#151515",
				},
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
