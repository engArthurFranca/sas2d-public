﻿<template>
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
                    <svg class="absolute top-5 left-10 w-2 h-2" id="arrow" viewBox="0 0 100 100" preserveAspectRatio="none" data-align="right">
                        <path id="arrow-path" d="M 100 0, L 0 50, L 100 100" style="fill: rgba(55,65,81); stroke: rgb(102, 102, 102); stroke-width: 1px;"></path>
                    </svg>
                    <div class="absolute top-0 left-12   bg-gray-700 rounded-md">
                        <h3 class="pt-2 text-white text-2xl">New</h3>
                        <div class="text-sm font-medium text-center border-b border-gray-200 text-gray-400">
                            <ul class="inline-flex mb-px">
                                <li class="me-2" :class="{'text-white border-b-2 border-white': isPoint}" @click="isPoint = true">
                                    <a class="inline-block p-4 border-b-2 border-transparent rounded-t-lg  hover:border-gray-300 hover:text-gray-300  cursor-pointer">Point</a>
                                </li>
                                <li class="me-2" :class="{'text-white border-b-2 border-white': !isPoint}"  
                                    @click="showBarForm">
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
                    <svg class="absolute top-5 left-10 w-2 h-2" id="arrow" viewBox="0 0 100 100" preserveAspectRatio="none" data-align="right">
                        <path id="arrow-path" d="M 100 0, L 0 50, L 100 100" style="fill: rgba(55,65,81); stroke: rgb(102, 102, 102); stroke-width: 1px;"></path>
                    </svg>
                    <div class="absolute left-12 top-0 w-36 bg-gray-700 rounded-md">
                        <h3 class="pt-2 text-base mb-1">Grid</h3>
                        <div class="bg-gray-300 text-black rounded-bl rounded-br pt-0 mt-0 w-30">
                            <label for="website-admin" class="block mt-0 pt-2 pb-2 text-base font-medium">Spacing</label>
                            <NumberInput :label="'ΔX'" :value="grid.dx" @inputEvent="(newValue) => grid.dx = newValue"></NumberInput>
                            <NumberInput :label="'ΔY'" :value="grid.dy" @inputEvent="(newValue) => grid.dy = newValue"></NumberInput>
                            
                            <label class="block pb-2 mt-3 cursor-pointer">
                                <input type="checkbox" v-model="grid.show" id="rot" name="rot" class="mr-2  cursor-pointer">
                                Show Grid
                            </label>
                        </div>
                    </div>
                </template>
            </MenuButton>
            
            <div class="border-t-2" v-show="svgConfig.edit.isEditing">
                <MenuButton id="editButton" :preventDefault="true" >
                    <template v-slot:imgSlot>
                        <div class="flex flex-col w-5">
                            <img src="../../assets/buttons/editButton.svg">
                            <a class="w-6 -ml-1">Edit</a>
                        </div>
                    </template>
                    <template v-slot:submenuSlot>
                        <svg class="absolute left-10 top-5 w-2 h-2" id="arrow" viewBox="0 0 100 100" preserveAspectRatio="none" data-align="right">
                            <path id="arrow-path" d="M 100 0, L 0 50, L 100 100" style="fill: rgba(55,65,81); stroke: rgb(102, 102, 102); stroke-width: 1px;"></path>
                        </svg>
                        <div v-if="svgConfig.edit.isPoint" class="absolute left-12 top-0  bg-gray-700 rounded-md">
                            <h3 class="pt-2 pb-2 text-white text-2xl">Point {{ svgConfig.edit.index + 1 }}</h3>
                            <PointForm :index="svgConfig.edit.index" @close-menu="closeEvent"></PointForm>
                        </div>
                        <div v-else class="absolute left-12 top-0  bg-gray-700 rounded-md">
                            <h3 class="pt-2 pb-2 text-white text-2xl">Bar {{ svgConfig.edit.index + 1 }}</h3>
                            <BarForm :index="svgConfig.edit.index" @close-menu="closeEvent"></BarForm>
                        </div>
                    </template>
                </MenuButton>

                <MenuButton @click="removeElement">
                    <template v-slot:imgSlot>
                        <div class="flex flex-col w-5">
                            <img src="../../assets/buttons/removeButton.svg">
                            <a class="w-6 -ml-2 text-xs ">Delete</a>
                        </div>
                    </template>
                </MenuButton>
            </div>
            
        </ul>
</nav>
</template>

<script setup>
    import PointForm from "./forms/PointForm.vue";
    import BarForm from "./forms/BarForm.vue";
    import MenuButton from "./buttons/MenuButton.vue";
    import NumberInput from "./forms/inputs/NumberInput.vue";

    import { ref, computed } from 'vue';
    import { useStore } from "vuex";


    let isPoint = ref(true);

    const closeEvent = () => menuAdd.value.closeMenu();
    const menuAdd = ref(null);

    const store = useStore();

    const svgConfig = store.state.svgConfig;
    const grid = computed(() =>
        store.state.svgConfig.grid
    );

    const pointList = store.state.structure.pointList;

    function removeElement() {
        if ( svgConfig.edit.isPoint ) {
            store.commit( 'removePoint', svgConfig.edit.index )
        } else {
            store.commit( 'removeBar', svgConfig.edit.index )
        }
        svgConfig.edit.isEditing = false
    }

    function showBarForm() {
        if (pointList.length >= 2) {
            isPoint.value = false;
        } else {
            isPoint.value = true;
            store.commit('newAlert', {isYellow: true, title: '', msg: 'You need at least 2 Points before creating a Bar Element!' } )
        }
    }
</script>