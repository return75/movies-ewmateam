<template>
  <q-page>
    <div class="row q-mb-xl items-center">
      <q-btn size="lg" outline rounded class="q-mr-xl"
             @click="$router.go(-1)"> Back</q-btn>
      <div class="q-ml-xl">
        <div class="text-h4">{{movieDetails.title}}</div>
        <div class="text-h6">{{movieDetails.tagline}}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-5">
        <q-img class="rounded-borders" :src="`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`"/>
      </div>
      <div class="col-12 col-md-7 q-pl-xl q-pt-xl">
        <div v-for="(value, name) in infoToShow" class="row justify-between items-center q-mb-lg q-ml-xl">
          <div class="text-h5 text-weight-bold">{{name}}</div>
          <div class="text-weight-bold">
            {{value}}
          </div>
        </div>
        <div class="row justify-between items-center q-mb-lg q-ml-xl">
          <div class="text-h5 text-weight-bold">IMDB Link</div>
          <div>{{movieDetails.imdb}}</div>
        </div>
        <div class="row justify-between items-center q-mb-lg q-ml-xl">
          <div class="text-h5 text-weight-bold">Homepage Link</div>
          <div>{{movieDetails.imdb}}</div>
        </div>
      </div>
    </div>
    <div class="row q-mt-xl text-body1 text-justify text-weight-bold">
      {{movieDetails.overview}}
    </div>
  </q-page>
</template>
<script>
import movieService from './../services/movieService'
export default {
  name: 'MovieDetails',
  data: () => ({
    movieDetails: {}
  }),
  computed: {
    infoToShow() {
      return {
        Budget: `$${this.movieDetails.budget}`,
        Revenue: `$${this.movieDetails.revenue}`,
        'Release Date': this.movieDetails.release_date,
        Runtime: `${this.movieDetails.runtime} min`,
        score: `${this.movieDetails.vote_average} (${this.movieDetails.vote_count} votes)`,
        Genres: this.movieDetails.genres.map(item => item.name).join(' , '),
      }
    }
  },
  methods: {
    getMovieDetails(movieId) {
      return new Promise(resolve => {
        movieService.getMovieDetails(movieId).then(res => {
          resolve(res.data)
        })
      })
    },
  },
  async mounted() {
    this.movieDetails = await this.getMovieDetails(this.$route.params.id)

  }
}
</script>
