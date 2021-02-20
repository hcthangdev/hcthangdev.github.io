<template>
	<div id="User">
		<h2>User component</h2>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <p>Money : {{ money }}</p>
        <hr>
        <div class="row">
            <div class="col-sm-6">
                <UserDetail
                :name="name"
                :resetName="resetName"
                :age="age"
                :resetAge="resetAge"
                :money="money">
                    <p class="slot-content" slot="slot1">this block 1 belong to p tag from parent</p>
                    <p class="slot-content" slot="slot2">this block 2 belong to p tag from parent</p>
                </UserDetail>
            </div>
            <div class="col-sm-6">
                <EditUser
                :name="name"
                @nameHasBeenChanged="name = $event"
                :age="age"
                @ageHasBeenChanged="age = $event"
                :money="money" />
            </div>
        </div>
	</div>
</template>

<script>
import UserDetail from './Detail.vue'
import EditUser from './Edit.vue'
export default {
    components:{
        UserDetail,
        EditUser
    },
	data(){
		return{
            name: 'Thang',
            age: 27,
            money: 1000
		}
    },
	methods:{
        resetName(){
            this.name = 'Thang'
        },
        resetAge(){
            this.age = 27
        }
	},
}
</script>
<style scoped>
    #User{
        background: lightblue;
    }
</style>