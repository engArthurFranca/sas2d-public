<template>
    <nav class="bg-gray-700 w-9 z-10">
        <ul class="flex flex-wrap -mb-px text-sm mt-1 font-medium text-center text-white">
            <MenuButton>
                <template v-slot:imgSlot>
                    <img src="../../assets/buttons/addButton.svg" class="w-9">
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
                        <PointForm v-show="isPoint"></PointForm>
                        <BarForm v-show="!isPoint"></BarForm>
                    </div>
                </template>
            </MenuButton>

        </ul>
</nav>
</template>

<script>
import PointForm from "./forms/PointForm.vue";
import BarForm from "./forms/BarForm.vue";
import MenuButton from "./MenuButton.vue";

export default {
    data() {
        return {
            isPoint: true,
        }
    },
    methods: {
        toggleTabs(tabNumber) {
            this.openTab = tabNumber
        }
    },
    components: {
    PointForm,
    BarForm,
    MenuButton
}
}
</script>