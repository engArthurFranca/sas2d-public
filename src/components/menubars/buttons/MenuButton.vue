<template>
    <li class="relative me-2 rounded-sm hover:bg-blue-600" ref="menuButton">
        <a @click="setValue" class="inline-flex items-center justify-center p-2 border-transparent hover:border-gray-300 cursor-pointer group">
            {{ props.menuTitle }}
            <slot name="imgSlot"></slot>
        </a>
        <MenuModel v-if="displayMenu" @close-menu="closeMenu" :menuRef="menuButton">
            <slot name="submenuSlot"></slot>
        </MenuModel>
    </li>
</template>

<script setup>
    import MenuModel from './MenuModel.vue';
    
    import { ref, defineProps, defineExpose } from 'vue';


    const menuButton = ref(null);
    let displayMenu = ref(false);

    const props = defineProps({
        menuTitle: String
    });

    const setValue = () => {
        displayMenu.value = !displayMenu.value;
    };

    const closeMenu = () => {
        displayMenu.value = false;
    };

    defineExpose({ closeMenu });

</script>