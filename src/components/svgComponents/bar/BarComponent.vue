<template>
    <g>
        <g :transform="'rotate('+barData.theta+','+point_1.x+','+point_1.y+')'">
            <rect :x="point_1.x" :y="point_1.y-0.25" :width="barData.length" height="0.5" opacity="0"></rect>
            <line :x1="point_1.x" :y1="point_1.y" :x2="point_1.x+barData.length" :y2="point_1.y" stroke-width="0.03" stroke="black" ></line>
            <circle v-if="barElement.rot1" :cx="point_1.x+0.09" :cy="point_1.y" r="0.04" stroke="black" fill="white" stroke-width="0.02"></circle>
            <circle v-if="barElement.rot2" :cx="point_1.x+barData.length-0.09" :cy="point_1.y" r="0.04" stroke="black" fill="white" stroke-width="0.02"></circle>
            <text 
                class="textLoad"
                text-anchor="middle"
                :x="point_1.x + barData.length/2"
                :y="-point_1.y+0.1"
                font-size="0.2px" fill="black" filter="url(#textBackground)" > {{barIndex + 1}} </text>
        </g>
        <LoadBarComponent :barIndex="barIndex" />
    </g>
    
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';


import LoadBarComponent from './LoadBarComponent.vue';

export default defineComponent({
    components: {
        LoadBarComponent
    },
    props: { 
        barIndex: Number
    },
    setup(props) {
        const store = useStore();

        const barElement = computed( () => {
            return store.state.structure.barList[props.barIndex];
        });

        const point_1 = computed( () => {
            return store.state.structure.pointList[barElement.value.point_1]
        });


        const barData = computed( () => {
            return store.getters.barData({ barIndex: props.barIndex })
        });

        return {
            point_1,
            barData,
            barElement
        }
    },
   
})
</script>

<style scoped>
.textLoad {
    scale: 1 -1;
}
</style>