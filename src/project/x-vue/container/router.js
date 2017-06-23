import VueRouter from 'vue-router';
// import {routes} from '../config/router.conf.js'

const Home = r => require.ensure([], () => r(require('../pages/home/index')), 'pages_home');
const Modify = r => require.ensure([], () => r(require('../pages/modify/index')), 'pages_modify');
const Dome = r => require.ensure([], () => r(require('../pages/dome/index')), 'pages_dome');
const sortable = r => require.ensure([], () => r(require('../pages/sortable/index')), 'pages_sortable');
const banner = r => require.ensure([], () => r(require('../pages/banner/index')), 'pages_banner');
const mystar = r => require.ensure([], () => r(require('../pages/mystar/index')), 'pages_mystar');


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/mystar',
        name: 'mystar',
        component: mystar
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/modify',
        name: 'modify',
        component: Modify
    },
    {
        path: '/dome',
        name: 'dome',
        component: Dome
    },
    {
        path: '/sortable',
        name: 'sortable',
        component: sortable
    },
    {
        path: '/banner',
        name: 'banner',
        component: banner
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
