import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/Main.vue'),
        name: 'home',
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/monitor',
                name: 'monitor',
                component: () => import('../views/Monitor.vue')
            },
            {
                path: '/control',
                name: 'control',
                component: () => import('../views/Control.vue')
            },
            {
                path: '/view',
                name: 'view',
                component: () => import('../views/View.vue')
            }
        ],
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
