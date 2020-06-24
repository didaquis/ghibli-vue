<template>
	<div class="card has-background-info has-text-white custom-animation" data-cy="film-card">
		<div class="card-content">
			<p class="title has-text-white has-text-centered" data-cy="film-card-title">
				{{ film.title }}
			</p>
			<p class="has-text-white" data-cy="film-card-description">
				{{ film.description }}
			</p>
		</div>
		<footer class="card-footer" data-cy="film-card-footer">
			<p class="card-footer-item">
				<span class="has-text-weight-bold custom-mr-2">Year:</span> {{ film.release_date }}
				<span class="has-text-weight-bold custom-ml-5 custom-mr-2">Director:</span> {{ film.director }}
			</p>
		</footer>
	</div>
</template>

<script>
export default {
	props: {
		film: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>
.custom-animation:hover {
	box-shadow: 2px 8px 45px rgba(0, 0, 0, .15);
	transform: translate3D(0, -2px, 0);
	transition: .4s ease;
}
</style>
