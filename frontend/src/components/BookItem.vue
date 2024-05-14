<script>
import router from '@/router';

export default {
  props: {
    book: {
          type: Object,
          required: true
        }
      },
  setup() {
  },
  methods:{
    navigateToPage(){
      router.push({ name: 'bookItem', params: { id: this.book.id_book}})
    }
  }
}
</script>

<template>
  <div class="bookItem" @click="navigateToPage()" >
    <img :src="book.booCoverImage" alt="Book Cover" class="bookImage">
    <div class="bookDetails">
      <h4 class="bookTitle">{{ book.booTitle }}</h4>
    </div>
  </div>
</template>

<style scoped>
.bookItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 4px;
  transition: box-shadow 0.3s ease;
}

.bookItem:hover {
  /* box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2); */
  border: 1px solid #bbbbbb;
  cursor: pointer;
}

.bookImage {
  width: auto; /* Set width to auto so it adjusts based on aspect ratio */
  height: 250px; /* Set a fixed height */
  object-fit: cover; /* Maintain aspect ratio while covering the container */
  border-radius: 5px;
}

.bookDetails {
  text-align: center;
}

.bookTitle {
  margin: 10px 0;
  font-size: 18px;
}

.bookAuthor {
  margin: 5px 0;
  color: #666;
}

.bookPrice {
  margin: 5px 0;
  font-weight: bold;
  color: #008000; /* green color for price */
}
</style>

