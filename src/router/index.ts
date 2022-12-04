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
			},
		]
	},
	{
		path: '/projects',
		name: 'projects',
		component: DefaultLayout,
		children: [
			{
				path: 'list_bdot',
				name: 'ProjectList_Bdot',
				meta: {
					title: 'hythere'
				},
				component: () => import('@/views/projects/ProjectsList_Bdot.vue')
			},
			{
				path: 'list_etarae',
				name: 'ProjectList_Etarae',
				meta: {
					title: 'hythere'
				},
				component: () => import('@/views/projects/ProjectsList_Etarae.vue')
			},
			{
				path: '',
				name: 'projectslist',
				meta: {
					title: 'hythere'
				},
				component: () => import('@/views/projects/Projects_list.vue')
			},
			/*{
				path: ':id',
				name: 'projectsview',
				meta: {
					title: 'hythere'
				},
				component: () => import('@/views/projects/Projects_view.vue')
			} */
		]
	},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;