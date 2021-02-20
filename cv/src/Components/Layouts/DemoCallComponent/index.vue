<template>
    <div id="Demo-Call-Component">
        <h3>[Demo call component]</h3>
        <header>
            <button
            class="btn btn-outline-primary btn-sm"
            :class="{active: component == 'home'}"
            @click="component = 'home'">Home</button>

            <button
            class="btn btn-outline-primary btn-sm"
            :class="{active: component == 'about'}"
            @click="component = 'about'">About</button>

            <button
            class="btn btn-outline-primary btn-sm"
            :class="{active: component == 'user'}"
            @click="component = 'user'">User</button>

            <button
            class="btn btn-outline-primary btn-sm"
            :class="{active: component == 'contact'}"
            @click="component = 'contact'">Contact</button>
        </header>

        <transition name="fade">
            <keep-alive>
                <component :is="component"></component>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
import About   from '../About/Index.vue'
import Contact from '../Contact/Index.vue'
import Home    from '../Home/Index.vue'
import User    from '../User/Index.vue'
export default {
    components:{
		'about'   : About,
		'contact' : Contact,
		'home'    : Home,
		'user'    : User
	},
    data(){
        return{
            component: 'home'
        }
    }
}
</script>
<style lang="css" scoped>
    #Demo-Call-Component{
        position: relative;
    }
    header{
        margin: 20px 0;
    }
    .fade-enter-active {
        transition: all .3s ease-in-out;
	}
	.fade-enter{
        transform: translateX(5px);
        opacity: 0;
	}
</style>