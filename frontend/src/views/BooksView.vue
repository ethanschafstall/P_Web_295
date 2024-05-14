<!-- Vue for the books page -->
<script setup>
import BookShow from '@/components/BookShow.vue';
</script>

<template>
  <h1>This is the book page</h1>
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
