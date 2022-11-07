<template>
  <q-layout>
    <q-page-container class="container container-padding">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  name: "MoviesLayout",
}
</script>
<style>
.container-padding {
  padding-top: 60px;
  padding-bottom: 60px;
}
</style>
