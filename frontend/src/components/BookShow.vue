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
  },
  methods: {
    async getBooks() {
      const APICall = 'http://localhost:3000/api/books'
      try {
        const result = await axios.get(APICall, { withCredentials: true });
        this.books = result.data.data.slice(0, 10);
        await this.getAuthorOfBook();
      } catch (error) {
        console.error(error);
        let title = document.getElementsByClassName('TitlePage');
        title[0].innerHTML = 'Une erreur est arrivé, veuillez vérifier que vous êtes connecté';
      }
    },
    async getAuthorOfBook() {
      const APICall = "http://localhost:3000/api/authors"
      try {
        const result = await axios.get(APICall, { withCredentials: true });
        this.authors = result.data.data;

        this.books.forEach((book) => {
          const author = this.authors.find(author => author.id_author === book.fk_publisher);
          if (author) {
            book.author = `${author.autFirstName} ${author.autLastName}`;
          }
        });

      } catch (error) {
        console.error(error);
        let title = document.getElementsByClassName('TitlePage')
        title[0].innerHTML = 'Une erreur est survenue, veuillez vérifier que vous êtes connecté'
      }
    }
  }
}
</script>



<template>
  <h1 class="TitlePage"></h1>
  <div v-for="book in books" :key="book" class="bookSquare">
    <router-link :to="{ name: 'book', params: { id: book.id_book }}">
    <div>
      <img :src="book.booCoverImage">
      <p class="title">{{ book.booTitle }}</p>
      <p class="author">{{ book.author }}</p>
      <p>Rating: {{ book.booAvgRating }}</p>
    </div>
    </router-link>
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
  margin-bottom: 50px;
  cursor: pointer;
}

.bookSquare p {
  margin-bottom: 5px;
}
a:link{
  text-decoration:none;
}
</style>