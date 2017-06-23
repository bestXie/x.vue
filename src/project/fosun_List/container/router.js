import VueRouter from 'vue-router';


const Yellow = r => require.ensure([], () => r(require('../pages/index/index.vue')), 'pages_yellow');

const routes = [
    {
        path: '/yellow',
        component: Yellow
    },
    {
        path: '/',
        redirect: '/yellow'
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
