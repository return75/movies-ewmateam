<template>
  <q-page class="flex flex-center">
      <movies-list></movies-list>
  </q-page>
</template>

<script>
import MoviesList from "components/Movies/MoviesList";

export default {
  name: 'Movies',
  components: {MoviesList}
}
</script>
