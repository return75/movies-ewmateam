<template>
  <q-page class="flex flex-center column" style="min-height: unset">
    <date-filter class="date-container" @updated:from="filter['primary_release_date.gte'] = $event"
                 @updated:to="filter['primary_release_date.lte'] = $event"></date-filter>
    <movies-list :movies="movies"></movies-list>
    <movie-pagination @updated:page="filter.page = $event" :maxPage="totalPages"></movie-pagination>
  </q-page>
</template>

<script>
import MoviesList from "components/Movies/MoviesList"
import DateFilter from "components/Movies/DateFilter"
import MoviePagination from "components/Movies/MoviePagination";
import movieService from "./../services/movieService"

export default {
  name: 'Movies',
  components: {MoviesList, DateFilter, MoviePagination},
  data: () => ({
    page: 1,
    filter: {
      'primary_release_date.gte' : null,
      'primary_release_date.lte' : null,
      page: 1,
    },
    movies: [],
    totalPages: 5,
  }),
  methods: {
    getMovies(filter = {}) {
      return new Promise(resolve => {
        movieService.getMoviesList(filter).then(res => {
          resolve({
            data: res.data.results,
            totalPages: res.data.total_pages
          })
        })
      })
    }
  },
  watch: {
    filter: {
      deep: true,
      async handler(val, prev) {
        console.log(val, prev)
        let {data} = await this.getMovies(val)
        this.movies = data
      }
    }
  },
  async mounted() {
    let {data, totalPages} = await this.getMovies()
    this.movies = data
    this.totalPages = totalPages
  }
}
</script>
<style>
.movie-container {
  padding-top: 60px;
  padding-bottom: 60px
}
.date-container {
  margin-bottom: 60px
}
</style>
