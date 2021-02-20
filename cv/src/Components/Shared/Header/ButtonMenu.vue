<template>
		<button @click="toggleMenu()">{{ contentButton }}</button>
</template>
<script>
export default {
    props:{
        showMenu: Boolean
    },
    data(){
        return{
            show: this.showMenu
        }
    },
    computed: {
        contentButton(){
            return this.show ? 'hide menu' : 'show menu'
        }
    },
    mounted() {
        document.addEventListener('click', this.close)
    },
    methods: {
        toggleMenu(){
            this.show = !this.show
            this.$emit('handle', this.show)
        },
        close (e) {
            if (!this.$el.contains(e.target)) {
                this.show = false
                this.$emit('handle', this.show)
            }
        }
    },
}
</script>