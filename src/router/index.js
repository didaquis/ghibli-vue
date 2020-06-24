import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
		alias: '/'
	},
	{
		path: '/films',
		name: 'Films',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Films.vue')
	},
	{
		path: '/timeline',
		name: 'Timeline',
		component: () => import('../views/Timeline.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '*',
		name: '404',
		component: () => import('../views/404.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
