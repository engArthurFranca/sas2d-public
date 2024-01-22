<template>
    <li class="me-2 hover:bg-blue-600">
        <a @click="setValue" ref="menu" class="relative inline-flex items-center justify-center p-2 border-b-2 border-transparent hover:border-gray-300 cursor-pointer group"> {{ menuTitle }}
            <slot name="imgSlot"></slot>
        </a>
        <div v-show="displayMenu" @click.stop="">
            <slot name="submenuSlot"></slot>
        </div>
    </li>
</template>

<script>

export default {
    props: {
        menuTitle: String
    },
    data() {
        return {
            displayMenu: false
        }
    },
    methods: {
        setValue() {
            this.displayMenu = !this.displayMenu;
            if ( this.displayMenu ) {
                window.addEventListener('click', this.handleClick);
            }
        },

        handleClick(event) {
            if (this.$refs.menu) {
                if ( !this.$refs.menu.contains(event.target) ) {
                    this.displayMenu = false;
                    window.removeEventListener('click', this.handleClick);
                }
            }
        },
        closeMenu() {
            this.displayMenu = false;
        }
    },
}
</script>