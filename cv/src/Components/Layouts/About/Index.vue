<template>
	<div id="About">
		<h2>{{ titlePage }}</h2>
        <Data />
	</div>
</template>

<script>
import Data from './Data.vue'
export default {
    components:{
        Data
    },
    data(){
        return{
            titlePage: 'About page'
        }
    }
}
</script>
