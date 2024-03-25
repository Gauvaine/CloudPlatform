import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
    {
        path: '/',
        redirect: '/home',
      },
    {
        path: '/home',
        component: HomePage,
        name: 'home',
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router