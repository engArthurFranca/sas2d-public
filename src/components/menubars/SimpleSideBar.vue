<template>
    <nav class="bg-gray-700 w-9 z-10">
        <ul class="flex flex-wrap -mb-px text-sm mt-1 font-medium text-center text-white">
            <MenuButton ref="menuAdd">
                <template v-slot:imgSlot>
                    <div class="flex flex-col w-5">
                        <img src="../../assets/buttons/addButton.svg">
                        <a class="w-6 -ml-1">New</a>
                    </div>
                </template>

                <template v-slot:submenuSlot>
                    <svg class="absolute left-10 w-2 h-2" id="arrow" viewBox="0 0 100 100" preserveAspectRatio="none" data-align="right" style="top: 155px;">
                        <path id="arrow-path" d="M 100 0, L 0 50, L 100 100" style="fill: rgba(55,65,81); stroke: rgb(102, 102, 102); stroke-width: 1px;"></path>
                    </svg>
                    <div class="absolute left-12 top-32  bg-gray-700 rounded-md">
                        <h3 class="pt-2">New</h3>
                        <div class="text-sm font-medium text-center border-b border-gray-200 text-gray-400">
                            <ul class="inline-flex -mb-px">
                                <li class="me-2" :class="{'text-blue-600 border-b-2 border-blue-600': isPoint}" @click="isPoint = true">
                                    <a class="inline-block p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300 hover:text-gray-300  cursor-pointer">Point</a>
                                </li>
                                <li class="me-2" :class="{'text-blue-600 border-b-2 border-blue-600': !isPoint}" @click="isPoint = false">
                                    <a class="inline-block p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300 hover:text-gray-300 cursor-pointer">Bar</a>
                                </li>
                            </ul>
                        </div>
                        <PointForm v-show="isPoint" @close-menu="closeEvent"></PointForm>
                        <BarForm v-show="!isPoint" @close-menu="closeEvent"></BarForm>
                    </div>
                </template>
            </MenuButton>

            <MenuButton>
                <template v-slot:imgSlot>
                    <div class="flex flex-col w-5">
                        <img src="../../assets/buttons/gridButton.svg" class="w-9">
                        <a class="w-6 -ml-1">Grid</a>
                    </div>
                </template>
                <template v-slot:submenuSlot>
                    <svg class="absolute left-10 w-2 h-2" id="arrow" viewBox="0 0 100 100" preserveAspectRatio="none" data-align="right" style="top: 195px;">
                        <path id="arrow-path" d="M 100 0, L 0 50, L 100 100" style="fill: rgba(55,65,81); stroke: rgb(102, 102, 102); stroke-width: 1px;"></path>
                    </svg>
                    <div class="absolute left-12 top-40 w-36 bg-gray-700 rounded-md">
                        <h3 class="pt-2">Grid</h3>
                        <div class="bg-gray-500 rounded-bl rounded-br pt-0 mt-0 w-30">
                            <label for="website-admin" class="block mt-0 pt-2 pb-2 text-sm font-medium">Spacing</label>
                            <div class="flex mx-2">
                                <span class="inline-flex w-8 items-center px-2 text-sm  border rounded-bl rounded-tl rounded-s-md bg-gray-300 text-gray-900 border-gray-600">
                                    ΔX
                                </span>
                                <input type="number" v-model="grid.dx" id="website-admin" class=" h-8 rounded-br rounded-tr rounded-e-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-400 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" >
                            </div>

                            <div class="flex mx-2">
                                <span class="inline-flex w-8 items-center px-2 text-sm  border rounded-bl rounded-tl rounded-s-md bg-gray-300 text-gray-900 border-gray-600">
                                    ΔY
                                </span>
                                <input type="number" v-model="grid.dy" id="website-admin" class=" h-8 rounded-br rounded-tr rounded-e-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-400 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" >
                            </div>
                            <label class="block pb-2 mt-3 cursor-pointer">
                                <input type="checkbox" v-model="grid.show" id="rot" name="rot" class="mr-2  cursor-pointer">
                                Show Grid
                            </label>
                        </div>
                    </div>
                </template>
            </MenuButton>

            <MenuButton v-show="this.$store.state.svgConfig.edit.isEditing" >
                <template v-slot:imgSlot>
                    <div class="flex flex-col w-5">
                        <img src="../../assets/buttons/editButton.svg">
                        <a class="w-6 -ml-1">Edit</a>
                    </div>
                </template>
                <template v-slot:submenuSlot>

                </template>
            </MenuButton>
        </ul>
</nav>
</template>

<script>
import PointForm from "./forms/PointForm.vue";
import BarForm from "./forms/BarForm.vue";
import MenuButton from "./MenuButton.vue";
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    data() {
        return {
            isPoint: true,
        }
    },
    methods: {
        closeEvent() {
            //sends the event to close the menu after clicked in add button from point and bar forms
            this.$refs.menuAdd.closeMenu();
        }
    },
    setup() {
        const store = useStore();
        const grid = computed(() =>
            store.state.svgConfig.grid
        );

        return {
            grid
        }
    },
    components: {
    PointForm,
    BarForm,
    MenuButton
}
}
</script>