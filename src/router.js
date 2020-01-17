import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./components/Home')
        },
        {
            path: '/menu',
            name: 'Menu',
            component: () => import('./components/Menu')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('./components/Contact')
        }
    ]
});