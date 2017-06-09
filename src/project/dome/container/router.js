import VueRouter from 'vue-router';
import Home from '../pages/home/index.vue';
import Dingtalk from '../pages/dingtalk/index.vue';
import Login from '../pages/login/index.vue';
// const Login = r => require.ensure([], () => r(require('../pages/login/index')), 'login');
// const Home = r => require.ensure([], () => r(require('../pages/home/index')), 'home');
// const Dingtalk = r => require.ensure([], () => r(require('../pages/dingtalk/index')), 'dingtalk');
// const Login = r => require.ensure([], () => r(require('../pages/login/index')), 'login');
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/dingtalk',
        name: 'dingtalk',
        component: Dingtalk
    }
    ,
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

export default function Router(Vue) {
    Vue.use(VueRouter);
    const router = new VueRouter({
        routes: routes
    });
    return {
        router
    }
}
