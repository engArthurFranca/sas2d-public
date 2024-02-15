<template>
  <div class="sas2d relative caret-pink-500 select-none" id="sas2d" @wheel.y.prevent="">
    <SimpleMenuBar class="menuBar"></SimpleMenuBar>
    <SimpleSideBar class="sideBar"></SimpleSideBar>
    <div class="mainFrame relative">
      <SvgPanZoom :vBox="viewBox" style="max-height: 80%; max-width: 80%;">
        <StructureComponent @svg-viewbox="handleSvgViewBox"></StructureComponent>
      </SvgPanZoom>
      <DataShowComponent></DataShowComponent>
    </div>
    <AlertHolder></AlertHolder>
  </div>
</template>

<script setup>
  import SimpleMenuBar from '@/components/menubars/SimpleMenuBar.vue';
  import SimpleSideBar from '@/components/menubars/SimpleSideBar.vue';
  import SvgPanZoom from '@/components/svgComponents/SvgPanZoom.vue'
  import StructureComponent from '@/components/svgComponents/StructureComponent.vue';
  import AlertHolder from '@/components/AlertHolder.vue';
  import DataShowComponent from '@/components/menubars/DataShowComponent.vue';
  
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  

  let viewBox = ref('0 0 2 2');

  const handleSvgViewBox = (vBox) => {
    viewBox.value = '0 0 ' + vBox;
  }

  onMounted(() => {
    const store = useStore();
    store.commit('newAlert', {isYellow: true, title: 'Tips', msg: `Start by clicking 'New' and add a new Point`});
  })

</script>

<style scoped>

  .sas2d {
    display: grid;
    grid-template-columns: 36px auto;
    grid-template-rows: 36px calc(100vh - 36px);
    gap: 0;
    height: 100vh;
    width: auto;
    margin: 0;
    padding: 0;
  }

  .menuBar {
    grid-column: 1 / 3;
    margin: 0;
    padding: 0;
  }

  .mainFrame {
    display: flex;
    background-color: #b4b4b4;
    overflow: hidden; 
    align-items: center;
    justify-content: center;
  }

</style>