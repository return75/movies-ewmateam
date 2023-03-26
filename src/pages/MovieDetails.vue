<template>
  <q-page v-if="render" class="text-white full-height">
    <div class="q-mb-xl items-center flex">
      <q-btn size="lg" outline rounded @click="$router.go(-1)"> Back</q-btn>
      <div class="q-pl-md q-mt-md">
        <div class="text-h4">{{movieDetails.title}}</div>
        <div class="text-h6">{{movieDetails.tagline}}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <q-img class="rounded-borders" :src="`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`"/>
      </div>
      <div class="col-12 q-pt-xl">
        <div v-for="(value, name) in infoToShow" class="row justify-between items-center q-mb-lg">
          <div class="text-h5 text-weight-bold">{{name}}</div>
          <div class="text-weight-bold" v-html="value"></div>
        </div>
        <div class="row justify-between items-center q-mb-lg">
          <div class="text-h5 text-weight-bold">IMDB Link</div>
          <q-btn color="primary" :href="`https://www.imdb.com/title/${movieDetails.imdb_id}`"
                 target="_blank"
                 label="Link" flat />
        </div>
        <div class="row justify-between items-center">
          <div class="text-h5 text-weight-bold">Homepage Link</div>
          <q-btn color="primary" :href="movieDetails.homepage"
                 target="_blank"
                 label="Link" flat />
        </div>
      </div>
    </div>
    <div class="row q-mt-xl text-body1 text-justify text-weight-bold">
      {{movieDetails.overview}}
    </div>
    <div class="row q-mt-xl text-body1 text-justify text-weight-bold">
      <div class="text-h6 text-weight-bold">Credit:</div>
      <div>{{castAndCrewString}}</div>
    </div>
  </q-page>
</template>
<script>
import movieService from './../services/movieService'
export default {
  name: 'MovieDetails',
  data: () => ({
    render: false,
    movieDetails: {},
    movieCredits: [],
  }),
  computed: {
    infoToShow() {
      return {
        Budget: `$${ this.formatNumber(this.movieDetails.budget)}`,
        Revenue: `$${ this.formatNumber(this.movieDetails.revenue) }`,
        'Release Date': this.movieDetails.release_date,
        Runtime: `${this.movieDetails.runtime} min`,
        Score: `${this.movieDetails.vote_average} (${this.movieDetails.vote_count} votes)`,
        Genres: this.movieDetails.genres.map(item => item.name).join(' &#8226; '),
      }
    },
    castAndCrew() {
      return [...this.movieCredits.cast, ...this.movieCredits.crew]
    },
    castAndCrewString() {
      let counts = this.castAndCrew.length
      let firstTenItems = this.castAndCrew.slice(0, 10)
      if (counts > 10) {
        return `${firstTenItems.map(item => item.name).join(', ')} and ${counts - 10} more.`
      }
      return firstTenItems.map(item => item.name).join(', ')
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
    getMovieCredits(movieId) {
      return new Promise(resolve => {
        movieService.getMovieCredits(movieId).then(res => {
          resolve(res.data)
        })
      })
    },
    formatNumber(number) {
      return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)
    }
  },
  async mounted() {
    this.movieDetails = await this.getMovieDetails(this.$route.params.id)
    this.movieCredits = await this.getMovieCredits(this.$route.params.id)
    this.render = true
  }
}
</script>
