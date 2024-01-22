<template>
  <div class="sas2d" id="sas2d" @wheel.y.prevent="">
    <SimpleMenuBar class="menuBar"></SimpleMenuBar>
    <SimpleSideBar class="sideBar"></SimpleSideBar>
    <div class="mainFrame">
      <SvgPanZoom :vBox="viewBox" style="max-height: 80%; max-width: 80%;">
        <StructureComponent @svg-viewbox="handleSvgViewBox"></StructureComponent>
      </SvgPanZoom>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import SimpleMenuBar from '@/components/menubars/SimpleMenuBar.vue';
  import SimpleSideBar from '@/components/menubars/SimpleSideBar.vue';
  import SvgPanZoom from '@/components/svgComponents/SvgPanZoom.vue'
  import StructureComponent from '@/components/svgComponents/StructureComponent.vue';

  export default defineComponent({
    components: {
    SimpleMenuBar,
    SimpleSideBar,
    SvgPanZoom,
    StructureComponent
  },
  data() {
    return {
      viewBox: '0 0 2 2'
    }
  },
    methods: {
      scrollToElement() {
        const elementoAlvo = document.getElementById('sas2d');
        if (elementoAlvo) {
          elementoAlvo.scrollIntoView({ behavior: 'smooth' });
        }
      },
      handleSvgViewBox(vBox) {
        //Change svg-pan-zoom viewBox according to child svg over the svg-viewbox event
        this.viewBox = '0 0 ' + vBox;
      }
    },
    mounted() {
      this.scrollToElement();
    }
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