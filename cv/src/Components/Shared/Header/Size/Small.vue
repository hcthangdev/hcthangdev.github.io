<template>
	<ul>
		<li>
			<button
			class="btn btn-outline-primary btn-sm"
			:class="{active: selectPage == 'home-page'}"
			@click="callComponent('home-page')">Home</button>
		</li>
		<li>
			<button
			class="btn btn-outline-primary btn-sm"
			:class="{active: selectPage == 'about-page'}"
			@click="callComponent('about-page')">About</button>
		</li>
		<li>
			<button
			class="btn btn-outline-primary btn-sm"
			:class="{active: selectPage == 'user-page'}"
			@click="callComponent('user-page')">User</button>
		</li>
		<li>
			<button
			class="btn btn-outline-primary btn-sm"
			:class="{active: selectPage == 'contact-page'}"
			@click="callComponent('contact-page')">Contact</button>
		</li>
	</ul>
</template>

<script>
export default {
	props:{
		defaultPage: String
	},
	data(){
		return{
			selectPage: this.defaultPage
		}
	},
	created(){
		this.callComponent(this.selectPage)
	},
	methods:{
		callComponent(pageName){
			this.selectPage = pageName
			this.$emit('selectPage', this.selectPage)
		}
	},
}
</script>
