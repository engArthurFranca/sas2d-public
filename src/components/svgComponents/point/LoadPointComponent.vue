<template>
    <g v-for="(loadItem, id) in draw_loads" :key="id">
        <g v-if="loadItem[0]===1 && loadItem[1] !== 0" :transform="g1Transform(loadItem[2])">
            <line 
                
                :x1="g1Line.x1" :y1="g1Line.y1" :x2="g1Line.x2" :y2="g1Line.y2"
                :stroke="color" stroke-width="0.02" :marker-end="'url(#arrowhead'+color+')'" />
            <text 
                class="textLoad"
                :id="'textLoad-'+pointIndex+'-'+id" :x="g1Text.x" :y="g1Text.y"  
                :transform="g1TextTransform(loadItem[2])"
                :text-anchor="g1TextAnchor(loadItem[2])"
                font-size="0.2px" :fill="color" filter="url(#textBackground)" > {{ loadItem[1] }} </text>
        </g>
        <g v-if="loadItem[0] === 2 && loadItem[1] !== 0">
            <g v-if="loadItem[1] > 0">
                <path 
                    :d="g2PathRight()"
                    fill="none"
                    :stroke="color" stroke-width="0.02" :marker-end="'url(#arrowhead'+color+')'" />
                />
                <text 
                    class="textLoad"
                    :id="'textLoad-'+pointIndex+'-'+id"
                    :x="x+0.2"
                    :y="-y-0.2"
                    text-anchor="start"
                    font-size="0.2px" :fill="color" filter="url(#textBackground)" > {{ loadItem[1] }} </text>
            </g>
            <g v-if="loadItem[1] < 0">
                <path 
                    :d="g2PathLeft()"
                    fill="none"
                    :stroke="color" stroke-width="0.02" :marker-end="'url(#arrowhead'+color+')'" />
                />
                <text 
                    class="textLoad"
                    :id="'textLoad-'+pointIndex+'-'+id"
                    :x="x-0.2"
                    :y="-y-0.2"
                    text-anchor="end"
                    font-size="0.2px" :fill="color" filter="url(#textBackground)" > {{ -loadItem[1] }} </text>
            </g>
        </g>
    </g>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
    props: {
        x: Number,
        y: Number,
        pointIndex: Number,
        color: String,
        draw_loads: Object
    },
    setup(props) {

        const g1Line = computed(() => {
            return {
                x1: props.x+0.5,
                y1: props.y,
                x2: props.x+0.1,
                y2: props.y
            }
        });
        const g1Text = computed(() => {
            return {
                x: props.x+0.5,
                y: -props.y
            }
        });

        function g1Transform(angle) {
            return 'rotate('+angle+' '+props.x+' '+props.y+')'
        }

        function g1TextTransform(angle) {
            return 'rotate('+angle+' '+this.g1Text.x+' '+this.g1Text.y+')'
        }

        function g1TextAnchor(angle) {
            let angleRad = (angle* Math.PI) / 180;

            if (Math.round(Math.cos(angleRad), -2)>0) {
                    return 'start'
            } else {
                if (Math.round(Math.cos(angleRad), -2)===0) {
                    return 'middle'
                } else {
                    return 'end'
                }
            }
        }

        function g2PathRight() {
            return 'M'+(props.x+0.03)+','+(props.y-0.2)+' A 0.2,0.2 0 0 1 '+(props.x+0.06)+' '+(props.y+0.2)
        }

        function g2PathLeft() {
            return 'M'+(props.x-0.03)+','+(props.y-0.2)+' A 0.2,0.2 0 1 0 '+(props.x-0.06)+' '+(props.y+0.2)
        }

        return {
            g1Line,
            g1Transform,
            g1Text,
            g1TextTransform,
            g1TextAnchor,
            g2PathRight,
            g2PathLeft
        }
    },
})
</script>

<style scoped>

.textLoad {
    scale: 1 -1;
}

</style>