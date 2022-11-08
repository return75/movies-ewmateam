<template>
     <div class="row justify-center" v-if="movies.length">
         <movie-card
           v-for="(movie, index) in movies"
           :key="movie.id"
           :movie-data="movie"
           :genre="getMovieGenres(movie.genre_ids)"
         ></movie-card>
     </div>
     <preloader v-else></preloader>
</template>

<script>
import movieService from './../../services/movieService'
import MovieCard from "components/Movies/MovieCard"
import Preloader from "./../Preloader"

export default {
  name: 'MoviesList',
  data: () => ({
    genres: []
  }),
  props: ['movies'],
  components: { MovieCard, Preloader },
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
    getMovieGenres(genreIds) {
      return this.genres.filter(item => genreIds.includes(item.id))
    }
  },
  async mounted() {
    this.genres = await this.getGenres()
  }
}
</script>
