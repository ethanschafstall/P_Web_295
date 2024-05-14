<!-- Vue for the books page -->
<script setup>
import BookShow from '@/components/BookShow.vue';
</script>

<template>
  <div class="books">
    <BookShow />
  </div>
</template>

<style>
.books {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
