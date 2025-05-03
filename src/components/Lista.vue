<template>
  <div class="lista-container">
    <ul v-if="items.length">
      <li v-for="(item, index) in items" :key="index" class="profesion-card">
        <div class="profesion-header">
          <h3>{{ item.nombre }}</h3>
          <span class="badge">#{{ item.id }}</span>
        </div>
        <p class="profesion-desc">{{ item.descripcion }}</p>
      </li>
    </ul>
    <p v-else class="cargando">Cargando profesiones...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { profesiones } from '../recursos/profesiones';

const items = ref<Array<{id: number, nombre: string, descripcion: string}>>([]);

onMounted(() => {
  setTimeout(() => {
    items.value = profesiones;
  }, 3000);
});
</script>

<style scoped>
.lista-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
}

.profesion-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-top: 3px solid #42b983;
  transition: all 0.3s ease;
}

.profesion-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(66, 185, 131, 0.2);
}

.profesion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.profesion-header h3 {
  color: #35495e;
  margin: 0;
  font-size: 1.1rem;
}

.badge {
  background: #42b983;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.profesion-desc {
  color: #5a6d80;
  margin: 0;
  line-height: 1.5;
  font-size: 0.95rem;
}

.cargando {
  text-align: center;
  color: #42b983;
  font-style: italic;
}
</style>