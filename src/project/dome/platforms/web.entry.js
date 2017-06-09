import Vue from 'vue';
import '../../../lib/rem'

import App from '../container/App.vue';
import Router from '../container/router.js';
const { router } = Router(Vue);

new Vue(Vue.util.extend({
  el:'#root',
  router,
},App));
