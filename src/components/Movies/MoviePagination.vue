<template>
  <div class="bg-white fixed full-width text-center" style="bottom: 0;z-index: 2">
    <q-pagination
      :max="maxPage"
      v-model="page"
      input
      class="justify-center"
      @input="updatePage"
    />
    <div class="text-center q-pb-md">
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
