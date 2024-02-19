<template>
    <li class="relative me-2 rounded-sm hover:bg-blue-600" id="menuButton">
        <a @click.stop="trigger" class="inline-flex items-center justify-center p-2 border-transparent hover:border-gray-300 cursor-pointer group">
            {{ props.menuTitle }}
            <slot name="imgSlot"></slot>
        </a>
        <div v-if="isActive" @click.stop="" id="menuDiv">
            <slot name="submenuSlot"></slot>
        </div>
    </li>
</template>

<script setup>
    import useTrigger from '@/composable/useTrigger';
    
    import { defineProps, defineExpose } from 'vue';

    const props = defineProps({
        menuTitle: String,
        preventDefault: {type: Boolean, default: false }
    });

    const { isActive, trigger } = useTrigger({
        idList: ['menuButton', 'menuDiv'],
        unTriggerFunc: closeMenu,
        preventUntrigger: props.preventDefault
    })

    function closeMenu() {
        isActive.value = false;
    }

    defineExpose({ closeMenu });

</script>