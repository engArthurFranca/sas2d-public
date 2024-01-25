<template>
  <!-- Navbar -->
  <NavComponent />

  <router-view/>
  
  <!-- Footer -->
  <footer class="bg-black text-white p-4 text-center">
    <div class="container mx-auto">
      <p>&copy; 2023 Arthur França. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import NavComponent from './components/NavComponent.vue';

</script>
