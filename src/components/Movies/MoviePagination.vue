<template>
  <div class="row">
    <q-pagination
      :max="maxPage"
      v-model="page"
      input
      @input="updatePage"
    />
  </div>
</template>
<script>

export default {
  name: "MoviePagination",
  data: () => ({
    page: 1
  }),
  props: ['maxPage'],
  methods: {
    updatePage(page) {
      this.$emit('updated:page', page)
    }
  },
}
</script>
