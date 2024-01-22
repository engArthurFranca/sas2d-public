<template>
    <div class="relative inline-block text-left mr-4">
        <button @click.stop="isActive = !isActive" :class="buttonClass" class="inline-flex items-center p-0 m-0 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-100 active:text-gray-800 transition">
            <slot name="buttonSlot"></slot>
        </button>

        <div v-show="isActive" class="origin-top-right absolute -top-4 left-16 mt-2 w-auto h-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div :class="optionsClass" class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <slot name="options" ></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        buttonClass: String,
        optionsClass: String
    },
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        closeSelect() {
            this.isActive = false;
        }
    },
}
</script>