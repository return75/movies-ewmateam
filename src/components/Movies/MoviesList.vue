<template>
   <div class="row">
       <movie-card
         v-for="(movie, index) in movies"
         :key="movie.id"
         :movie-data="movie"
       ></movie-card>
   </div>
</template>

<script>
import movieService from './../../services/movieService'
import MovieCard from "components/Movies/MovieCard";

export default {
  name: 'MoviesList',
  data: () => ({
    genres: []
  }),
  props: ['movies'],
  methods: {
    getMoviesList(page) {
      return new Promise(resolve => {
        movieService.getMoviesList(page).then(res => {
          resolve(res.data.results)
        })
      });
    },
    getGenres() {
      return new Promise(resolve => {
        movieService.getGenres().then(res => {
          resolve(res.data.genres)
        })
      });
    },
  },
  components: { MovieCard },
  async mounted() {
    this.genres = await this.getGenres()
  }
}
</script>
