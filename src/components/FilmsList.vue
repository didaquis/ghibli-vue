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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import service from '@/services/studioGhibli'

@Component
export default class Films extends Vue {
  name: 'FilmsList';

  data () {
    return {
      isLoading: false,
      films: [],
      error: null
    }
  };

  created () {
    this.fetchFilms()
  };

  fetchFilms = async function () {
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
  };
}
</script>
