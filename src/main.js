
//--- Import dependencies.
import App from './App.vue'
import viteSSR from 'vite-ssr/vue'

import { routes } from './router'
import 'virtual:windi.css'

//--- Initialize viteSSR
export default viteSSR(App, { routes }, ctx => {
})