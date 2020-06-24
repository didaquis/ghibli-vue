<template>
	<section class="section">
		<div class="container has-text-centered">
			<h1 class="title">Films</h1>
			<h2 class="subtitle">Discover the list of films</h2>

			<div v-if="isLoading" class="">
				Loading...
				<b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
			</div>

			<div v-if="error" class="">
				{{ error }}
			</div>
		</div>
		<div class="container custom-mt-6">
			<div v-if="films" class="content">
				<div class="columns is-multiline">
					<div class="column is-6-tablet is-4-desktop" v-for="film in films" v-bind:key="film.id">
						<FilmCard :film="film" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

import service from '@/services/studioGhibli'

import FilmCard from '@/components/FilmCard.vue'

export default {
	data: () => ({
		isLoading: false,
		films: [],
		error: null
	}),
	created () {
		this.fetchFilms()
	},
	components: {
		FilmCard
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
