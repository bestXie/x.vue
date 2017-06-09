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
            path:'/register',
            name:'register',
            component: resolve => require(['../pages/register/index.vue'], resolve)
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
}


