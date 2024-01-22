<template>
    <div class="bg-gray-500 rounded-bl rounded-br pt-0 mt-0 w-60">
        <form>
            <label class="block mt-0 pt-2 pb-2 text-sm font-medium">Points</label>

            <div class="inline-flex items-center mb-1" >
              <label class="mr-2 w-20" > Inital Point: </label>
              <SelectInput buttonClass="p-1" optionsClass="flex flex-col text-center w-20">
                <template #buttonSlot>
                  <a>Choose a point</a>
                </template>
                <template #options>
                  <a v-for="pointIndex in 3" :key="pointIndex" class="text-gray-700 hover:bg-gray-300 cursor-pointer"> Point {{ pointIndex }}</a>
                </template>
              </SelectInput>
            </div>

            <div class="inline-flex items-center mb-1" >
              <label class="mr-2 w-20" > Final Point: </label>
              <SelectInput buttonClass="p-1" optionsClass="flex flex-col text-center w-20">
                <template #buttonSlot>
                  <a>Choose a point</a>
                </template>
                <template #options>
                  <a v-for="pointIndex in 3" :key="pointIndex" class="text-gray-700 hover:bg-gray-300 cursor-pointer"> Point {{ pointIndex }}</a>
                </template>
              </SelectInput>
            </div>
            


            <label class="block mb-2"> Rots
              <input type="checkbox" id="rot" name="rot" class="mr-2" v-model="bar.rot[0]">
              <input type="checkbox" id="rot" name="rot" class="mr-2" v-model="bar.rot[1]">
            </label>

            <label  class="block mb-2">
              Loads
            </label>

            <div>
              <div class="inline-flex items-center">
                <label class="mr-2 mb-2">Type: </label>
                <SelectInput buttonClass="w-20 h-10" optionsClass="w-20">
                
                </SelectInput>
              </div>
              
              <NumberInput label="Value" :value="bar.draw_loads[0][1]" ></NumberInput>
            </div>
            

            <button type="button" @click="addBar" class="bg-blue-500 text-white px-4 py-2 rounded m-4"> Add </button>
        </form>
    </div>
</template>

<script>

import NumberInput from "./inputs/NumberInput.vue";
import SelectInput from "./inputs/SelectInput.vue";

export default {

  components: {
    NumberInput,
    SelectInput
  },
  data() {
    return {
      bar: {
        point_1: 0, 
        point_2: 1, 
        draw_loads: [[0,0]],
        materials: [1,1,1],
        rot: [false, false]
      }
    }
  },
  methods: {
    addBar() {
      this.$store.commit('addBar', this.bar);
      this.point = {
        point_1: 0, 
        point_2: 1, 
        draw_loads: [[0,0]],
        materials: [1,1,1],
        rot: [false, false]
      } 
      this.$emit('close-menu')
    }
  },
}
</script>