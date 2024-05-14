<!-- Vue for the home page -->
<script setup>
    const props = defineProps(['filter', 'q'])
</script>

<template>
  <main>
    <p>{{ props.filter }}</p> <!-- Access filter prop -->
    <p>{{ props.q }}</p> <!-- Access name prop -->
  </main>
</template>

<style>
</style>
