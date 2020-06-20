<template>
	<b-navbar class="is-spaced has-shadow is-primary is-transparent">
		<template slot="brand">
			<b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>

		</template>
		<template slot="start">
			<b-navbar-item tag="a" target="_blank" rel="noopener" href="https://github.com/didaquis/ghibli-vue">
				Github
			</b-navbar-item>
		</template>

		<template slot="end">
			<b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/films' }">Films</b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/about' }">About</b-navbar-item>
		</template>
	</b-navbar>
</template>
