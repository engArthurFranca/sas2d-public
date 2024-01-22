<template>
    <g @click.stop="focusElement">
        <svg :x="svg.x" :y="svg.y" viewBox="0 0 2 2" :width="scale" :height="scale">

            <rect x="0.25" y="0.25" width="1.5" height="1.5" opacity="0"></rect>
            <use :href="'#support'+point.support" :stroke="color"/>
            
            <circle cx="1" cy="1" r="0.1" :fill="color"></circle>
            <circle v-if="point.rot" cx="1" cy="1" r="0.05" fill="white"></circle>

            <text x="1.15" y="-1.05" font-size="0.4px" transform="scale(1,-1)" filter="url(#textBackground)" :fill="color">{{ pointIndex+1 }}</text>
        </svg>

        <LoadPointComponent :x="point.x" :y="point.y" :pointIndex="pointIndex" :draw_loads="point.draw_loads" color="red"></LoadPointComponent>

        <LoadPointComponent :x="point.x" :y="point.y" :pointIndex="pointIndex" :draw_loads="point.reactions" color="blue"></LoadPointComponent>
    </g>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import LoadPointComponent from './LoadPointComponent.vue';

export default defineComponent({
    data() {
        return {
            color: 'black'
        }
    },
    props: {
        scale: Number,
        pointIndex: Number
    },
    methods: { 
        focusElement() {
            this.color = 'red';
            this.$store.state.svgConfig.edit.isEditing = true;
            this.$store.state.svgConfig.edit.isPoint = true;
            this.$store.state.svgConfig.edit.index = this.pointIndex;
            window.addEventListener('click', this.handleOutClick);
        },

        handleOutClick() {
            this.color = 'black';
            this.$store.state.svgConfig.edit.isEditing = false;
            window.removeEventListener('click', this.handleClick);
        }
    },
    watch: {
        
    },
    components: {
        LoadPointComponent
    },
    setup(props) {
        const store = useStore();
        const point = computed(() => {
            return store.state.structure.pointList[props.pointIndex]
        });
        const svg = computed(() => {
            return {
                x: point.value.x - props.scale/2,
                y: point.value.y - props.scale/2
            }
        });

        return {
            svg,
            point
        };
    }
})
</script>

<style scoped>

.textLoad {
    scale: 1 -1;
}

</style>
