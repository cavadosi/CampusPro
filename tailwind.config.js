/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)',
					300: 'hsl(205, 70%, 40%)',
					500: 'hsl(var(--color-primary) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--color-secondary) / <alpha-value>)',
					300: '#FFFFFF',
					400: '#1C679C',
					500: 'hsl(var(--color-secondary) / <alpha-value>)',
					600: '#C2E5FF',
					700: '#ADDDFF',
					800: '#99D5FF',
					900: '#85CCFF',
					950: '#70C3FF'
				},
				accent: { DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)' },
				lightaccent: { DEFAULT: 'hsl(var(--color-lightaccent) / <alpha-value>)' },
				darkaccent: { DEFAULT: 'hsl(var(--color-darkaccent) / <alpha-value>)' },
				lightbackground: { DEFAULT: 'hsl(var(--color-lightbackground) / <alpha-value>)' },
				tbase: 'hsl(var(--color-tbase) / <alpha-value>)',
				tlight: 'hsl(var(--color-tlight) / <alpha-value>)',
				bg: 'hsl(var(--color-bg) / <alpha-value>)',
				bgcover: 'hsl(var(--color-bgcover) / <alpha-value>)',
				bglight: 'hsl(var(--color-bglight) / <alpha-value>)',
				bgscrollbar: 'hsl(var(--color-bgscrollbar) / <alpha-value>)'
			}
		}
	}
};
