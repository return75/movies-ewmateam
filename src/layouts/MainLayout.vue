<template>
  <q-layout class="flex flex-center">
    <q-page-container class="gradient q-pa-lg" style="width: 600px; max-width: 100%">
      <div class="full-height">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  name: "MoviesLayout",
}
</script>
<style>
.gradient {
  background: linear-gradient(187deg, rgb(11, 33, 93) 0%, rgb(12, 20, 41) 100%);
}
</style>
