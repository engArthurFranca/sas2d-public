<template>
    <svg :viewBox="viewBox.str" >
        <DefsComponent></DefsComponent>
        <rect v-show="grid.show" :x="viewBox.x" :y="viewBox.y" @click="store.state.svgConfig.edit.isEditing = false" width="100%" height="100%" fill="url(#grid)" id="rect_grid"></rect>
        <!-- <path class="axis" d="m 0 0 L 0.5 0 L 0.4 0.1 L 0.5 0 L 0.4 -0.1 L 0.5 0 z" fill="None" stroke-width="0.04" stroke="black" opacity="0.5"></path>
        <path class="axis" d="m 0 0 L 0 0.5 L 0.1 0.4 L 0 0.5 L -0.1 0.4 L 0 0.5 z" fill="None" stroke-width="0.04" stroke="black" opacity="0.5"></path> -->
        <g class="bars">
            <BarComponent class="bar" v-for="barIndex in barList.length" :barIndex="barIndex-1" :key="barIndex"></BarComponent>
        </g>
        <g class="points">
            <PointComponent class="point" v-for="pointIndex in pointList.length" :pointIndex="pointIndex-1" :key="pointIndex" :scale="1"></PointComponent>
        </g>
    </svg>
</template>

<script setup>
    import { computed, getCurrentInstance } from 'vue';
    import { useStore } from 'vuex';

    import DefsComponent from '@/components/svgComponents/DefsComponent.vue';
    import PointComponent from './point/PointComponent.vue';
    import BarComponent from './bar/BarComponent.vue';

    const instance = getCurrentInstance();
    const side = 1;
    const store = useStore();

    const pointList = computed(() => {
        return store.state.structure.pointList
    });

    const barList = computed(() => {
        return store.state.structure.barList
    });

    const grid = computed(() => {
        return store.state.svgConfig.grid
    })

    const viewBox = computed(() => {
        let coordinate_list = pointList.value.map( (point) => [point.x, point.y] ),
        x_max= Math.max(...coordinate_list.map(coordinate => coordinate[0] )),
        x_min= Math.min(...coordinate_list.map(coordinate => coordinate[0] )),
        y_max= Math.max(...coordinate_list.map(coordinate => coordinate[1] )),
        y_min= Math.min(...coordinate_list.map(coordinate => coordinate[1] )),
        width = Math.max(x_max - x_min, 0),
        height = Math.max(y_max - y_min, 0),
        str = '';

        x_min = x_min > 500 ? 0 : x_min;
        y_min = y_min > 500 ? 0 : y_min;
        str = (x_min-side)+' '+(y_min-side)+' '+(width+2*side)+' '+(height+2*side);
    
        instance.emit('svg-viewbox', (width+2*side)+' '+(height+2*side));
        return {
            x: x_min-side,
            y: y_min-side,
            width: width+2*side,
            height: height+2*side,
            str: str
        }
    });

</script>

<style scoped>
    svg {
        width: 100%;
        height: auto;
        border: 2px solid black;
        transform: scaleY(-1);
    }
    .grid-input, .input-group-text {
        width: 40px;
        height: 20px;
        margin-top: 2px;
    }

    .point:hover, .bar:hover {
        cursor: pointer;
    }
</style>
