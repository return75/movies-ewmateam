<template>
  <div id="q-app">
    <q-layout>
      <q-page-container class="gradient text-white q-px-lg">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
.gradient {
  background: linear-gradient(187deg, rgb(11, 33, 93) 0%, rgb(12, 20, 41) 100%);
}
</style>
