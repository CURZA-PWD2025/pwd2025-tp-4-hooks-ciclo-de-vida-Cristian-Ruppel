<template>
  <div class="dimension-container">
    <h2>Ancho: {{ width }}px - Alto: {{ height }}px</h2>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const width = ref(window.innerWidth);
const height = ref(window.innerHeight);

const actualizarDimensiones = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

onMounted(() => {
  window.addEventListener('resize', actualizarDimensiones);
});

onUnmounted(() => {
  window.removeEventListener('resize', actualizarDimensiones);
});
</script>

<style scoped>
.dimension-container {
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
}
h2 {
  color: #42b983;
}
</style>
