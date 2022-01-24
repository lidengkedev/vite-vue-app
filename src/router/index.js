import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    { path: '/home', component: () => import('../views/home.vue') },
    { path: '/login', component: () => import('../views/login.vue') },
    { path: '/404', name: 'NotFound', component: () => import('../views/error/404.vue') },
    { path: '/:pathMatch(.*)*', redirect: { name: 'NotFound' } },
    { path: '/', redirect: '/home' }
]

const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})

export default router
