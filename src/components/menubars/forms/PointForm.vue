<template>
    <div class="bg-gray-500 rounded-bl rounded-br pt-0 mt-0">
        <form>
            <label for="website-admin" class="block mt-0 pt-2 pb-2 text-sm font-medium">Coordinates</label>
            <div class="flex mx-2">
                <span class="inline-flex w-8 items-center px-3 text-sm  border rounded-bl rounded-tl rounded-s-md bg-gray-300 text-gray-900 border-gray-600">
                    X
                </span>
                <input type="number" id="website-admin" class=" h-8 rounded-br rounded-tr rounded-e-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-400 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" v-model="point.x">
            </div>

            <div class="flex mx-2">
                <span class="inline-flex w-8 items-center px-3 text-sm  border rounded-bl rounded-tl rounded-s-md bg-gray-300 text-gray-900 border-gray-600">
                    Y
                </span>
                <input type="number" id="website-admin" class=" h-8 rounded-br rounded-tr rounded-e-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-400 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" v-model="point.y">
            </div>


            <label for="support" class="block m-2 text-sm font-medium">Support</label>

            <div class="relative inline-block text-left">
                <button @click="selectSupport = !selectSupport" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-100 active:text-gray-800 transition">
                    <svg class="h-5 w-5" viewBox="0.25 0.25 1.5 1.5" width="80" height="80" transform="scale(1,-1)">
                    <use :href="'#support' + point.support" stroke="black" />
                    <circle cx="1" cy="1" r="0.1"></circle>
                    </svg>
                </button>

                <div id="dropdownMenu" v-show="selectSupport" class="origin-top-right absolute -right-20 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onclick="updateValue(0)">No Support</a>
                        <div v-for="support in 9" :key="support">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onclick="updateValue(support)">
                            <svg class="h-5 w-5" viewBox="0.25 0.25 1.5 1.5" width="80" height="80" transform="scale(1,-1)">
                                <use :href="'#support-' + support" stroke="black" />
                                <circle cx="1" cy="1" r="0.1"></circle>
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <label class="block mb-2">
            <input type="checkbox" id="rot" name="rot" class="mr-2" v-model="point.rot">
            Rot
            </label>

            <label  class="block mb-2">
                Force
            </label>
            <div class="flex mx-2">
                <span class="inline-flex w-16 items-center px-3 text-sm  border rounded-bl rounded-tl rounded-s-md bg-gray-300 text-gray-900 border-gray-600">
                    Value
                </span>
                <input type="number" id="website-admin" class=" h-8 rounded-br rounded-tr rounded-e-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-400 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" v-model="point.y">
            </div>
            <div class="flex mx-2">
                <span class="inline-flex w-16 items-center px-3 text-sm  border rounded-bl rounded-tl rounded-s-md bg-gray-300 text-gray-900 border-gray-600">
                    Angle
                </span>
                <input type="number" id="website-admin" class=" h-8 rounded-br rounded-tr rounded-e-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-400 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" v-model="point.y">
            </div>

            <label  class="block mt-2 mb-2">
                Bend
            </label>
            <div class="flex mx-2">
                <span class="inline-flex items-center px-3 text-sm  border rounded-bl rounded-tl rounded-s-md bg-gray-300 text-gray-900 border-gray-600">
                    Value
                </span>
                <input type="number" id="website-admin" class=" h-8 rounded-br rounded-tr rounded-e-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-400 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" v-model="point.y">
            </div>

            <button type="button" class="bg-blue-500 text-white px-4 py-2 rounded m-4"> Add </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectSupport: false,
            point: {
                x: 0,
                y: 0,
                rot: false,
                support: 0,
                draw_loads: [[0,0,0], [0,0,0]]
            }
        }
    },
    methods: {
        
    },
}

</script>