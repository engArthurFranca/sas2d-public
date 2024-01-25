<template>
    <div>
        <slot></slot>
    </div>
</template>

<script setup>
    import { defineEmits, defineProps } from 'vue'
    import useClickOutside from '@/composable/useClickOutside';

    const props = defineProps(['menuRef'])

    const emits = defineEmits(['close-menu']);

    const closeMenu = () => {
        emits('close-menu')
    };

    useClickOutside( props.menuRef, closeMenu )

</script>