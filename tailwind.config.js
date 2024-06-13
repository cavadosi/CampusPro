/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			colors: {
				primary: 'hsl(var(--color-primary) / <alpha-value>)',
				primary_200: 'hsl(var(--color-primary-200) / <alpha-value>)',
				primary_300: 'hsl(var(--color-primary-300) / <alpha-value>)',
				primary_400: 'hsl(var(--color-primary-400) / <alpha-value>)',
				primary_600: 'hsl(var(--color-primary-600) / <alpha-value>)',
				primary_700: 'hsl(var(--color-primary-700) / <alpha-value>)',
				primary_800: 'hsl(var(--color-primary-800) / <alpha-value>)',

				secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
				secondary_200: 'hsl(var(--color-secondary-200) / <alpha-value>)',
				secondary_300: 'hsl(var(--color-secondary-300) / <alpha-value>)',
				secondary_400: 'hsl(var(--color-secondary-400) / <alpha-value>)',
				secondary_600: 'hsl(var(--color-secondary-600) / <alpha-value>)',
				secondary_700: 'hsl(var(--color-secondary-700) / <alpha-value>)',
				secondary_800: 'hsl(var(--color-secondary-800) / <alpha-value>)',

				accent: 'hsl(var(--color-accent) / <alpha-value>)',
				accent_200: 'hsl(var(--color-accent-200) / <alpha-value>)',
				accent_300: 'hsl(var(--color-accent-300) / <alpha-value>)',
				accent_400: 'hsl(var(--color-accent-400) / <alpha-value>)',
				accent_600: 'hsl(var(--color-accent-600) / <alpha-value>)',
				accent_700: 'hsl(var(--color-accent-700) / <alpha-value>)',
				accent_800: 'hsl(var(--color-accent-800) / <alpha-value>)',

				bg: 'hsl(var(--color-bg) / <alpha-value>)',

				tbase: 'hsl(var(--color-tbase) / <alpha-value>)'
			}
		}
	}
};
