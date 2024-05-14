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
  <h1>This is the book page</h1>
  <div class="books">
    <BookItem v-for="(book, index) in books" :key="index" :book="book"></BookItem>
  </div>
</template>

<style>
.books{
  display: flex;
}
</style>
