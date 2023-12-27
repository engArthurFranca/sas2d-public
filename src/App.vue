<template>
  <!-- Navbar -->
  <NavComponent />

  <div class="container mx-auto flex-1 flex flex-col items-center justify-center overflow-y-auto">
    <router-view/>
  </div>
  
  <!-- Footer -->
  <footer class="bg-black text-white p-4 text-center">
    <div class="container mx-auto">
      <p>&copy; 2023 Arthur França. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'
import NavComponent from './components/NavComponent.vue';

export default defineComponent({
  components: {
    NavComponent
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
