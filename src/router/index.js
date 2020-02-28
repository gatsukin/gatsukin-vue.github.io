import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/page',
            name: 'page',
            component: () => import('../view/Page.vue')
        },
        {
            path: '/',
            name: 'home',
            component: () => import('../view/Home.vue')
        }, {
            path: '/login',
            name: 'login',
            component: () => import('../view/Login.vue')
        }
    ]
})