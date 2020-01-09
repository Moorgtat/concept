import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/hello',
            name: 'HelloWorld',
            component: () => import('./components/HelloWorld')
        },
        {
            path: '/bye',
            name: 'Bye',
            component: () => import('./components/Bye')
        }
    ]
});