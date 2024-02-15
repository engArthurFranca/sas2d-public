<template>
    <g v-for="(loadItem, loadIndex) in drawLoadsLines" :key="loadIndex">
        <g v-if="drawLoads[loadIndex][0] === 11 || drawLoads[loadIndex][0] === 12">
            <path 
                marker-end="url(#arrowheadred)"
                :d="loadItem.path.d"
                stroke-width="0.03"
                fill="none"
                stroke="red"
                :transform="loadItem.path.transform"
            ></path>
            <text
                text-anchor="middle"
                :x="loadItem.text.x"
                :y="-loadItem.text.y"
                :transform="'rotate('+loadItem.text.angle+','+loadItem.text.x+','+loadItem.text.y+') scale(1,-1)'"
                font-size="0.2px" fill="red" filter="url(#textBackground)"
            >{{ loadItem.text.value }}</text>
        </g>
        <g v-else>
            <line 
                :x1="loadItem.headLine.x1" :y1="loadItem.headLine.y1" :x2="loadItem.headLine.x2" :y2="loadItem.headLine.y2" 
                stroke-width="0.03"
                stroke="red"
            ></line>
            <line  v-for="loadArrowLines in loadItem.arrowLines" :key="loadArrowLines"
                :x1="loadArrowLines.x1" 
                :y1="loadArrowLines.y1" 
                :x2="loadArrowLines.x2" 
                :y2="loadArrowLines.y2" 
                stroke-width="0.02"
                stroke="red" 
                marker-end="url(#arrowheadred)" 
                :transform="'rotate('+loadItem.arrowAngle+','+loadArrowLines.x1+','+loadArrowLines.y1+')'"
            />
            <text
                text-anchor="middle"
                :x="loadItem.text.x"
                :y="-loadItem.text.y"
                :transform="'rotate('+loadItem.text.angle+','+loadItem.text.x+','+loadItem.text.y+') scale(1,-1)'"
                font-size="0.2px" fill="red" filter="url(#textBackground)"
            >{{ loadItem.text.value }}</text>
        </g>
    </g>
</template>

