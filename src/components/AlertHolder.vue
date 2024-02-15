<template>
    <div v-show="alerts.length >= 1" class="absolute top-2 right-2 origin-top-right p-2 flex-col-reverse opacity-80 z-30">
        <TransitionGroup name="alertList" tag="ul" class="alertList relative" appear>
            <li v-for="alert in alerts" :key="alert"
                :class="[ alert.isYellow? 'bg-yellow-100 border-yellow-400 text-yellow-700' : 'bg-red-100 border-red-400 text-red-700' ]" 
                class="flex-wrap border mb-1 px-4 py-3 rounded relative"
            >
                <span class="absolute -top-3 bottom-0 -right-4 px-4 py-3">
                    <svg 
                        :class="[ alert.isYellow? 'text-yellow-500': 'text-red-500' ]"
                        class="fill-current h-6 w-6" 
                        @click="closeAlert(alert.id)"
                        role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                    </svg>
                </span>
                <h1 class="font-bold">{{ alert.title }}</h1>
                <span class="block sm:inline">{{ alert.msg }}</span>
            </li>
        </TransitionGroup>
    </div>
</template>

<script setup>

    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore(); 
    const alerts = computed(() => {
        return store.state.alerts;
    });

    function closeAlert(id) {
        store.commit('removeAlert', id);
    }
    
</script>

<style scoped>
    .alertList {
        width: 250px;
        height: 10px;
    }

    .alertList li {
        width: 250px;
    }
    .alertList-move {
        transition: all 0.3s ease;
    }

    .alertList-enter-active,
    .alertList-leave-active {
    transition: all 1.5s ease;
    }

    .alertList-leave-active {
        position: absolute;
    }

    .alertList-enter-from,
    .alertList-leave-to {
    opacity: 0;
    transform: translateY(-100%);
    }
</style>