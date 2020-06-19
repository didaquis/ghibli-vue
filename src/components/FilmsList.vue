<template>
	<section class="section">
		<div class="container">
			<h1 class="title">Films</h1>
			<h2 class="subtitle">List of films</h2>

			<div v-if="isLoading" class="">
				Loading...
				<b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
			</div>

			<div v-if="error" class="">
				{{ error }}
			</div>

			<div v-if="films" class="content">
				<ul>
					<li v-for="film in films" v-bind:key="film">
						{{ film.title }}
					</li>
				</ul>
			</div>

		</div>
	</section>
</template>

<script>

import service from '@/services/studioGhibli'

export default {
	name: 'FilmsList',
	data: () => ({
		isLoading: false,
		films: [],
		error: null
	}),
	created () {
		this.fetchFilms()
	},
	methods: {
		async fetchFilms () {
			this.error = null
			this.films = null
			this.isLoading = true
			try {
				const results = await service.getFilms()
				this.isLoading = false
				this.films = results
			} catch (err) {
				this.isLoading = false
				this.error = err.toString()
			}
		}
	}
}
</script>
