﻿<template>
    <g :id="'point-'+pointIndex" @click="trigger">
        <svg :x="svg.x" :y="svg.y" viewBox="0 0 2 2" :width="scale" :height="scale">

            <rect x="0.25" y="0.25" width="1.5" height="1.5" opacity="0"></rect>
            <use :href="'#support'+point.support" :stroke="color"/>
            
            <circle cx="1" cy="1" r="0.1" :fill="color"></circle>
            <circle v-if="point.rot" cx="1" cy="1" r="0.05" fill="white"></circle>

            <text x="1.15" y="-1.05" font-size="0.4px" transform="scale(1,-1)" filter="url(#textBackground)" :fill="color">{{ pointIndex+1 }}</text>
            <text x="1.15" y="-0.8" font-size="0.2px" transform="scale(1,-1)" filter="url(#textBackground)" :fill="color">({{ point.x }},{{ point.y }})</text>
        </svg>

        <LoadPointComponent :x="point.x" :y="point.y" :pointIndex="pointIndex" :draw_loads="point.draw_loads" color="red"></LoadPointComponent>

        <LoadPointComponent :x="point.x" :y="point.y" :pointIndex="pointIndex" :draw_loads="point.reactions" color="blue"></LoadPointComponent>
    </g>
</template>

<script setup>
    import { computed, defineProps } from 'vue';
    import { useStore } from 'vuex';

    import useTrigger from '@/composable/useTrigger';

    import LoadPointComponent from './LoadPointComponent.vue';

    const store = useStore();
    const props = defineProps({ 
        scale: Number,
        pointIndex: Number
    });

    const point = computed(() => {
        return store.state.structure.pointList[props.pointIndex]
    });
    const svg = computed(() => {
        return {
            x: point.value.x - props.scale/2,
            y: point.value.y - props.scale/2
        }
    });


    const { isActive, trigger } = useTrigger( {
        idList: [ 'point-'+props.pointIndex, 'editButton' ], 
        triggerFunc: focusElement,
        unTriggerFunc: unFocusElement
    } );

    let color = computed(() => { return isActive.value ? 'red' : 'black' });

    function focusElement() {
        store.state.svgConfig.edit.isEditing = true;
        store.state.svgConfig.edit.isPoint = true;
        store.state.svgConfig.edit.index = props.pointIndex;
    }

    function unFocusElement() {
        store.state.svgConfig.edit.isEditing = false;
    }


</script>

<style scoped>

.textLoad {
    scale: 1 -1;
}

</style>
