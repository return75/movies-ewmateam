<template>
    <div class="col-6 col-md-3 col-lg-2 q-mb-lg q-px-xs">
      <router-link :to="`movie/${movieData.id}`" class="no-link-style">
        <q-card class="full-height bg-transparent flat">
          <q-img
            style=" width: 100%; height: 300px"
            :src="`https://image.tmdb.org/t/p/original/${movieData.poster_path}`"
          >
            <template v-slot:loading>
              <q-skeleton animation="blink" height="500px" width="300px" />
            </template>
          </q-img>
          <q-card-section class="q-pb-sm text-weight-bold text-body1">
            {{movieData.title}}
          </q-card-section>
          <q-card-section class="q-py-sm flex items-center">
             <q-icon name="mdi-calendar-outline" size="sm"></q-icon>
              <span class="text-weight-bold q-ml-sm">{{movieData.release_date}}</span>
          </q-card-section>
          <q-card-section class="q-py-sm" v-html="genreString"/>
        </q-card>
      </router-link>
    </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movieData: {
      type: Object,
      required: true
    },
    genre: {
      type: Array,
      required: true
    }
  },
  computed: {
    genreString() {
      return this.genre.map(item => item.name).join(' &#8226; ')
    }
  }
}
</script>
<style>
.no-link-style {
  text-decoration: none;
  color: inherit;
}
</style>
