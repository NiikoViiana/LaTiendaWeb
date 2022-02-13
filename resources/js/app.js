require('./bootstrap');

import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

import App from './components/App.vue';

import VueAxios from 'vue-axios';
import axios from 'axios';

import { routes }  from './routes';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

/*Vue.createApp(App).use(VueAxios, axios).use(router).mount('#app');*/

const app = Vue.createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
