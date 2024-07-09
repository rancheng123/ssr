import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'


const routes = [
    ...(()=>{
        var index = {
            path: '/index',
            name: '/index',
            aaa: 111,
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
                path: '/',
                name: '/',
            },
            {
                ...index,
            }
        ]
    })(),

    {
        path: '/login',
        name: '/login',
        aaa: 2222,
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
