import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'


const routes = [
    ...(()=>{
        var index = {
            path: '/index',
            meta: {
                title: '首页',
                keywords: '拖拉式建站',
                description: '拖拉式建站description',
                keepAlive: false
            },
            component: () => import('../pages/index.vue')
        }
        return [
            {
                ...index,
                path: '/'
            },
            {
                ...index,
            }
        ]
    })(),

    {
        path: '/login',
        meta: {
            title: '登录',
            keywords: '登录关键词',
            description: '登录描述',
            keepAlive: false
        },
        component: () => import('../pages/login.vue')
    }
]


const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
})
export default router
