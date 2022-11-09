<template>
    <div class="fixed container text-center pagination-container">
      <q-pagination
        :max="maxPage"
        v-model="page"
        input
        class="justify-center"
        @input="updatePage"
      />
      <div class="text-center q-pb-md text-dark">
        Showing results : {{resultsRange}}
      </div>
    </div>
</template>
<script>


export default {
  name: "MoviePagination",
  data: () => ({
    page: 1,
    perPage: 20
  }),
  computed: {
    resultsRange() {
      let startItem = (this.page - 1) * this.perPage + 1
      let endItem = this.page  * this.perPage
      return `${startItem} - ${endItem}`
    }
  },
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
  background: #efefef;
  border-top-right-radius: .5rem;
  border-top-left-radius: .5rem;
}
</style>
