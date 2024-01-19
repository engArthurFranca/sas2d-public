<template>
    <li>
        <a class="addElement" @click="setValue" ref="menu" >
            <img :src="imgSrc" >

            <div v-show="displayMenu">
                <slot></slot>
            </div>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        imgSrc: String,

    },
    data() {
        return {
            displayMenu: false
        }
    },
    methods: {
        setValue() {
            this.displayMenu = !this.displayMenu
            if ( this.displayMenu ) {
                window.addEventListener('click', this.handleClick);
            }
        },

        handleClick(event) {
            console.log("clique fora")
            if (this.$refs.menu) {
                if ( !this.$refs.menu.contains(event.target) ) {
                    this.displayMenu = false;
                    window.removeEventListener('click', this.handleClick);
                }
            }
        }
    }
}
</script>

<style scoped>
    img {
            width: 25px;
            height: 25px;
        }
</style>