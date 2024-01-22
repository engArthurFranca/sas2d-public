<template>
    <div class="bg-gray-500 rounded-bl rounded-br pt-0 mt-0 w-60">
        <form>
            <label class="block mt-0 pt-2 pb-2 text-sm font-medium">Coordinates</label>

            <NumberInput labelClass="w-8" label="X" :value="point.x" 
                @inputEvent="(newValue) => point.x = newValue" ></NumberInput>
            <NumberInput labelClass="w-8" label="Y" :value="point.y" 
                @inputEvent="(newValue) => point.y = newValue" ></NumberInput>

            <label for="support" class="block m-2 text-sm font-medium">Support</label>

            <div class="inline-flex mb-4">
                <SelectInput ref="selectSupport" buttonClass="w-14 h-14" optionsClass="grid grid-cols-2 gap-0 w-40">
                    <template #buttonSlot>
                        <svg class="h-12 w-12" viewBox="0.25 0.25 1.5 1.5" width="80" height="80" transform="scale(1,-1)">
                            <use :href="'#support' + point.support" stroke="black" />
                            <circle cx="1" cy="1" r="0.1"></circle>
                            <circle v-show="point.rot" cx="1" cy="1" r="0.06" fill="white"></circle>
                        </svg>
                    </template>

                    <template #options>
                        <a  class="block w-20 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" 
                            @click.stop="selectOption(0)" > No Support </a>
                        <a v-for="support in 9" :key="support" class="block w-20 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" 
                            @click.stop="selectOption(support)"
                        >
                            <svg class="h-10 w-10" viewBox="0.25 0.25 1.5 1.5" width="80" height="80" transform="scale(1,-1)">
                                <use :href="'#support' + support" stroke="black" />
                                <circle cx="1" cy="1" r="0.1"></circle>
                                <circle v-show="point.rot" cx="1" cy="1" r="0.06" fill="white"></circle>
                            </svg>
                        </a>
                    </template>
                </SelectInput>


                <label class="block mb-2 mt-3 cursor-pointer">
                <input type="checkbox" id="rot" name="rot" class="mr-2  cursor-pointer" v-model="point.rot">
                Rot
                </label>
            </div>
            
            <label  class="block mb-2"> Force </label>

            <NumberInput labelClass="w-16" label="Value" :value="point.draw_loads[0][1]" 
                @inputEvent="(newValue) => point.draw_loads[0][1] = newValue"></NumberInput>
            <NumberInput labelClass="w-16" label="Angle" :value="point.draw_loads[0][2]" 
                @inputEvent="(newValue) => point.draw_loads[0][2] = newValue"></NumberInput>

            <label  class="block mt-2 mb-2"> Bend </label>

            <NumberInput labelClass="w-16" label="Angle" :value="point.draw_loads[1][1]" 
                @inputEvent="(newValue) => point.draw_loads[1][1] = newValue"></NumberInput>

            <button type="button" @click="addPoint" class="bg-blue-500 text-white px-4 py-2 rounded m-4"> Add </button>
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
            selectSupport: false,
            point: {
                x: 0,
                y: 0,
                rot: false,
                support: 0,
                draw_loads: [[1,0,0], [2,0,0]]
            }
        }
    },
    methods: {

        addPoint() {
            this.$store.commit('addPoint', this.point);
            this.point = {
                x: 0,
                y: 0,
                rot: false,
                support: 0,
                draw_loads: [[1,0,0], [2,0,0]]
            }
            this.$refs.selectSupport.closeSelect();
            this.$emit('close-menu')
        },
        selectOption(support) {
            this.point.support = support;
            this.$refs.selectSupport.closeSelect();
        }

    },
}

</script>

<style scoped>
    .NumberInput span {
        width: 20px;
    }
</style>