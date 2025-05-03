<template>
  <nav class="nav-container">
    <router-link to="/lista">Lista</router-link> |
    <router-link to="/tareas">Tareas</router-link> |
    <router-link to="/dimension">Dimensiones</router-link>
  </nav>
  <router-view />
</template>

<script setup>

</script>

<style scoped>
.nav-container {
  padding: 1rem;
  background: #f3f3f3;
  margin-bottom: 2rem;
  text-align: center;
}
a {
  margin: 0 10px;
  color: #42b983;
  text-decoration: none;
}
.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
