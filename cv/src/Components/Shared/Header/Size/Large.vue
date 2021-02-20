<template>
	<div class="menu">
		<router-link
		class="nav-link"
		:to="{name: 'home'}">
			<h1>My app</h1>
		</router-link>

		<router-link
		class="nav-link"
		:to="{name: 'home'}">
			<button :class="[{active: $route.name === 'home'}]" class="btn btn-outline-primary btn-sm">Home</button>
		</router-link>

		<router-link
		class="nav-link"
		:class="[{active: $route.name === 'user'}]"
		:to="{name: 'user'}">
			<button :class="[{active: $route.name === 'user'}]" class="btn btn-outline-primary btn-sm">User</button>
		</router-link>

		<router-link
		class="nav-link"
		:to="{name: 'about'}">
			<button :class="[{active: $route.name === 'about'}]" class="btn btn-outline-primary btn-sm">About</button>
		</router-link>

		<router-link
		class="nav-link"
		:to="{name: 'contact'}">
			<button :class="[{active: $route.name === 'contact'}]" class="btn btn-outline-primary btn-sm">Contact</button>
		</router-link>

		<router-link
		class="nav-link"
		:to="{name: 'demo-mixin'}">
			<button :class="[{active: $route.name === 'demo-mixin'}]" class="btn btn-outline-primary btn-sm">Demo Mixin</button>
		</router-link>
		
		<router-link
		class="nav-link"
		:to="{name: 'demo-call-component'}">
			<button :class="[{active: $route.name === 'demo-call-component'}]" class="btn btn-outline-primary btn-sm">Demo call component</button>
		</router-link>
		
		<router-link
		class="nav-link"
		:to="{name: 'interacting-with-firebase'}">
			<button :class="[{active: $route.name === 'interacting-with-firebase'}]" class="btn btn-outline-primary btn-sm">
				Tương tác với Firebase
			</button>
		</router-link>
	</div>
</template>
<style lang="css">
	.menu{
		display: flex;
		align-items: center;
	}
	@media (max-width: 991px){
		.menu{
			position: absolute;
			display: grid;
			border: 1px solid;
			border-radius: 10px;
			padding: 10px;
			background: #fff;
			z-index: 2;
		}
		.menu .nav-link{
			display: inline;
			display: grid;
		}
	}
</style>
