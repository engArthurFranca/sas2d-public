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

<script>
import { defineComponent } from 'vue'
import NavComponent from './components/NavComponent.vue';

export default defineComponent({
  components: {
    NavComponent
  }
})
</script>
