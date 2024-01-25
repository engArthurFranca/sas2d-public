<template>
    <div class="flex mx-2">
        <span 
            :class="props.labelClass"
            class="inline-flex items-center px-3 text-sm  border rounded-bl rounded-tl rounded-s-md bg-gray-300 text-gray-900 border-gray-600">
            {{ props.label }}
        </span>
        <input :value="props.value" type="number" @input="updateValue" 
            class="h-8 rounded-br rounded-tr rounded-e-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-400 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" >
    </div>
</template>

<script setup>
    import { defineEmits, defineProps } from 'vue';

    const props = defineProps({
        labelClass: String,
        label: String,
        value: Number
    });
    const emits = defineEmits(['inputEvent'])

    const updateValue = () => {
        emits('inputEvent', parseFloat(event.target.value))
    }
</script>