
//--- Import dependencies.
import { defineConfig } from 'vite'
import { execSync } from 'child_process'
import consola from 'consola'

//--- Import plugins.
import ViteVue from '@vitejs/plugin-vue'
import ViteLegacy from '@vitejs/plugin-legacy'
import ViteComponents from 'vite-plugin-components'

//--- Compute server parameters.
const gpPortUrl = port => execSync(`gp url ${port}`).toString().replace('https:\/\/', '')
const host = process.env.HOST ?? '127.0.0.1'
const port = process.env.PORT ?? 3000
const url = process.env.GITPOD_WORKSPACE_ID ? gpPortUrl(port) : `${host}:${port}`

const isDev = process.env.NODE_ENV !== 'production'

//--- Define and export Vite config.
export default defineConfig({

    server: {
        host: host,
        port: port,
        url: url,

        hmr: {
            port: 24678,
            clientPort: 443,
            protocol: 'wss',
            host: gpPortUrl(24678),
        },
    },

    optimizeDeps: {
        include: [ 'vue', 'vue-router', '@vueuse/core', 'lodash' ],
        exclude: [ 'vue-demi' ],
    },

    build: {
        minify: true,
        manifest: true,
        ssrManifest: true,
        target: 'esnext',
        sourcemap: 'hidden'
    },
    
    logger: {
        info: consola.info,
        warn: consola.warn,
        error: consola.error,
    },

    css: {
        modules: {
            scopeBehaviour: 'local',
            generateScopedName: '[hash:base64]'
        },

        postcss: {
            plugins: [
                require('tailwindcss')(),
                require('postcss-nested-ancestors'),
                require('postcss-nested'),
                require('postcss-font-magician')({
                    foundries: 'google',
                    hosted: ['@fontawesome/fontawesome-free/webfonts']
                }),
                require('postcss-preset-env'),
            ]
        }
    },

	plugins: [
		ViteVue(),
		ViteComponents(),
        ViteLegacy(),
	]
})
