<script>
import axios from 'redaxios'
export default {
  data() {
    return {
      books: [],
      authors: []
    }
  },
  mounted() {
    this.getBooks()
    this.getAuthorOfBook()
  },
  methods: {
    async getBooks() {
      const APICall = 'http://localhost:3000/api/books'
      for (let i = 0; i < 3; i++) {
        await axios.get(APICall, {
          withCredentials: true
        }).then((result) => {
          for (let i = 0; i < result.data.data.length; i++) {
            if (result.data.data[i] !== null) {
              this.books.push(result.data.data[i])
            }
          }
        }).catch((error) => {
          console.error(error)
        })
      }
    },
    async getAuthorOfBook() {
      const APICall = "http://localhost:3000/api/authors"

      await axios.get(APICall, {
        withCredentials: true
      }).then((result) => {
        for (let i = 0; i < result.data.data.length; i++) {
          if (result.data.data[i] !== null) {
            this.authors.push(result.data.data[i])
          }
        }

        this.books.forEach((book) => {
          this.authors.forEach((author) => {
            if (author.id_author == book.fk_publisher) {
              book.author = `${author.autFirstName} ${author.autLastName}`
            }
          });
        })

      }).catch((error) => {
        console.error(error)
      })
    },
    // redirectToBook(book){
    //   let bookId = book.id_book
      
    //   location.href = "/book/" + bookId
    // }
  }
}
</script>

<template>
  <div v-for="book in books" class="bookSquare">
    <div @click="redirectToBook(book)">
      <img :src="book.booCoverImage">
      <p class="title">{{ book.booTitle }}</p>
      <p class="author">{{ book.author }}</p>
      <p>Rating: {{ book.booAvgRating }}</p>
    </div>
  </div>
</template>

<style scoped>
img {
  padding-top: 10px;
  height: 200px;
  max-width: 300px;
}

.bookSquare {
  width: 300px;
  border-radius: 10px;
  border-color: rgb(65, 58, 58);
  border-width: 1px;
  border-style: groove;
  margin-bottom: 50px
}

.bookSquare p {
  margin-bottom: 5px;
}
</style>