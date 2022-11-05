<template>
  <q-page class="flex flex-center" style="padding-top: 60px">
      <movie-search style="margin-bottom: 60px"></movie-search>
      <movies-list></movies-list>
  </q-page>
</template>

<script>
import MoviesList from "components/Movies/MoviesList";
import MovieSearch from "components/Movies/MovieSearch"

export default {
  name: 'Movies',
  components: {MoviesList, MovieSearch}
}
</script>
