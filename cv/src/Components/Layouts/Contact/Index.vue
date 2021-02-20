<template>
	<div id="Contact">
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
            titlePage: 'Contact page'
        }
    }
}
</script>
<style lang="css" scoped>
    #Contact{
        color: pink;
    }
</style>
