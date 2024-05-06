<script>
import axios from 'redaxios'
export default {
  data() {
    return {
      books: []
    }
  },
  mounted() {
    this.getBooks()
  },
  methods: {
    async getBooks() {
      const APICall = 'http://localhost:3000/api/books'
      await axios.get(APICall, {
        withCredentials: true
      }).then((result) => {
        for (let i = 0; i < result.data.data.length; i++) {
          if (result.data.data[i] !== null) {
            this.books.push(result.data.data[i])
            console.log(this.books)
          }
        }
      }).catch((error) => {
          console.error(error)
      })
    }
  }
}
</script>

<template>
  <div v-for="book in books" class="bookDisplay">
    <p>{{ book.booTitle }}</p>
    <img :src="book.booCoverImage">
  </div>
</template>

<style scoped>
.bookDisplay img {
  width: 100px;
}
</style>