<template>
    <!-- Grid Settings, Text background -->
    <defs>
        <pattern id="grid" :width="this.$store.state.svgConfig.grid.dx" :height="this.$store.state.svgConfig.grid.dy" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" :width="this.$store.state.svgConfig.grid.dx" :height="this.$store.state.svgConfig.grid.dy" 
                stroke="gray" fill="none" stroke-width="0.01"
                opacity="0.4"></rect>
        </pattern>
        <marker id="arrowheadred" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
            <polygon points="0 0, 5 2.5, 0 5" stroke="red" fill="red"/>
        </marker>
        <marker id="arrowheadblue" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
            <polygon points="0 0, 5 2.5, 0 5" stroke="blue" fill="blue"/>
        </marker>
        <filter x="0" y="0" width="1" height="1" id="textBackground">
            <feFlood flood-color="rgba(255,255,255, 0.45)" result="bg" />
            <feMerge>
                <feMergeNode in="bg"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    <defs>
        <symbol id="support1">
            <line x1="1" y1="1" x2="0.7" y2="0.5" stroke-width="0.04" />
            <line x1="1" y1="1" x2="1.3" y2="0.5" stroke-width="0.04" />
            <line x1="0.6" y1="0.5" x2="1.4" y2="0.5" stroke-width="0.04" />
            <line x1="0.6" y1="0.425" x2="1.4" y2="0.425" stroke-width="0.04" />
        </symbol>
        <symbol id="support2" > 
            <line x1="1" y1="1" x2="0.5" y2="0.7" stroke-width="0.04" />
            <line x1="1" y1="1" x2="0.5" y2="1.3" stroke-width="0.04" />
            <line x1="0.5" y1="0.6" x2="0.5" y2="1.4" stroke-width="0.04" />
            <line x1="0.425" y1="0.6" x2="0.425" y2="1.4" stroke-width="0.04" />
        </symbol>
        <symbol id="support3">
            <line x1="1" y1="1" x2="0.7" y2="0.5" stroke-width="0.04" />
            <line x1="1" y1="1" x2="1.3" y2="0.5" stroke-width="0.04" />
            <line x1="0.6" y1="0.5" x2="1.4" y2="0.5" stroke-width="0.04" />
            <line v-for="n in 10" :key="n" :x1="0.5+n*0.08" y1="0.425" :x2="0.6+n*0.08" y2="0.5" stroke-width="0.04" />
        </symbol>
        <symbol id="support4">
            <line x1="0.9" y1="0.6" x2="0.9" y2="1.4" stroke-width="0.04" />
            <line v-for="n in 10" :key="n" x1="0.825" :y1="0.5+n*0.08" x2="0.9" :y2="0.6+n*0.08" stroke-width="0.04" />
        </symbol>
        <symbol id="support5">
            <line x1="0.9" y1="0.6" x2="0.9" y2="1.4" stroke-width="0.04" />
            <line x1="0.825" y1="0.6" x2="0.825" y2="1.4" stroke-width="0.04" />
            <line v-for="n in 10" :key="n" x1="0.75" :y1="0.5+n*0.08" x2="0.825" :y2="0.6+n*0.08" stroke-width="0.04" />
        </symbol>
        <symbol id="support6">
            <line x1="0.6" y1="0.9" x2="1.4" y2="0.9" stroke-width="0.04" />
            <line x1="0.6" y1="0.825" x2="1.4" y2="0.825" stroke-width="0.04" />
            <line v-for="n in 10" :key="n" :x1="0.5+n*0.08" y1="0.75" :x2="0.6+n*0.08" y2="0.825" stroke-width="0.04" />
        </symbol>
        <symbol id="support7">
            <line x1="1" y1="1" x2="1" y2="0.85" stroke-width="0.04"></line>
            <line x1="1" y1="0.5" x2="1" y2="0.55" stroke-width="0.04"></line>
            <line x1="1" y1="0.85" x2="1.2" y2="0.75" stroke-width="0.04"></line>
            <line x1="1.2" y1="0.75" x2="0.8" y2="0.65" stroke-width="0.04"></line>
            <line x1="0.8" y1="0.65" x2="1" y2="0.55" stroke-width="0.04"></line>
            <line x1="0.6" y1="0.5" x2="1.4" y2="0.5" stroke-width="0.04" />
            <line v-for="n in 10" :key="n" :x1="0.5+n*0.08" y1="0.425" :x2="0.6+n*0.08" y2="0.5" stroke-width="0.04" />
        </symbol>
        <symbol id="support8">
            <line x1="1" y1="1" x2="0.85" y2="1" stroke-width="0.04"></line>
            <line x1="0.5" y1="1" x2="0.55" y2="1" stroke-width="0.04"></line>
            <line x1="0.85" y1="1" x2="0.75" y2="1.2" stroke-width="0.04"></line>
            <line x1="0.75" y1="1.2" x2="0.65" y2="0.8" stroke-width="0.04"></line>
            <line x1="0.65" y1="0.8" x2="0.55" y2="1" stroke-width="0.04"></line>

            <line x1="0.5" y1="0.6" x2="0.5" y2="1.4" stroke-width="0.04" />
            <line v-for="n in 10" :key="n" x1="0.425" :y1="0.5+n*0.08" x2="0.5" :y2="0.6+n*0.08" stroke-width="0.04" />
        </symbol>
        <symbol id="support9">
            <line x1="1" y1="1" x2="0.7" y2="0.5" stroke-width="0.04" />
            <line x1="1" y1="1" x2="1.3" y2="0.5" stroke-width="0.04" />
            <line x1="0.6" y1="0.5" x2="1.4" y2="0.5" stroke-width="0.04" />
            <line v-for="n in 10" :key="n" :x1="0.5+n*0.08" y1="0.425" :x2="0.6+n*0.08" y2="0.5" stroke-width="0.04" />
            <circle v-for="r in 3" :key="r" cx="1" cy="0.785" :r="0.05+r*0.07" fill="none" stroke-width="0.04"/>
        </symbol>
        <symbol id="barLoadIcon1" viewBox="0 0 10 10">
            <line x1="2" y1="9.9" x2="7" y2="9.9" stroke-width="0.2" stroke="red"></line>
            <line  v-for="n in 6" :key="n"
                :x1="n+1" y1="10" :x2="n+3" y2="10" 
                stroke-width="0.2" 
                marker-end="url(#arrowheadred)" 
                :transform="'rotate(-90,'+(n+1)+',10)'"
            />
            <circle cx="2" cy="2" r="0.05" stroke="black"></circle>
            <line x1="2" y1="2" x2="7" y2="7" stroke-width="0.2" stroke="black"></line>
            <circle cx="7" cy="7" r="0.05" stroke="black"></circle>
        </symbol>
        <symbol id="barLoadIcon2" viewBox="0 0 10 10">
            <line x1="2" y1="7" x2="7" y2="7" stroke-width="0.2" stroke="red"></line>
            <line  v-for="n in 6" :key="n"
                :x1="n+1" y1="7" :x2="n-1" y2="7" 
                stroke-width="0.2" 
                marker-end="url(#arrowheadred)" 
                :transform="'rotate(-90,'+(n+1)+',7)'"
            />
            <circle cx="2" cy="2" r="0.05" stroke="black" fill="black"></circle>
            <line x1="2" y1="2" x2="7" y2="7" stroke-width="0.2" stroke="black"></line>
            <circle cx="7" cy="7" r="0.05" stroke="black" fill="black"></circle>
        </symbol>
        <symbol id="barLoadIcon3" viewBox="0 0 10 10">
            <line x1="2" y1="5" x2="7" y2="10" stroke-width="0.2" stroke="red"></line>
            <line  v-for="n in 6" :key="n"
                :x1="n+1" :y1="n+4" :x2="n-1" :y2="n+4" 
                stroke-width="0.2" 
                marker-end="url(#arrowheadred)" 
                :transform="'rotate(90,'+(n+1)+','+(n+4)+')'"
            />
            <circle cx="2" cy="2" r="0.05" stroke="black" fill="black"></circle>
            <line x1="2" y1="2" x2="7" y2="7" stroke-width="0.2" stroke="black"></line>
            <circle cx="7" cy="7" r="0.05" stroke="black" fill="black"></circle>
        </symbol>
        <symbol id="barLoadIcon4" viewBox="0 0 10 10">
            <line x1="2" y1="2.5" x2="7" y2="7.5" stroke-width="0.2" stroke="red"></line>
            <line  v-for="n in 6" :key="n"
                :x1="n+1" :y1="n+1.5" :x2="n-1" :y2="n+1.5" 
                stroke-width="0.2" 
                marker-end="url(#arrowheadred)" 
                :transform="'rotate(-90,'+(n+1)+','+(n+1.5)+')'"
            />
            <circle cx="2" cy="2" r="0.05" stroke="black" fill="black"></circle>
            <line x1="2" y1="2" x2="7" y2="7" stroke-width="0.2" stroke="black"></line>
            <circle cx="7" cy="7" r="0.05" stroke="black" fill="black"></circle>
        </symbol>
        <symbol id="barLoadIcon5" viewBox="0 0 10 10">
            <line x1="0.1" y1="2" x2="0.1" y2="7" stroke-width="0.2" stroke="red"></line>
            <line  v-for="n in 6" :key="n"
                x1="0.1" :y1="n+1" x2="2.1" :y2="n+1" 
                stroke-width="0.2" 
                marker-end="url(#arrowheadred)"
            />
            <circle cx="3" cy="2" r="0.05" stroke="black" fill="black"></circle>
            <line x1="3" y1="2" x2="7" y2="7" stroke-width="0.2" stroke="black"></line>
            <circle cx="7" cy="7" r="0.05" stroke="black" fill="black"></circle>
        </symbol>
        <symbol id="barLoadIcon6" viewBox="0 0 10 10">
            <line x1="2.4" y1="2" x2="2.4" y2="7" stroke-width="0.2" stroke="red"></line>
            <line  v-for="n in 6" :key="n"
                x1="2.4" :y1="n+1" x2="0.5" :y2="n+1" 
                stroke-width="0.2" 
                marker-end="url(#arrowheadred)"
            />
            <circle cx="3" cy="2" r="0.05" stroke="black" fill="black"></circle>
            <line x1="3" y1="2" x2="7" y2="7" stroke-width="0.2" stroke="black"></line>
            <circle cx="7" cy="7" r="0.05" stroke="black" fill="black"></circle>
        </symbol>
        <symbol id="barLoadIcon7" viewBox="0 0 10 10">
            <line x1="0.1" y1="2" x2="4.1" y2="7" stroke-width="0.2" stroke="red"></line>
            <line  v-for="n in 6" :key="n"
                :x1="(-0.7+4/5*n)" :y1="n+1" :x2="(4/5*n+1.5)" :y2="n+1" 
                stroke-width="0.2" 
                marker-end="url(#arrowheadred)"
            />
            <circle cx="3" cy="2" r="0.05" stroke="black" fill="black"></circle>
            <line x1="3" y1="2" x2="7" y2="7" stroke-width="0.2" stroke="black"></line>
            <circle cx="7" cy="7" r="0.05" stroke="black" fill="black"></circle>
        </symbol>
        <symbol id="barLoadIcon8" viewBox="0 0 10 10">
            <line x1="2.1" y1="2" x2="6.3" y2="7" stroke-width="0.2" stroke="red"></line>
            <line  v-for="n in 6" :key="n"
                :x1="(1.5+4/5*n)" :y1="n+1" :x2="(4/5*n-0.3)" :y2="n+1" 
                stroke-width="0.2" 
                marker-end="url(#arrowheadred)"
            />
            <circle cx="3" cy="2" r="0.05" stroke="black" fill="black"></circle>
            <line x1="3" y1="2" x2="7" y2="7" stroke-width="0.2" stroke="black"></line>
            <circle cx="7" cy="7" r="0.05" stroke="black" fill="black"></circle>
        </symbol>
        <symbol id="barLoadIcon9" viewBox="0 0 10 10">
            <line x1="0" y1="4" x2="5" y2="9" stroke-width="0.2" stroke="red"></line>
            <line  v-for="n in 6" :key="n"
                :x1="n-1" :y1="n+3" :x2="n+1" :y2="n+3" 
                stroke-width="0.2" 
                marker-end="url(#arrowheadred)" 
                :transform="'rotate(-45,'+(n-1)+','+(n+3)+')'"
            />
            <circle cx="2" cy="2" r="0.05" stroke="black"></circle>
            <line x1="2" y1="2" x2="7" y2="7" stroke-width="0.2" stroke="black"></line>
            <circle cx="7" cy="7" r="0.05" stroke="black"></circle>
        </symbol>
        <symbol id="barLoadIcon10" viewBox="0 0 10 10">
            <line x1="1.5" y1="2.5" x2="6.5" y2="7.5" stroke-width="0.2" stroke="red"></line>
            <line  v-for="n in 6" :key="n"
                :x1="n+0.5" :y1="n+1.5" :x2="n-1.5" :y2="n+1.5" 
                stroke-width="0.2" 
                marker-end="url(#arrowheadred)" 
                :transform="'rotate(-45,'+(n+0.5)+','+(n+1.5)+')'"
            />
            <circle cx="2" cy="2" r="0.05" stroke="black"></circle>
            <line x1="2" y1="2" x2="7" y2="7" stroke-width="0.2" stroke="black"></line>
            <circle cx="7" cy="7" r="0.05" stroke="black"></circle>
        </symbol>
        <symbol id="barLoadIcon11" viewBox="0 0 10 10">
            <path 
                marker-end="url(#arrowheadred)"
                d="M 3,3 A 0.15,0.15 0 0 1 1, 1 "
                stroke-width="0.2"
                fill="none"
                transform="rotate(-90, 2, 2)"
            ></path>
            <circle cx="2" cy="2" r="0.05" stroke="black"></circle>
            <line x1="2" y1="2" x2="7" y2="7" stroke-width="0.2" stroke="black"></line>
            <circle cx="7" cy="7" r="0.05" stroke="black"></circle>
        </symbol>
        <symbol id="barLoadIcon12" viewBox="0 0 10 10">
            <path 
                marker-end="url(#arrowheadred)"
                d="M 8,8 A 0.15,0.15 0 1 0 6, 6 "
                stroke-width="0.2"
                fill="none"
                transform="rotate(-90, 7, 7)"
            ></path>
            <circle cx="2" cy="2" r="0.05" stroke="black"></circle>
            <line x1="2" y1="2" x2="7" y2="7" stroke-width="0.2" stroke="black"></line>
            <circle cx="7" cy="7" r="0.05" stroke="black"></circle>
        </symbol>
    </defs>
</template>