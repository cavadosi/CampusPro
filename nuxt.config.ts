// https://nuxt.com/docs/api/configuration/nuxt-config
import UnpluginComponentsVite from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';

export default defineNuxtConfig({
	devtools: { enabled: true },
	imports: {
		dirs: ['stores']
	},
	modules: ['@nuxtjs/tailwindcss', 'unplugin-icons/nuxt'],
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