<script setup>
    import { defineProps, computed } from 'vue';
    import { useStore } from 'vuex';

    const props = defineProps({
        barIndex: Number
    });

    const store = useStore();
    const point_1 = computed(() => 
        { return { 
            x: store.state.structure.pointList[ store.state.structure.barList[ props.barIndex ].point_1 ].x, 
            y: store.state.structure.pointList[ store.state.structure.barList[ props.barIndex ].point_1 ].y } } 
    );
    const point_2 = computed(() => 
        { return { 
            x: store.state.structure.pointList[ store.state.structure.barList[ props.barIndex ].point_2 ].x, 
            y: store.state.structure.pointList[ store.state.structure.barList[ props.barIndex ].point_2 ].y } } 
    );
    
    const point_max = computed(() => {
        return {
            x: Math.max(point_1.value.x, point_2.value.x),
            y: Math.max(point_1.value.y, point_2.value.y)
        }
    });
    const point_min = computed(() => {
        return {
            x: Math.min(point_1.value.x, point_2.value.x),
            y: Math.min(point_1.value.y, point_2.value.y)
        }
    });
    const point_med = computed(() => {
        return {    
            x: point_min.value.x + ( point_max.value.x - point_min.value.x ) / 2,
            y: point_min.value.y + ( point_max.value.y - point_min.value.y ) / 2
        }
    });
    
    const barData = computed(() => {
        return store.getters.barData
    });

    const barElement = computed(() => {
        return store.state.structure.barList[ props.barIndex ]
    });

    const drawLoads = computed(() => {
        return barElement.value.draw_loads.filter((load) => load[1] != 0)
    });

    const loadLinesDict = computed(() => {
        return {       
            1: (value) => 
                distributedLoad({
                    headLine: {
                        x1: point_min.value.x, 
                        y1: point_max.value.y + 0.4, 
                        x2: point_max.value.x, 
                        y2: point_max.value.y + 0.4
                    },
                    arrow: {
                        length: 0.3,
                        angle: -90,
                    },
                    text: {
                        x: point_med.value.x,
                        y: point_max.value.y + 0.5,
                        angle: 0,
                        value: value
                    },
                    flag: point_max.value.x - point_min.value.x
                }),
            2: (value) => 
                distributedLoad({
                    headLine: {
                        x1: point_min.value.x, 
                        y1: point_max.value.y + 0.05, 
                        x2: point_max.value.x, 
                        y2: point_max.value.y + 0.05
                    },
                    arrow: {
                        length: 0.3,
                        angle: 90
                    },
                    text: {
                        x: point_med.value.x,
                        y: point_max.value.y + 0.45,
                        angle: 0,
                        value: value
                    },
                    flag: point_max.value.x - point_min.value.x
                }),
            3: (value) => 
                distributedLoad({
                    headLine: {
                        x1: point_1.value.x, 
                        y1: point_1.value.y + 0.45, 
                        x2: point_2.value.x, 
                        y2: point_2.value.y + 0.45
                    },
                    arrow: {
                        length: 0.3,
                        angle:  - barData.value.theta - 90
                    },
                    text: {
                        x: point_med.value.x,
                        y: point_med.value.y + 0.50,
                        angle: 0,
                        value: value
                    },
                    flag: point_max.value.x - point_min.value.x
                }),
            4: (value) => 
                distributedLoad({
                    headLine: {
                        x1: point_1.value.x, 
                        y1: point_1.value.y + 0.05, 
                        x2: point_2.value.x, 
                        y2: point_2.value.y + 0.05
                    },
                    arrow: {
                        length: 0.3,
                        angle: - barData.value.theta + 90
                    },
                    text: {
                        x: point_med.value.x,
                        y: point_med.value.y + 0.45,
                        angle: 0,
                        value: value
                    },
                    flag: point_max.value.x - point_min.value.x
                }),
            5: (value) => 
                distributedLoad({
                    headLine: {
                        x1: point_min.value.x - 0.45, 
                        y1: point_min.value.y, 
                        x2: point_min.value.x - 0.45, 
                        y2: point_max.value.y
                    },
                    arrow: {
                        length: 0.3,
                        angle: -90
                    },
                    text: {
                        x: point_min.value.x - 0.55,
                        y: point_med.value.y,
                        angle: 90,
                        value: value
                    },
                    flag: point_2.value.y - point_1.value.y
                }),
            6: (value) => 
                distributedLoad({
                    headLine: {
                        x1: point_min.value.x - 0.05, 
                        y1: point_min.value.y, 
                        x2: point_min.value.x - 0.05, 
                        y2: point_max.value.y
                    },
                    arrow: {
                        length: 0.3,
                        angle: 90
                    },
                    text: {
                        x: point_min.value.x - 0.45,
                        y: point_med.value.y,
                        angle: 90,
                        value: value
                    },
                    flag: point_2.value.y - point_1.value.y
                }),
            7: (value) => 
                distributedLoad({
                    headLine: {
                        x1: point_1.value.x - 0.45, 
                        y1: point_1.value.y, 
                        x2: point_2.value.x - 0.45, 
                        y2: point_2.value.y
                    },
                    arrow: {
                        length: 0.3,
                        angle: -barData.value.theta
                    },
                    text: {
                        x: point_med.value.x - 0.55,
                        y: point_med.value.y,
                        angle: 0,
                        value: value
                    },
                    flag: point_2.value.y - point_1.value.y
                }),
            8: (value) => 
                distributedLoad({
                    headLine: {
                        x1: point_1.value.x - 0.05, 
                        y1: point_1.value.y, 
                        x2: point_2.value.x - 0.05, 
                        y2: point_2.value.y
                    },
                    arrow: {
                        length: 0.3,
                        angle: -barData.value.theta + 180
                    },
                    text: {
                        x: point_med.value.x - 0.45,
                        y: point_med.value.y,
                        angle: 0,
                        value: value
                    },
                    flag: point_2.value.y - point_1.value.y
                }),
            9: (value) => 
                distributedLoad({
                    headLine: {
                        x1: point_1.value.x + 0.4*Math.cos(( barData.value.theta + 90 )*Math.PI/180), 
                        y1: point_1.value.y + 0.4*Math.sin(( barData.value.theta + 90 )*Math.PI/180), 
                        x2: point_2.value.x + 0.4*Math.cos(( barData.value.theta + 90 )*Math.PI/180), 
                        y2: point_2.value.y + 0.4*Math.sin(( barData.value.theta + 90 )*Math.PI/180)
                    },
                    arrow: {
                        length: 0.3,
                        angle: -90
                    },
                    text: {
                        x: (point_1.value.x + point_2.value.x)/2 + 0.5*Math.cos(( barData.value.theta + 90 )*Math.PI/180),
                        y: (point_1.value.y + point_2.value.y)/2 + 0.5*Math.sin(( barData.value.theta + 90 )*Math.PI/180),
                        angle: 0,
                        value: value
                    },
                    flag: (point_2.value.x-point_1.value.x)**2 + (point_2.value.y-point_1.value.y)**2
                }),
            10: (value) => 
                distributedLoad({
                    headLine: {
                        x1: point_1.value.x + 0.05*Math.cos(( barData.value.theta + 90 )*Math.PI/180), 
                        y1: point_1.value.y + 0.05*Math.sin(( barData.value.theta + 90 )*Math.PI/180), 
                        x2: point_2.value.x + 0.05*Math.cos(( barData.value.theta + 90 )*Math.PI/180), 
                        y2: point_2.value.y + 0.05*Math.sin(( barData.value.theta + 90 )*Math.PI/180)
                    },
                    arrow: {
                        length: 0.3,
                        angle: 90
                    },
                    text: {
                        x: (point_1.value.x + point_2.value.x)/2 + 0.5*Math.cos(( barData.value.theta + 90 )*Math.PI/180),
                        y: (point_1.value.y + point_2.value.y)/2 + 0.5*Math.sin(( barData.value.theta + 90 )*Math.PI/180),
                        angle: 0,
                        value: value
                    },
                    flag: (point_2.value.x-point_1.value.x)**2 + (point_2.value.y-point_1.value.y)**2
                }),
            11: (value) => bendBarLoad( { loadType: 11, value: value } ),
            12: (value) => bendBarLoad( { loadType: 12, value: value } ),
        }
    });

    function bendBarLoad({loadType, value}) {
        if ( loadType == 11 ) {
            if ( value >= 0 ) { //11 and positive
                return {
                    path: {
                        d: 'M '+(point_1.value.x+0.1)+','+(point_1.value.y-0.2)+' A 0.2,0.2 0 0 1 '+(point_1.value.x+0.1)+','+(point_1.value.y+0.2),
                        transform: 'rotate('+barData.value.theta+','+point_1.value.x+', '+point_1.value.y+')'
                    },
                    text: {
                        x: point_1.value.x + 0.35*Math.cos(( barData.value.theta+90 )*Math.PI/180),
                        y: point_1.value.y + 0.35*Math.sin(( barData.value.theta+90 )*Math.PI/180),
                        angle: 0,
                        value: value,
                    }
                }
            } else { //11 and negative
                return {
                    path: {
                        d: 'M '+(point_1.value.x+0.3)+','+(point_1.value.y-0.2)+' A 0.2,0.2 0 1 0 '+(point_1.value.x+0.3)+','+(point_1.value.y+0.2),
                        transform: 'rotate('+barData.value.theta+','+point_1.value.x+', '+point_1.value.y+')'
                    },
                    text: {
                        x: point_1.value.x + 0.25*Math.cos(( barData.value.theta+90 )*Math.PI/180),
                        y: point_1.value.y + 0.25*Math.sin(( barData.value.theta+90 )*Math.PI/180),
                        angle: 0,
                        value: -value,
                    }
                }
            }
        } else {
            if ( value >= 0 ) { // 12 and positive
                return {
                    path: {
                        d: 'M '+(point_2.value.x-0.05)+','+(point_2.value.y-0.2)+' A 0.2,0.2 0 1 0 '+(point_2.value.x-0.05)+','+(point_2.value.y+0.2),
                        transform: 'rotate('+barData.value.theta+','+point_2.value.x+', '+point_2.value.y+')'
                    },
                    text: {
                        x: point_2.value.x + 0.35*Math.cos(( barData.value.theta+90 )*Math.PI/180),
                        y: point_2.value.y + 0.35*Math.sin(( barData.value.theta+90 )*Math.PI/180),
                        angle: 0,
                        value: value,
                    }
                }
            } else { // 12 and negative
                return {
                    path: {
                        d: 'M '+(point_2.value.x-0.3)+','+(point_2.value.y-0.2)+' A 0.2,0.2 0 0 1 '+(point_2.value.x-0.3)+','+(point_2.value.y+0.2),
                        transform: 'rotate('+barData.value.theta+','+point_2.value.x+', '+point_2.value.y+')'
                    },
                    text: {
                        x: point_2.value.x + 0.3*Math.cos(( barData.value.theta+90 )*Math.PI/180),
                        y: point_2.value.y + 0.3*Math.sin(( barData.value.theta+90 )*Math.PI/180),
                        angle: 0,
                        value: -value,
                    }
                }
            }
        }
    }

    function distributedLoad({ headLine, arrow, text, flag }) {
        //Check if flag is not zero
        if ( flag == 0 ) { return { headLine: { x1:0, y1:0, x2:0, y2:0 }, text: {x:0, y:0}} }

        //dL - Distance between arrows
        //arrowLength - length of arrow
        //deltaX and deltaY - Length X and Y of the headline
        
        let deltaX = headLine.x2 - headLine.x1, deltaY =  headLine.y2 - headLine.y1,
        lineLength = (( deltaX**2 + deltaY**2 ) ** 0.5).toFixed(2), 
        dL = lineLength >= 0.2? 0.2 : lineLength,
        lineDict = {
            arrowAngle: arrow.angle,
            headLine: headLine,
            arrowLines: [],
            text: text
        },
        unitVector = { x: deltaX/lineLength, y: deltaY/lineLength },
        n = Math.max(Math.ceil( lineLength/dL ), 2), adjust = lineLength%dL/(n - 1);


        for (let i = 0; i < n ; i++) {
            let initialPoint = {
                x: headLine.x1 + i*(dL + adjust)*unitVector.x,
                y: headLine.y1 + i*(dL + adjust)*unitVector.y
            };
            lineDict['arrowLines'].push({
                x1: initialPoint.x,
                y1: initialPoint.y,
                x2: initialPoint.x + arrow.length*unitVector.x,
                y2: initialPoint.y + arrow.length*unitVector.y
            })
        }
        lineDict['arrowLines'].push({
            x1: headLine.x2,
            y1: headLine.y2,
            x2: headLine.x2 + arrow.length*unitVector.x,
            y2: headLine.y2 + arrow.length*unitVector.y
        })

        return lineDict;
    }

    const drawLoadsLines = computed(() => {
        let drawLoadsList = [];
        for (let i = 0; i < drawLoads.value.length; i++) {
            drawLoadsList.push( loadLinesDict.value[ drawLoads.value[i][0] ]( drawLoads.value[i][1]) )
        }
        return drawLoadsList
    });

</script>