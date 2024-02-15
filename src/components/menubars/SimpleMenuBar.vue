<template>
    <nav class="bg-gray-900 w-full h-9">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-white pl-9">
            <MenuButton menuTitle="File">
                <template v-slot:submenuSlot>
                    <div class="absolute top-7 left-1 bg-gray-700 border border-gray-300 p-3 mt-2 transition-all duration-300 ease-out overflow-hidden flex flex-col text-white z-20">
                        <ul class="w-20">
                            <li class="mb-1 hover:bg-blue-400 cursor-pointer"><a> New... </a></li>
                            <li class="mb-1 hover:bg-blue-400 cursor-pointer"><a > Open </a></li>
                            <li class="mb-1 hover:bg-blue-400 cursor-pointer"><a > Save as JSON </a></li>
                            <li class="mb-1 hover:bg-blue-400 cursor-pointer"><a > Save as PDF </a></li>
                        </ul>
                    </div>
                </template>
            </MenuButton>
            <MenuButton menuTitle="Display">
                <template v-slot:submenuSlot>
                    <div class="absolute top-7 left-1 bg-gray-700 border border-gray-300 p-3 mt-2 transition-all duration-300 ease-out overflow-hidden min-w-50 w-[200px] flex flex-col text-white z-20">
                        <ul class="w-24">
                            <li class="flex pb-2 cursor-pointer">
                                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" class="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600">
                                <div class="ms-2 text-sm w-20 ">
                                    <label for="helper-checkbox" class="font-medium text-gray-200 text-left ">Grid</label>
                                    <p id="helper-checkbox-text" class="text-xs font-normal text-gray-400">Shows Grid</p>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                </template>
            </MenuButton>
        </ul>
    </nav>
</template>

<script>
import MenuButton from "./buttons/MenuButton.vue";

export default {
    components: {
        MenuButton
    }
}
</script>