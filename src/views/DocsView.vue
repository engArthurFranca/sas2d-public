<template>
    <div class="docs">
      <UnderConstruction pageName="Documentation" />
    </div>
  </template>
  
  <script>
    import { defineComponent } from 'vue';
  
    import UnderConstruction from '@/components/UnderConstruction.vue';
  
    export default defineComponent({
      components: {
        UnderConstruction
      }
    })
  </script>