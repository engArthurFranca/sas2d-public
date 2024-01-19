<template>
  <div class="sas2d" id="sas2d">
    <SimpleMenuBar class="menuBar"></SimpleMenuBar>
    <SimpleSideBar class="sideBar"></SimpleSideBar>
    <div class="mainFrame">
      <SvgPanZoom >

        <DefsComponent></DefsComponent>
        <text> TE AMO, MARCOS!</text>
        <path fill="red" fill-rule="evenodd"
          d="M20.141 11.92A4.637 4.637 0 0016.861 4c-1.23 0-2.41.489-3.28 1.36l-.52.52a1.5 1.5 0 01-2.122 0l-.52-.52a4.639 4.639 0 00-6.56 6.56l8.14 8.14 8.142-8.14zM12 4.818l.52-.52A6.14 6.14 0 1121.2 12.98l-8.68 8.681a.737.737 0 01-1.042 0l-8.681-8.68a6.139 6.139 0 018.682-8.682l.52.52z">
        </path>
      </SvgPanZoom>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import SimpleMenuBar from '@/components/menubars/SimpleMenuBar.vue';
  import SimpleSideBar from '@/components/menubars/SimpleSideBar.vue';
  import SvgPanZoom from '@/components/svgComponents/SvgPanZoom.vue'
  import DefsComponent from '@/components/svgComponents/DefsComponent.vue';

  export default defineComponent({
    components: {
    SimpleMenuBar,
    SimpleSideBar,
    SvgPanZoom,
    DefsComponent
},
    methods: {
      scrollToElement() {
        const elementoAlvo = document.getElementById('sas2d');
        if (elementoAlvo) {
          elementoAlvo.scrollIntoView({ behavior: 'smooth' });
        }
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