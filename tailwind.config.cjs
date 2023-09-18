import { join } from 'path'
// import forms from '@tailwindcss/forms'
// import typography from '@tailwindcss/typography'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { myCustomTheme } from './oregano-theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', 
		join(require.resolve('@skeletonlabs/skeleton'), 
		'../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {},
	},
	plugins: [skeleton({
		themes: {
			preset: ['skeleton','crimson'],
			custom: [myCustomTheme]
		}
	})],
}
