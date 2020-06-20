<template>
	<div>
		<Navbar />
		<main data-cy="main-content">
			<router-view/>
		</main>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
	name: 'App',
	components: {
		Navbar,
	}
}
</script>
