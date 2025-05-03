import { createRouter, createWebHistory } from 'vue-router';
import Lista from '../components/Lista.vue';
import Tareas from '../components/Tareas.vue';
import DimensionComponente from '../components/DimensionComponente.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Lista },
    { path: '/lista', component: Lista },
    { path: '/tareas', component: Tareas },
    { path: '/dimension', component: DimensionComponente }
  ]
});

export default router;
