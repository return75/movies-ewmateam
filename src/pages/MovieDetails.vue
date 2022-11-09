<template>
  <q-page v-if="render">
    <div class="q-mb-xl items-center" :class="{ 'row': !isMobile }">
      <q-btn size="lg" outline rounded
             @click="$router.go(-1)"> Back</q-btn>
      <div :class="{'q-ml-xl': !isMobile, 'q-mt-lg': isMobile}">
        <div class="text-h4">{{movieDetails.title}}</div>
        <div class="text-h6">{{movieDetails.tagline}}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-5">
        <q-img class="rounded-borders" :src="`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`"/>
      </div>
      <div class="col-12 col-md-7 q-pt-xl" :class="{ 'q-pl-xl': !isMobile }">
        <div v-for="(value, name) in infoToShow"
             class="row justify-between items-center q-mb-lg"
             :class="{ 'q-ml-xl': !isMobile }"
        >
          <div class="text-h5 text-weight-bold">{{name}}</div>
          <div class="text-weight-bold" v-html="value"></div>
        </div>
        <div class="row justify-between items-center q-mb-lg"
              :class="{'q-ml-xl': !isMobile}"
        >
          <div class="text-h5 text-weight-bold">IMDB Link</div>
          <q-btn color="primary" :href="`https://www.imdb.com/title/${movieDetails.imdb_id}`"
                 target="_blank"
                 label="Link" flat />
        </div>
        <div class="row justify-between items-center"
             :class="{'q-mb-lg q-ml-xl': !isMobile}">
          <div class="text-h5 text-weight-bold">Homepage Link</div>
          <q-btn color="primary" :href="movieDetails.homepage"
                 target="_blank"
                 label="Homepage" flat />
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
    render: false,
    movieDetails: {},
    movieCredits: [],
  }),
  computed: {
    infoToShow() {
      return {
        Budget: `$${this.movieDetails.budget}`,
        Revenue: `$${this.movieDetails.revenue}`,
        'Release Date': this.movieDetails.release_date,
        Runtime: `${this.movieDetails.runtime} min`,
        Score: `${this.movieDetails.vote_average} (${this.movieDetails.vote_count} votes)`,
        Genres: this.movieDetails.genres.map(item => item.name).join(' &#8226; '),
      }
    },
    isMobile() {
      return window.innerWidth < 540
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
