﻿<template>
    <div class="bg-gray-300 text-black rounded-bl rounded-br pt-0 pb-2 mt-0 w-60">
        <label class="block mt-0 pt-2 pb-2 text-base font-medium">Coordinates</label>

        <NumberInput labelClass="w-8" label="X" :value="point.x" 
        @inputEvent="(newValue) => point.x = newValue" ></NumberInput>
        <NumberInput labelClass="w-8" label="Y" :value="point.y" 
            @inputEvent="(newValue) => point.y = newValue" ></NumberInput>

        <label for="support" class="block m-2 text-base font-medium">Support</label>

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
        
        <label  class="block text-base mb-2"> Force </label>

        <NumberInput labelClass="w-16" label="Value" :value="point.draw_loads[0][1]" 
            @inputEvent="(newValue) => point.draw_loads[0][1] = newValue"></NumberInput>
        <NumberInput labelClass="w-16" label="Angle" :value="point.draw_loads[0][2]" 
            @inputEvent="(newValue) => point.draw_loads[0][2] = newValue"></NumberInput>

        <label  class="block mt-2 text-base mb-2"> Bend </label>

        <NumberInput labelClass="w-16" label="Angle" :value="point.draw_loads[1][1]" 
            @inputEvent="(newValue) => point.draw_loads[1][1] = newValue"></NumberInput>
        

        <button v-if="isNew" type="button" @click="addPoint" class="bg-blue-700 text-white px-4 py-2 rounded m-4"> Add </button>
    </div>
</template>

<script setup>
    import NumberInput from "./inputs/NumberInput.vue";
    import SelectInput from "./inputs/SelectInput.vue";

    import { ref, defineEmits, defineProps, computed } from "vue";
    import { useStore } from "vuex";

    const props = defineProps({
        index: Number
    });
    const store = useStore();
    const emits = defineEmits(['close-menu'])

    const isNew = props.index == null;

    let point = isNew?
    computed(() => store.state.structure.pointModel)
    : computed(() => store.state.structure.pointList[props.index]);

    const selectSupport = ref(null);

    const addPoint = () => {
        store.commit( 'addPoint' );
        selectSupport.value.closeSelect();
        emits('close-menu');
    };

    const selectOption = (support) => {
        point.value.support = support;
        selectSupport.value.closeSelect();
    };

</script>