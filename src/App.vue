<template>
  <!-- Navbar -->
  <NavComponent v-if="!hideNavbarFooter" />

  <router-view/>
  
  <!-- Footer -->
  <footer v-if="!hideNavbarFooter" class="bg-black text-white p-4 text-center">
    <div class="container mx-auto">
      <p>&copy; 2023 Arthur França. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import NavComponent from './components/NavComponent.vue';

import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const hideNavbarFooter = computed(() => {
  return route.meta.hideNavbarFooter;
});

</script>
