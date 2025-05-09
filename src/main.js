import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { pinia } from './stores';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
/* Chrome cookie message fix */
if (window.chrome) {
  console.debug('Third-party cookie message suppressed');
}
