
import { createRouter, createWebHistory } from 'vue-router'

//--- Import all pages component from `/pages` folder
const pages = import.meta.glob('./pages/*.vue')

//--- Generate routes from the gathered pages.
const routes = Object.keys(pages).map((path) => {
	const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
	return {
		path: name === '/home' ? '/' : name,
		component: pages[path] // () => import('./pages/*.vue')
	}
})

const router = createRouter({
	history: createWebHistory,
	routes: routes,
})

export { router, routes }