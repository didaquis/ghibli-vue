<template>
	<div data-cy="navbar">
		<b-navbar class="is-spaced has-shadow is-primary is-transparent">
			<template slot="brand">
				<b-navbar-item tag="router-link" :to="{ path: '/' }" data-cy="brand-link">
					<font-awesome-icon :icon="['fas', 'home']" size="2x" />
				</b-navbar-item>
			</template>

			<template slot="end">
				<b-navbar-item tag="router-link" :to="{ path: '/home' }">Home</b-navbar-item>
				<b-navbar-item tag="router-link" :to="{ path: '/films' }">Films</b-navbar-item>
				<b-navbar-item tag="router-link" :to="{ path: '/timeline' }">Timeline</b-navbar-item>
				<b-navbar-item tag="router-link" :to="{ path: '/about' }">About</b-navbar-item>
			</template>

			<template slot="end">
				<b-navbar-item tag="a" target="_blank" rel="noopener" href="https://github.com/didaquis/ghibli-vue">
					<font-awesome-icon :icon="['fab', 'github']" size="lg" :style="{ color: 'black' }" />
				</b-navbar-item>
			</template>
		</b-navbar>
	</div>
</template>

<style>
.router-link-active {
	text-decoration: underline;
}
</style>
