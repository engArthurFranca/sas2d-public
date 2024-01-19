<template>
    <!-- Grid Settings, Text background -->
    <defs>
        <!-- Grid -->
        <pattern 
            id="grid"
            patternUnits="userSpaceOnUse"
            :width="unitX"
            :height="unitY"
        >
            <rect
                x="0" y="0"
                stroke="gray" stroke-width="0.01"
                fill="none" opacity="0.4"
                :width="unitX"
                :height="unitY"
            >
            </rect>
        </pattern>

        <!-- Background for Text -->
        <filter x="0" y="0" width="1" height="0.85" id="text-bg" class="rounded-circle">
            <feFlood flood-color="white" flood-opacity="0.7" result="bg"/>
            <feGaussianBlur stdDeviation="2"/>
            <feMerge>
                <feMergeNode in="bg"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>

    <!-- Supports  -->
    <defs>
        <symbol class="support" id="support-1" width="10" height="15" viewBox="-1 -1 12 17">
        <!-- Centro ( 5 , 7.5 ) -->
        <path
            d=" M  5  7.5  
                L  1.5  1.5
                M 5 7.5
                L 8.5 1.5
                M 0 1.5
                L 10 1.5
                M 0 0
                L 10 0"
                stroke-width="5%"
        />
        </symbol>
        <symbol class="support" id="support-2" width="10" height="15" viewBox="-1 -1 12 17">
            <path
                d=" M 5 7.5 L -1 11 M 5 7.5 L -1 4 M -1 12.5 L -1 2.5 M -2.5 12.5 L -2.5 2.5"
                stroke-width="5%"
            />
        </symbol>
        <symbol class="support" id="support-3" width="10" height="15" viewBox="-1 -1 12 17">
            <path
                d=" M  5  7.5  
                    L  1.5  1.5
                    M 5 7.5
                    L 8.5 1.5
                    M 0 1.5
                    L 10 1.5

                    M 0.5 1.5
                    L 1 0
                    M 2 1.5
                    L 3 0
                    M 3.5 1.5
                    L 5 0
                    M 5.5 1.5
                    L 7 0
                    M 7.5 1.5
                    L 9 0
                    M 9.5 1.5
                    L 11 0
                "
                stroke-width="5%"
            />
        </symbol>
        <symbol class="support" id="support-4" width="10" height="15" viewBox="-1 -1 12 17">
            <path
                d=" M 4 13 L 4 1.5 M 4 1.5 L 2 4 M 4 4 L 2 7 M 4 7 L 2 10 M 4 10 L 2 13 M 4 13 L 2 16 "
                stroke-width="5%"
            />
        </symbol>
        <symbol class="support" id="support-5" width="10" height="15" viewBox="-1 -1 12 17">
            <path
                d=" M 2.5 13 L 2.5 1.5 M 2.5 1.5 L 0.5 4 M 2.5 4 L 0.5 7 M 2.5 7 L 0.5 10 M 2.5 10 L 0.5 13 M 2.5 13 L 0.5 16 M 4 1.5 L 4 13"
                stroke-width="5%"
            />
        </symbol>
        <symbol class="support" id="support-6" width="10" height="15" viewBox="-1 -1 12 17">
            <path
                d=" M -1 5 L 10.5 5 M 10.5 5 L 8 3 M 8 5 L 5 3 M 5 5 L 2 3 M 2 5 L -1 3 M -1 5 L -4 3 M 10.5 6.5 L -1 6.5"
                stroke-width="5%"
            />
        </symbol>
        <symbol class="support" id="support-7" width="10" height="15" viewBox="-1 -1 12 17">
            <path
                d="M -1 2 L 10.5 2 M 10.5 2 L 8 0 M 8 2 L 5 0 M 5 2 L 2 0 M 2 2 L -1 0 M -1 2 L -4 0 M 4.5 2 L 4.5 3 M 1 4 L 8 5 L 4.5 6 L 8 5 M 4.5 3 L 1 4 M 4.5 6 L 4.5 8"
                stroke-width="5%"
            />
        </symbol>
        <symbol class="support" id="support-8" width="10" height="15" viewBox="-1 -1 12 17">
            <path
                d=" M -1.5 13.5 L -1.5 2 M -1.5 2 L -3.5 4.5 M -1.5 4.5 L -3.5 7.5 M -1.5 7.5 L -3.5 10.5 M -1.5 10.5 L -3.5 13.5 M -1.5 13.5 L -3.5 16.5 M -1.5 8 L -0.5 8 M 0.5 11.5 L 1.5 4.5 L 2.5 8 L 1.5 4.5 M -0.5 8 L 0.5 11.5 M 2.5 8 L 4.5 8"
                stroke-width="5%"
                />
        </symbol>
        <symbol class="support" id="support-9" width="10" height="15" viewBox="-1 -1 12 17">
            <path
                d=" M  5  7.5  
                    L  1.5  1.5
                    M 5 7.5
                    L 8.5 1.5
                    M 0 1.5
                    L 10 1.5

                    M 0.5 1.5
                    L 1 0
                    M 2 1.5
                    L 3 0
                    M 3.5 1.5
                    L 5 0
                    M 5.5 1.5
                    L 7 0
                    M 7.5 1.5
                    L 9 0
                    M 9.5 1.5
                    L 11 0
                "
                stroke-width="5%"
            />
            <circle cx="5" cy="7.5" r="3" fill="None"></circle>
            <circle cx="5" cy="7.5" r="4.5" fill="None"></circle>
            <circle cx="5" cy="7.5" r="6" fill="None"></circle>
        </symbol>
    </defs>
    
    <!-- Arrows -->
    <defs>
        <!-- Red -->
        <marker
            id="arrow-red"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="3"
            markerHeight="4"
            fill="red"
            orient="auto-start-reverse" >
            <path d="M 0 0 L 10 5 L 0 10 z"/>
        </marker>

        <!-- Arrow Down -->
        <marker
            id="arrow-red-down"
            viewBox="-2 0 9 1"
            refX="0"
            refY="0"
            markerWidth="9"
            markerHeight="30"
            stroke="red"
            orient="0" >
            <path d="M 0 0 L 0 -11" marker-end="url(#arrow-red)" fill="red"/>
        </marker>
        <!-- Arrow Up -->
        <marker
            id="arrow-red-up"
            viewBox="-2 0 9 1"
            refX="0"
            refY="0"
            markerWidth="9"
            markerHeight="30"
            stroke="red"
            orient="0" >
            <path d="M 0 0 L 0 11" marker-end="url(#arrow-red)" fill="red"/>
        </marker>
        <!-- Arrow Right -->
        <marker
            id="arrow-red-right"
            viewBox="0 -2 11 2"
            refX="0"
            refY="0"
            markerWidth="9"
            markerHeight="30"
            stroke="red"
            orient="0" >
            <path d="M 0 0 L 9 0" marker-end="url(#arrow-red)" fill="red"/>
        </marker>
        <!-- Arrow Left -->
        <marker
            id="arrow-red-left"
            viewBox="-11 -2 11 1"
            refX="0"
            refY="0"
            markerWidth="9"
            markerHeight="30"
            stroke="red"
            orient="0" >
            <path d="M 0 0 L -9 0" marker-end="url(#arrow-red)" fill="red"/>
        </marker>
        <!-- Black -->
        <marker
            id="arrow-black"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="3"
            markerHeight="4"
            orient="auto-start-reverse" >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="black"/>
        </marker>
        <!-- Blue -->
        <marker
            id="arrow-blue"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="3"
            markerHeight="4"
            orient="auto-start-reverse" >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="blue"/>
        </marker>
    </defs>

    <!-- Loads -->
    <defs>
        <!-- Point Force Arrow -->
        <symbol id="force-arrow-red" width="13" height="5" viewBox="-3 -2 13 5">
            <line x1="0" y1="0" x2="10" y2="0" marker-start="url(#arrow-red)" stroke="red"></line>
        </symbol>
        <symbol id="force-arrow-blue" width="13" height="5" viewBox="-3 -2 13 5">
            <line x1="0" y1="0" x2="10" y2="0" marker-start="url(#arrow-blue)" stroke="blue"></line>
        </symbol>
        <symbol id="bend-left-red" width="13" height="13" viewBox="-1 -2 15 13">
            <path d=" M 10 20 A 10 10 0 0 1 10 0" marker-start="url(#arrow-red)" stroke="red" stroke-width="2" fill="None"/>
        </symbol>
        <symbol id="bend-right-red" width="13" height="13" viewBox="8 -2 15 13">
            <path d=" M 10 0 A 10 10 0 0 1 10 20" marker-end="url(#arrow-red)" stroke="red" stroke-width="2" fill="None"/>
        </symbol>
        <symbol id="bend-left-blue" width="13" height="13" viewBox="-1 -2 15 13">
            <path d=" M 10 20 A 10 10 0 0 1 10 0" marker-start="url(#arrow-blue)" stroke="blue" stroke-width="2" fill="None"/>
        </symbol>
        <symbol id="bend-right-blue" width="13" height="13" viewBox="8 -2 15 13">
            <path d=" M 10 0 A 10 10 0 0 1 10 20" marker-end="url(#arrow-blue)" stroke="blue" stroke-width="2" fill="None"/>
        </symbol>
    </defs>
</template>

<script>

export default {
    props: {
        unitX: Number,
        unitY: Number
    }
};
</script>