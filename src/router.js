import {
	createRouter as newRouter,
	createWebHistory,
	createMemoryHistory,
} from 'vue-router'
  
// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/*.vue')

export const routes = Object.keys(pages).map((path) => {
	const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
	return {
		path: name === '/home' ? '/' : name,
		component: pages[path] // () => import('./pages/*.vue')
	}
})
  
export function createRouter() {
	return newRouter({
		// use appropriate history implementation for server/client
		// import.meta.env.SSR is injected by Vite.
		history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
		routes
	})
}