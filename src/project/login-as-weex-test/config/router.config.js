/**
 * Created by alan on 2017/3/21.
 */

export default {
    routes: [
        {
            path: '/login',
            name:'login',
            component: resolve => require(['../pages/login/index.vue'], resolve)
        },
        {
            path: '/login1',
            name:'login1',
            component: resolve => require(['../pages/login1/index.vue'], resolve)
        },
        {
            path: '/login2',
            name:'login2',
            component: resolve => require(['../pages/login2/index.vue'], resolve)
        },
        {
            path: '/login3',
            name:'login3',
            component: resolve => require(['../pages/login3/index.vue'], resolve)
        },
        {
            path: '/login4',
            name:'login4',
            component: resolve => require(['../pages/login4/index.vue'], resolve)
        },
        {
            path: '/login5',
            name:'login5',
            component: resolve => require(['../pages/login5/index.vue'], resolve)
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
}


