import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';
import '@fortawesome/fontawesome-free/js/all'


const app = createApp(App);
app.use(router);
app.mount('#app');
