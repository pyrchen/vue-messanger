import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import { router } from './router/routing-module';

const pinia = createPinia();
const vueApp = createApp(App);

vueApp.use(router);
vueApp.use(pinia);

vueApp.mount('#app');