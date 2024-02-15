<template>
    <g @click="focusElement">
        <g :transform="'rotate('+barData.theta+','+point_1.x+','+point_1.y+')'">
            <rect :x="point_1.x" :y="point_1.y-0.25" :width="barData.length" height="0.5" opacity="0"></rect>
            <line :x1="point_1.x" :y1="point_1.y" :x2="point_1.x+barData.length" :y2="point_1.y" stroke-width="0.03" :stroke="color" ></line>
            <circle v-if="barElement.rot[0]" :cx="point_1.x+0.09" :cy="point_1.y" r="0.04" :stroke="color" fill="white" stroke-width="0.02"></circle>
            <circle v-if="barElement.rot[1]" :cx="point_1.x+barData.length-0.09" :cy="point_1.y" r="0.04" :stroke="color" fill="white" stroke-width="0.02"></circle>
            <text 
                class="textLoad"
                text-anchor="middle"
                :x="point_1.x + barData.length/2"
                :y="-point_1.y+0.1"
                font-size="0.2px" :fill="color" filter="url(#textBackground)" > {{barIndex + 1}} </text>
        </g>
        <LoadBarComponent :barIndex="barIndex" />
    </g>
    
</template>

<script setup>
    import { defineProps, ref, computed, watchEffect } from 'vue';
    import { useStore } from 'vuex';

    import LoadBarComponent from './LoadBarComponent.vue';

    const props = defineProps({
        barIndex: Number
    });

    const store = useStore();

    const barElement = computed(() => {
        return store.state.structure.barList[props.barIndex]
    });

    const point_1 = computed( () => {
        return store.state.structure.pointList[barElement.value.point_1]
    });


    const barData = computed( () => {
        return store.getters.barData({ barIndex: props.barIndex })
    });

    let color = ref('black');

    let editIndex = computed(() => {
        return store.state.svgConfig.edit.index
    });

    function focusElement() {
        store.state.svgConfig.edit.isEditing = true;
        store.state.svgConfig.edit.isPoint = false;
        store.state.svgConfig.edit.index = props.barIndex;
    }

    watchEffect(() => {
        if (store.state.svgConfig.edit.isEditing && !store.state.svgConfig.edit.isPoint && (editIndex.value == props.barIndex)) {
            color.value = 'red';
        } else {
            color.value = 'black';
        }
    });

</script>

<style scoped>
.textLoad {
    scale: 1 -1;
}
</style>