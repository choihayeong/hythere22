import { createWebHistory, createRouter } from "vue-router";
import DefaultLayout from "@/layout/index.vue";

type Meta = {
  title: string;
};
type Path = {
  path: string;
  name: string;
  meta?: Meta;
  component: any;
};

const routes = [
  {
    path: "/",
    name: "home",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        meta: {
          title: "hythere!",
        },
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/projects",
    name: "projects",
    component: DefaultLayout,
    children: [
      {
        path: "list",
        name: "projects",
        meta: {
          title: "hythere!",
        },
        component: () => import("@/views/projects/ProjectsList.vue"),
      },
      /* {
				path: 'list_etarae',
				name: 'ProjectList_Etarae',
				meta: {
					title: 'hythere'
				},
				component: () => import('@/views/projects/ProjectsList_Etarae.vue')
			},
			{
				path: ':id',
				name: 'projectsview',
				meta: {
					title: 'hythere'
				},
				component: () => import('@/views/projects/Projects_view.vue')
			} */
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        behavior: "smooth",
        selector: to.hash,
        offset: {
          y: 200,
        },
      };
    }

    return {
      x: 0,
      y: 0,
    };
  },
  routes,
});

export default router;
