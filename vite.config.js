
//--- Import dependencies.
import { defineConfig } from 'vite'
import { execSync } from 'child_process'

//--- Import plugins.
import { ViteAliases } from 'vite-aliases'
import ViteVue from '@vitejs/plugin-vue'
import ViteSSR from 'vite-ssr/plugin'
import ViteWindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'
import ViteFonts from 'vite-plugin-fonts'

//--- Compute server parameters.
const gpPortUrl = port => execSync(`gp url ${port}`).toString().replace('https:\/\/', '')
const host = process.env.HOST ?? '0.0.0.0'
const port = process.env.PORT ?? 3000
const url = process.env.GITPOD_WORKSPACE_ID ? gpPortUrl(port) : `${host}:${port}`

//--- Define and export Vite config.
export default defineConfig({

    server: {
        host, port, url,
        hmr: {
            port: 443,
            protocol: 'wss',
            host: url.replace('https://','wss://'),
        },
    },

    optimizeDeps: {
        include: [ 'vue', 'vue-router', '@vueuse/core' ],
        exclude: [ 'vue-demi' ],
    },

	plugins: [
        ViteAliases(),
		ViteWindiCSS(),
		ViteVue(),
		ViteComponents(),
        ViteFonts({google: {families: [{
            name: 'Poppins',
            styles: 'wght@200;400;800'
        }]}}),
        ViteSSR(),
	]
})
