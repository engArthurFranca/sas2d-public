<template >
    <div class="container mx-auto flex-1 flex flex-col items-center justify-center" style="min-height: calc(100vh - 120px)">
        <svg width="200" height="200" class="animate-spin origin-center" style="animation-duration: 3s;">
            <g id="gear" fill="gray" stroke="black" stroke-width="9">
                <rect x="85" y="100" width="30" height="95" rx="5" ry="5" transform="rotate(0 100 100)"/>
                <rect x="85" y="100" width="30" height="95" rx="5" ry="5" transform="rotate(45 100 100)"/>
                <rect x="85" y="100" width="30" height="95" rx="5" ry="5" transform="rotate(90 100 100)"/>
                <rect x="85" y="100" width="30" height="95" rx="5" ry="5" transform="rotate(135 100 100)"/>
                <rect x="85" y="100" width="30" height="95" rx="5" ry="5" transform="rotate(180 100 100)"/>
                <rect x="85" y="100" width="30" height="95" rx="5" ry="5" transform="rotate(225 100 100)"/>
                <rect x="85" y="100" width="30" height="95" rx="5" ry="5" transform="rotate(270 100 100)"/>
                <rect x="85" y="100" width="30" height="95" rx="5" ry="5" transform="rotate(315 100 100)"/>
                    
                <circle cx="100" cy="100" r="70"/>
                <circle cx="100" cy="100" r="30" fill="white"/>
            </g>
        </svg>

        <p class="text-gray-800">Content of <strong>{{ pageName }}</strong> under development...</p>
        <p class="text-gray-800">Please check back soon...</p>
    </div>

</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        props: {
            pageName: String
        }
    })
</script>
