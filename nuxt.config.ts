// https://nuxt.com/docs/api/configuration/nuxt-config
import UnpluginComponentsVite from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';

export default defineNuxtConfig({
	devtools: { enabled: true },
	imports: {
		dirs: ['stores']
	},
	css: ['~/assets/css/main.css'],
	modules: ['@nuxtjs/tailwindcss', 'unplugin-icons/nuxt', '@formkit/nuxt'],
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
