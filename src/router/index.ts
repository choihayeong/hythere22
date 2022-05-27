import {createWebHistory, createRouter} from "vue-router";

import DefaultLayout from '@/layout/index.vue';

type Meta = {
	title: string
}
type Path = {
	path: string,
	name: string,
	meta?: Meta,
	component: any
}

interface Routes {
	path: string,
	name: string,
	component: any,
	children: Array<Path>
}

const routes = [
    {
		path: '/',
		name: 'home',
		component: DefaultLayout,
		children: [
			{
				path: '/',
				name: 'home',
				meta: {
					title: 'hythere'
				},
				component: () => import('@/views/Home.vue')
			}
		]
	},
	{
		path: '/projects',
		name: 'projects',
		component: DefaultLayout,
		children: [
			{
				path: '',
				name: 'projectslist',
				meta: {
					title: 'hythere'
				},
				component: () => import('@/views/projects/Projects_list.vue')
			},
			{
				path: ':id',
				name: 'projectsview',
				meta: {
					title: 'hythere'
				},
				component: () => import('@/views/projects/Projects_view.vue')
			}
		]
	},
	{
		path: '/temp',
		name: 'temp',
		component: DefaultLayout,
		children: [
			{
				path: '',
				name: 'temp',
				meta: {
					title: 'hythere-temp'
				},
				component: () => import('@/components/HelloWorld.vue')
			}
		]
	},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;