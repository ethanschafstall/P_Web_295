
<script>
import FetchService from '@/services/FetchService';
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

export default {
  props: ['id'],
  setup(props) {
    const book = ref({});
    onMounted(() => {
      FetchService.getBook(props.id)
        .then((response) => {
          book.value = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        })
      });
    return {
      book
    };
}
};

</script>

<template>
  <h1>{{ book.booTitle }}</h1>
  <div>
    <img :src="book.booCoverImage" alt="Cover Image" class="cover">
    <ul>
      <h3>Détails</h3>
      <li>Nombre de pages : {{ book.booPageCount }}</li>
      <li>Extrait : {{ book.booExcerpt }}</li>
      <li>Résumé : {{ book.booSummary }}</li>
      <li>Note moyenne : {{ book.booAvgRating }}</li>
      <li>Date de publication : {{ book.booPublishDate }}</li>
    </ul>
  </div>
  <button :to="{ name: 'bookItem', params: { id: this.book.id_book+1} }">Previous</button>
</template>
<style scoped>
  div{
    display: flex;
  }
.cover{
  width: 35%;
}
ul{
  list-style-type: none;
  width: max-content;
}

</style>