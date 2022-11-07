<template>
    <div class="col-6 col-md-3 col-lg-2 q-mb-lg q-px-xs">
      <router-link :to="`movie/${movieData.id}`">
        <q-card class="full-height">
          <q-img
            style=" max-width: 100%"
            :src="`https://image.tmdb.org/t/p/original/${movieData.poster_path}`"
          >
            <template v-slot:loading>
              <q-skeleton height="400px" style="max-height: 100%; max-width: 100%" square width="300px" />
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
