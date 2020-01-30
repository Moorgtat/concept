import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Concept',
            component: () => import('./components/Concept')
        },
        {
            path: '/menu',
            name: 'Menu',
            component: () => import('./components/Menu')
        },
        {
            path: '/lequipe',
            name: 'Team',
            component: () => import('./components/Team')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('./components/Contact')
        }
    ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/', '/menu', '/lequipe', '/contact'];
    const authRequired = !publicPages.includes(to.path);
    if (authRequired) {
        return next('/')
    }
    next()
});
