<template>
	<div class="user-item-data">
		<h3>User detail</h3>
		<p>
			Name : {{ name }}
			<button class="btn btn-primary" @click="resetName">reset name</button>
		</p>
		<p>
			Age : {{ age }}
			<button class="btn btn-primary" @click="resetAge">reset age</button>
		</p>
		<p>
			Money : {{ dataMoney }}
		</p>
		<slot name="slot1" />
		<slot name="slot2" />
	</div>
</template>

<script>
import { eventBus } from '../../../main.js'
export default {
	props:{
		name: String,
		resetName: Function,
		age: Number,
		resetAge: Function,
		money: Number
	},
	data(){
		return{
			dataMoney: this.money
		}
	},
	created(){
		eventBus.$on('editMoney', newMoney =>{
			this.dataMoney = newMoney
		})
	}
}
</script>
<style scoped>
    div{
        background: pink;
    }
	.slot-content{
		color: red;
	}
</style>