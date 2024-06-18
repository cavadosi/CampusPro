/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			colors: {
				primary: 'hsl(var(--color-primary) / <alpha-value>)',
				'primary-200': 'hsl(var(--color-primary-200) / <alpha-value>)',
				'primary-300': 'hsl(var(--color-primary-300) / <alpha-value>)',
				'primary-400': 'hsl(var(--color-primary-400) / <alpha-value>)',
				'primary-600': 'hsl(var(--color-primary-600) / <alpha-value>)',
				'primary-700': 'hsl(var(--color-primary-700) / <alpha-value>)',
				'primary-800': 'hsl(var(--color-primary-800) / <alpha-value>)',

				secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
				'secondary-200': 'hsl(var(--color-secondary-200) / <alpha-value>)',
				'secondary-300': 'hsl(var(--color-secondary-300) / <alpha-value>)',
				'secondary-400': 'hsl(var(--color-secondary-400) / <alpha-value>)',
				'secondary-600': 'hsl(var(--color-secondary-600) / <alpha-value>)',
				'secondary-700': 'hsl(var(--color-secondary-700) / <alpha-value>)',
				'secondary-800': 'hsl(var(--color-secondary-800) / <alpha-value>)',

				accent: 'hsl(var(--color-accent) / <alpha-value>)',
				'accent-200': 'hsl(var(--color-accent-200) / <alpha-value>)',
				'accent-300': 'hsl(var(--color-accent-300) / <alpha-value>)',
				'accent-400': 'hsl(var(--color-accent-400) / <alpha-value>)',
				'accent-600': 'hsl(var(--color-accent-600) / <alpha-value>)',
				'accent-700': 'hsl(var(--color-accent-700) / <alpha-value>)',
				'accent-800': 'hsl(var(--color-accent-800) / <alpha-value>)',

				bg: 'hsl(var(--color-bg) / <alpha-value>)',

				tbase: 'hsl(var(--color-tbase) / <alpha-value>)'
			}
		}
	}
};
