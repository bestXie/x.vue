/**
 * Created by bestXie on 2017/6/14.
 */
import Vuex from 'vuex';
import StoreConfig from './store.js';

let store = null;

export default function Store(Vue) {
    if (!store) {
        Vue.use(Vuex);
        store = new Vuex.Store(StoreConfig);
    }
    return {
        store
    };
};
