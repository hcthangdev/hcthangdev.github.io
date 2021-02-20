<template>
	<div class="user-item-data">
		<h3>Edit user</h3>
		<p>
			Name : {{ name }}
			<button class="btn btn-secondary" @click="changeName">Đổi tên</button>
		</p>
		<p>
			Age : {{ age }}
			<button class="btn btn-secondary" @click="changeAge">Tăng 5 tuổi</button>
		</p>
		<p>
			Money : {{ dataMoney }}
			<button class="btn btn-secondary" @click="changeMoney">Tăng tiền (bí mật)</button>
		</p>
		
	</div>
</template>

<script>
import { eventBus } from '../../../main.js'
export default {
	props:{
		name: String,
		age: Number,
		money: Number
	},
	data(){
		return{
			dataName: this.name,
			dataAge: this.age,
			dataMoney: this.money
		}
	},
	created(){
	},
	methods:{
		changeName(){
			this.dataName = 'Hoang Cong Thang'
			this.$emit('nameHasBeenChanged', this.dataName)
		},
		changeAge(){
			this.dataAge += 5
			this.$emit('ageHasBeenChanged', this.dataAge)
		},
		changeMoney(){
			this.dataMoney += 1000
			eventBus.busMoney(this.dataMoney)
		}
	},
}
</script>
<style scoped>
    div{
        background: green;
		color: #fff
    }    
</style>