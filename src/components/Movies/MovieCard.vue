<template>
  <div class="col-12 col-md-3 q-mb-lg q-px-lg">
    <q-card class="my-card ">
      <q-img
        :src="`https://image.tmdb.org/t/p/original/${MovieData.poster_path}`"
      />
      <q-card-section>
        {{MovieData.title}}
      </q-card-section>
      <q-card-section>
        {{genreString}}
      </q-card-section>
    </q-card>
  </div>

</template>

<script>
export default {
  name: "MovieCard",
  props: {
    MovieData: {
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
      return this.genre.map(item => item.name).join(',')
    }
  }
}
</script>
