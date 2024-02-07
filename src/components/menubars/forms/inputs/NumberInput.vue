<template>
    <div class="flex mx-2 my-1 border-transparent">
        <span 
            :class="props.labelClass"
            class="inline-flex items-center px-3 text-sm rounded-bl rounded-tl rounded-s-md bg-gray-400 text-gray-900 ">
            {{ props.label }}
        </span>
        <input :value="props.value" type="number" @input="updateValue" 
            class="h-8 rounded-br rounded-tr rounded-e-lg border block flex-1 min-w-0 w-full text-sm p-2.5  placeholder-gray-600 text-black transition duration-500 ease-in-out transform border-transparent bg-gray-200  focus:border-blueGray-500 focus:bg-white" >
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