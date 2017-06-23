/**
 * Created by bestxie on 2017/6/6.
 */

const Home = r => require.ensure([], () => r(require('../pages/home/index')), 'pages_home');
const Modify = r => require.ensure([], () => r(require('../pages/modify/index')), 'pages_modify');
const Dome = r => require.ensure([], () => r(require('../pages/dome/index')), 'pages_dome');
const sortable = r => require.ensure([], () => r(require('../pages/sortable/index')), 'pages_sortable');

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
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
    }
];

export default  routes