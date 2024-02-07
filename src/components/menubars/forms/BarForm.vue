<template>
  <div class="bg-gray-300 text-black rounded-bl rounded-br pt-0 mt-0 w-60">
    <label class="block mt-0 pt-2 pb-2 text-base font-medium">Points</label>

    <div class="grid grid-cols-2 gap-y-0.5 items-center mb-2" >
      <label class="mr-2 w-20 m-auto" > Inital Point: </label>
      <SelectInput 
        buttonClass="relative p-1" 
        optionsClass="absolute origin-top-left top-2 left-8 border bg-white rounded flex flex-col text-center w-20">
        <template #buttonSlot>
          <a class="w-20">Point {{ bar.point_1 + 1 }}</a>
        </template>
        <template #options>
          <a v-for="pointIndex in pointList.length" :key="pointIndex" @click="bar.point_1 = pointIndex - 1; "
          class="w-20 text-gray-700 hover:bg-gray-300 cursor-pointer"> Point {{ pointIndex }}</a>
        </template>
      </SelectInput>

      <label class="mr-2 w-20 m-auto" > Final Point: </label>
      <SelectInput 
        buttonClass="relative p-1" 
        optionsClass="absolute origin-top-left top-2 left-8 border bg-white rounded flex flex-col text-center w-20">
        <template #buttonSlot>
          <a class="w-20">Point {{ bar.point_2 + 1 }}</a>
        </template>
        <template #options>
          <a v-for="pointIndex in pointList.length" :key="pointIndex" class="w-20 text-gray-700 hover:bg-gray-300 cursor-pointer"> Point {{ pointIndex }}</a>
        </template>
      </SelectInput>
    </div>
    <div class="grid grid-cols-2 mb-3">
      <label class="mr-4 m-auto "> Rots:</label>
      <div class="flex items-center">
        <input type="checkbox" id="rot" name="rot" class="float-left mr-2" v-model="bar.rot[0]">
        <input type="checkbox" id="rot" name="rot" class="float-left" v-model="bar.rot[1]">
      </div>
    </div>
    
      
    
    <div>
      <label  class="block text-base mb-2">
        Loads
      </label>

      <div class="inline-flex items-center ml-5">
        <label class="mr-2 mb-2">Type: </label>
        <SelectInput buttonClass="w-40  h-16" optionsClass="w-20">
        
        </SelectInput>
      </div>
        
        <NumberInput label="Value" :value="bar.draw_loads[0][1]" ></NumberInput>
    </div>
    

    <button type="button" @click="addBar" class="bg-blue-700 text-white px-4 py-2 rounded m-4"> Add </button>
  </div>
</template>

<script setup>
  import NumberInput from "./inputs/NumberInput.vue";
  import SelectInput from "./inputs/SelectInput.vue";

  import { ref, defineEmits } from "vue";
  import { useStore } from "vuex";

  let bar = ref({
    point_1: 0, 
    point_2: 1, 
    draw_loads: [[0,0]],
    materials: [1,1,1],
    rot: [false, false]
  });

  const store = useStore();
  const emits = defineEmits(['close-menu']);

  const pointList = store.state.structure.pointList;

  const addBar = () => {
    store.commit( 'addBar', bar.value );
    bar.value = {
      point_1: 0, 
      point_2: 1, 
      draw_loads: [[0,0]],
      materials: [1,1,1],
      rot: [false, false]
    };
    emits('close-menu');
  }
</script>