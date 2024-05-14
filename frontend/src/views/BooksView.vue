<!-- Vue for the books page -->
<script setup>
import BookItem from '@/components/BookItem.vue';
import { ref, onMounted } from 'vue';
import FetchService from '@/services/FetchService';

const books = ref([]);

onMounted(() => {
  FetchService.getBooks()
    .then((booksArray) => {
      books.value = booksArray;
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<template>
  <div class="books">

    <BookItem v-for="(book, index) in books" :key="index" :book="book"></BookItem>

    <BookShow />

  </div>
</template>

<style>

.books{
  display: flex;

.books {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}
</style>
