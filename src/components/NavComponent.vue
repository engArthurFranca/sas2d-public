<template>

    <nav class="bg-blue-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                @click="showMobileMenu">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <!--
                    Icon when menu is closed.

                    Menu open: "hidden", Menu closed: "block"
                -->
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <!--
                    Icon when menu is open.

                    Menu open: "block", Menu closed: "hidden"
                -->
                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex flex-shrink-0 items-center">
                    <img class="h-14 w-auto" src="../assets/logo.svg" alt="sas2d logo">
                </div>
                <div class="hidden sm:ml-6 sm:flex items-center justify-center ">
                <div class="flex space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <router-link to="/"><a @click="isCurrent = 'home'" :class="{'bg-blue-900': isCurrent == 'home'}" class=" text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a> </router-link>
                    <router-link to="/sas2d"> <a @click="isCurrent = 'sas2d'" :class="{'bg-blue-900': isCurrent == 'sas2d'}" class="text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">SAS2D</a> </router-link >
                    <router-link to="/docs"> <a @click="isCurrent = 'docs'" :class="{'bg-blue-900': isCurrent == 'docs'}" class="text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Docs</a> </router-link >
                    <router-link to="/about"> <a @click="isCurrent = 'about'" :class="{'bg-blue-900': isCurrent == 'about'}" class="text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a> </router-link >
                </div>
                </div>
            </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div :class="{'hidden': isHidden}" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2 text-center">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <router-link to="/"> <a @click="isCurrent = 'home'; isHidden = true" :class="{'bg-blue-900': isCurrent == 'home'}" class=" text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a> </router-link>
                <router-link to="/sas2d"> <a @click="isCurrent = 'sas2d'; isHidden = true" :class="{'bg-blue-900': isCurrent == 'sas2d'}" class="text-white hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">SAS2D</a> </router-link>
                <router-link to="/docs"> <a @click="isCurrent = 'docs'; isHidden = true" :class="{'bg-blue-900': isCurrent == 'docs'}" class="text-white hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Docs</a> </router-link>
                <router-link to="/about"> <a @click="isCurrent = 'about'; isHidden = true" :class="{'bg-blue-900': isCurrent == 'about'}" class="text-white hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a> </router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue';

    let isHidden = ref(true);
    let isCurrent = ref('home');

    const showMobileMenu = () => {
        isHidden.value = !isHidden.value;
    }
</script>


