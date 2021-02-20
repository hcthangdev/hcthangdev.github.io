<template>
	<div id="Header">
		<ButtonMenu v-if="windowWidth < 992" @handle="showMenu = $event" :showMenu="showMenu" />
		<HeaderLarge v-if="showMenu" />
	</div>
</template>

<script>
import HeaderLarge from './Size/Large.vue'
import HeaderSmall from './Size/Small.vue'
import ButtonMenu from './ButtonMenu.vue'
import { eventBus } from '../../../main.js'
export default {
    components:{
        HeaderLarge,
		HeaderSmall,
		ButtonMenu
    },
	data(){
		return{
			windowWidth: window.innerWidth,
			showMenu: window.innerWidth > 991 ? true : false
		}
	},
	created(){
		eventBus.$on('currentSizeScreen', size =>{
            this.windowWidth = size
        })
	},
	watch: {
		windowWidth(val){
			this.showMenu = val > 991 ? true : false
		}
	},
	computed: {
		contentButtonMenu(){
			return this.showMenu ? 'hide menu' : 'show menu'
		}
	}
}
</script>
<style lang="css">
	#Header{
		position: relative;
	}
</style>
