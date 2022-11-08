<template>
  <div style="height: 500px" class="flex flex-center">
    <q-spinner-puff
      color="primary"
      size="2em"
    />
    <q-tooltip :offset="[0, 8]">QSpinnerPuff</q-tooltip>
  </div>
</template>

<script>
export default {
  name: "Preloader"
}
</script>
