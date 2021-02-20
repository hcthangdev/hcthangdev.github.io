<template>
	<div class="container">

		<AppHeader />
		
		<hr />
		
		<router-view></router-view>
		
	</div>
</template>

<script>
import AppHeader  from './Components/Shared/Header/Index.vue'
export default {
	components:{
		AppHeader
	}
}
</script>