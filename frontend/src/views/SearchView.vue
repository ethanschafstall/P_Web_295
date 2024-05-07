<script>
import { onMounted, ref } from 'vue';
import FetchService from '@/services/FetchService';
import BookItem from '@/components/BookItem.vue';

export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    q: {
      type: String,
      required: true
    }
  },
  components: {
    BookItem
  },
  setup(props) {
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

    return {
      books
    };
  }
};
</script>

<template>
  <div class="searchView">
    <BookItem v-for="(book, index) in books" :key="index" :book="book"></BookItem>
  </div>
</template>

<style scoped>
.searchView{
  display: flex;
  justify-content: space-around;
  padding-top: 70px;
}
</style>
