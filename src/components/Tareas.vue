<template>
  <div class="tareas-container">
    <div class="header">
      <h3>TP4 - Gestión de Tareas</h3>
      <span class="counter">{{ tareas.length }} tareas</span>
    </div>
    
    <input 
      v-model="nuevaTarea" 
      @keyup.enter="agregarTarea" 
      placeholder="Escribe y presiona Enter"
      class="task-input"
    >
    
    <ul>
      <li 
        v-for="(tarea, index) in tareas" 
        :key="index" 
        :class="{ 'tarea-existente': index < tareas.length - 1, 'tarea-nueva': index === tareas.length - 1 }"
      >
        <span class="task-text">{{ tarea }}</span>
        <span class="task-number">{{ index + 1 }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUpdate, onUpdated } from 'vue';

const tareas = ref<string[]>(['Revisar correos', 'Hacer TP4']);
const nuevaTarea = ref('');

const agregarTarea = () => {
  if (nuevaTarea.value.trim()) {
    tareas.value.push(nuevaTarea.value.trim());
    nuevaTarea.value = '';
  }
};

onBeforeUpdate(() => {
  console.log("Lista aún no modificada");
});

onUpdated(() => {
  console.log("Lista modificada");
});
</script>

<style scoped>
.tareas-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 25px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h3 {
  color: #35495e;
  margin: 0;
  font-size: 1.3rem;
}

.counter {
  background: #42b983;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.task-input {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
}

.task-input:focus {
  border-color: #42b983;
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.2);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 12px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

li:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(66, 185, 131, 0.15);
}

.tarea-existente {
  border-left: 4px solid #7661e1;
}

.tarea-nueva {
  border-left: 4px solid #42b983;
  animation: fadeIn 0.5s ease;
}

.task-text {
  color: #35495e;
  flex-grow: 1;
}

.task-number {
  background: #f3f3f3;
  color: #42b983;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>