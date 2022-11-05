<template>
   <div class="row">
     <movie-card
       v-for="(movie, index) in movies"
       :key="index"
       :movie-data="movie"
       :genre="getMovieGenres(movie.genre_ids)"
     ></movie-card>
   </div>
</template>

<script>
import movieService from './../../services/movieService.'
import MovieCard from "components/Movies/MovieCard";

export default {
  name: 'MoviesList',
  data: () => ({
    movies: [],
    genres: []
  }),
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
  components: { MovieCard },
  async mounted() {
    this.genres = await this.getGenres()
    this.movies = await this.getMoviesList()
  }
}
</script>
