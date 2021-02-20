<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-6">
                <h3 align="center" class="mt-3 mb-3">Add user</h3>
                <div class="form">
                    <div class="form-group">
                        <label for="email">Tên</label>
                        <input type="text" ref="input-name" @keyup.enter="submit()" class="form-control" placeholder="Enter name" id="email" v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label for="pwd">Email</label>
                        <input type="text" class="form-control" @keyup.enter="submit()" placeholder="Enter email" id="pwd" v-model="user.email">
                    </div>
                    <button class="btn btn-primary btn-block" @click="submit()">Submit</button>
                </div>
            </div>
            <div class="col-xl-6">
                <h3 align="center" class="mt-3 mb-3">List users</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                Tên
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <transition name="fade" v-for="(user, key) in users" :key="key">
                            <tr>
                                <td>{{user.name}}</td>
                                <td>{{user.email}}</td>
                                <td><button class="btn btn-outline-danger btn-sm" @click="deleteUser(key)">Xoa</button></td>
                            </tr>
                        </transition>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            urlFirebase: 'https://learn-vue-client.firebaseio.com/',
            users: [],
            user:{
                name: '',
                email: ''
            },
        }
    },
    created() {
        this.getUsers()
    },
    methods: {
        submit(){
            var sqlTable = 'users.json'
            var url = this.urlFirebase + sqlTable
            this.$http.post(url, this.user).then(res =>{
                this.users[res.data.name] = {
                    name: this.user.name,
                    email: this.user.email
                }
                this.user.name = ''
                this.user.email = ''
                this.$refs['input-name'].focus()
            })
        },
        getUsers(){
            var sqlTable = 'users.json'
            var url = this.urlFirebase + sqlTable
            this.$http.get(url).then(res =>{
                this.users = res.data
            }, err =>{
                console.log(err);
            })
        },
        deleteUser(key){
            var sqlTable = 'users.json'
            var url = this.urlFirebase + sqlTable
            this.$http.delete(url, key).then(res =>{
                console.log(res);
            })
        }
    },
}
</script>
<style lang="css" scoped>
    .form{
        width: 400px;
        margin: 0 auto;
    }
    .fade-enter-active {
        transition: all .3s ease-in-out;
	}
	.fade-enter{
        transform: translateX(5px);
        opacity: 0;
	}
</style>