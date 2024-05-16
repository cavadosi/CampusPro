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
		'@pinia/nuxt',
		'unplugin-icons/nuxt',
		'nuxt-aos',
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
	},
	runtimeConfig: {
		public: {
			baseUrl: 'http://localhost:3000' // can be overridden by NUXT_PUBLIC_BASE_URL environment variable
		}
	}
});
