<template>
    <!-- Navbar -->
    <nav class=" p-4 shadow-md bg-blue-300">
        <div class="container mx-auto flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center">
                <img alt="Sas2d logo" src="../assets/logo.svg">
                <a class="text-2xl font-bold text-gray-800 pointer-events-none">SAS2D</a>
            </div>

            <!-- Menu -->
            <div class="hidden md:flex space-x-4">
                <router-link to="/"> <a class="text-gray-800 hover:text-gray-600 ">Home</a> </router-link>
                <router-link to="/sas2d"> <a class="text-gray-800  hover:text-gray-600">SAS2D</a> </router-link>
                <router-link to="/docs"> <a class="text-gray-800 hover:text-gray-600">Docs</a> </router-link>
                <router-link to="/about"> <a class="text-gray-800  hover:text-gray-600">About</a> </router-link>
            </div>

            <!-- Mobile Menu Button (Hidden on larger screens) -->
            <div class="md:hidden">
                <button
                id="mobile-menu-btn"
                class="text-gray-800 hover:text-gray-600 focus:outline-none"
                @click="showMobileMenu"
                >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
                </button>
            </div>
        </div>
    </nav>

    <!-- Mobile Menu (Hidden on larger screens) -->
    <div id="mobile-menu" class=" bg-blue-300" :class="{'hidden': isActive}">
        <router-link to="/"> <a class="block py-2 px-4 text-center text-gray-800 hover:bg-blue-500">Home</a> </router-link>
        <router-link to="/sas2d"> <a class="block py-2 px-4 text-center text-gray-800 hover:bg-blue-500">SAS2D</a> </router-link>
        <router-link to="/docs"> <a class="block py-2 px-4 text-center text-gray-800 hover:bg-blue-500">Docs</a> </router-link>
        <router-link to="/about"> <a class="block py-2 px-4 text-center text-gray-800 hover:bg-blue-500">About</a> </router-link>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            isActive: true
        };
    },
    methods: {
        showMobileMenu: function() {
            this.isActive = !this.isActive;
        }
    },
    setup() {
        
    },
})
</script>
