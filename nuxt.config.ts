// https://nuxt.com/docs/api/configuration/nuxt-config
import UnpluginComponentsVite from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';

export default defineNuxtConfig({
	// TODO: fix .env
	ssr: true,
	devtools: { enabled: true },
	imports: {
		dirs: ['stores']
	},
	css: ['~/assets/css/main.css'],
	modules: [
		'@nuxtjs/tailwindcss',
		'unplugin-icons/nuxt',
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Poppins: true
				},
				download: true,
				inject: true
			}
		]
	],
	vite: {
		plugins: [
			UnpluginComponentsVite({
				dts: false,
				resolvers: [
					IconsResolver({
						prefix: 'Icon'
					})
				]
			})
		]
		// server: {
		// 	proxy: {
		// 		'/api': {
		// 			target: 'http://localhost:3001',
		// 			changeOrigin: true
		// 		}
		// 	}
		// }
	}
});
