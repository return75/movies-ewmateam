<template>
    <div class="fixed pagination-container q-pa-sm">
      <q-pagination
        :max="maxPage"
        v-model="page"
        @input="updatePage"
        color="blue-grey-10"
        :max-pages="6"
        :boundary-numbers="false"
      />
    </div>
</template>
<script>


export default {
  name: "MoviePagination",
  data: () => ({
    page: 1,
    perPage: 20
  }),
  props: ['maxPage'],
  methods: {
    updatePage(page) {
      this.$emit('updated:page', page)
    }
  },
}
</script>
<style>
.pagination-container {
  bottom: 0;
  z-index: 2;
  background: rgba(255, 255, 255, 1);
  width: 600px;
  display: flex;
  justify-content: center;
}
.q-pagination button {
  min-width: 30px !important;
}
</style>
