import VueRouter from 'vue-router';

const Home = r => require.ensure([], () => r(require('../pages/home/index')), 'home');

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
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
