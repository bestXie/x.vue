import Vue from 'vue';
import '../../../lib/rem'
import FastClick from 'fastclick'

import App from '../container/App.vue';
import Router from '../container/router.js';


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

const { router } = Router(Vue);

new Vue(Vue.util.extend({
  el:'#app',
  router,
},App));
