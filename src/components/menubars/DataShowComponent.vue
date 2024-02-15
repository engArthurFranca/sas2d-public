<template>
    <div class="absolute bottom-0 w-full">
        <div class="flex items-center justify-center align-middle">
            <button 
                @click="toogleElement"
                :class=" isElement? 'bg-blue-600': 'bg-gray-600'"
                class="text-white text-sm p-1 hover:bg-blue-600 -mb-2"
            >Elements</button>
            <button 
                @click="toogleMatrices"
                :class=" isMatrices? 'bg-blue-600': 'bg-gray-600'"
                class="text-white text-sm p-1 ml-1 hover:bg-blue-600 -mb-2"
            >Matrices</button>
            
        </div>
        <div 
            class="w-full h-3 bg-transparent border-b-4 border-gray-700 " 
            :style="isActive? 'cursor: row-resize': 'cursor: default'"
            @mousedown="startPan"
        ></div>
        <div 
            class="w-full bg-gray-400" 
            v-if="isActive"
            style="min-height: 100px; max-height: 80vh;"
            :style="`height: ${divHeight}px`">
            <p v-if="isElement"> Element </p>
            <p v-else> Matrices </p>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import usePan from '@/composable/usePan';

    const { toogleElement, toogleMatrices, isElement, isMatrices, isActive } = useDisplay();

    const { deltaY, startPan } = usePan();

    let divHeight = computed(() => {
        return 150 - deltaY.value;
    });

    function useDisplay() {
        let isElement = ref(false);
        let isMatrices = ref(false);
        let isActive = computed(() => {
            return isElement.value || isMatrices.value
        });

        function toogleElement() {
            isElement.value = !isElement.value;
            isMatrices.value = false;
        }

        function toogleMatrices() {
            isMatrices.value = !isMatrices.value;
            isElement.value = false;
        }

        return {
            toogleElement,
            toogleMatrices,
            isElement,
            isMatrices,
            isActive
        }
    }

</script>