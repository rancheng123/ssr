import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import(
            '../pages/index.vue'
            )
    },
    {
        path: '/login',
        component: () => import(
            '../pages/login.vue'
            )
    },
    {
        path: '/index',
        component: () => import(
            '../pages/index.vue'
            )
    }
]


const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
})
export default router
