import Vue from 'vue';
import Vuex from 'vuex';
import instagramStore from './instagramStore.js';
import indexstore from './indexstore.js';

Vue.use(Vuex);

export default new Vuex.Store({
 modules:{
    instagramStore,
    indexstore
 }
});