<template>
    <div class="col-6 col-md-3 col-lg-2 q-mb-lg q-px-xs">
      <router-link :to="`movie/${movieData.id}`">
        <q-card class="full-height">
          <q-img
            style=" width: 100%; height: 300px"
            :src="`https://image.tmdb.org/t/p/original/${movieData.poster_path}`"
          >
            <template v-slot:loading>
              <q-skeleton animation="blink" height="400px" square width="200px" />
            </template>
          </q-img>
          <q-card-section>
            {{movieData.title}}
          </q-card-section>
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
  },
}
</script>
