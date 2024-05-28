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
            const APICall = 'http://localhost:3000/api/books?limit=5&orderby=id_book&order=desc';
            try {
                const result = await axios.get(APICall, {
                    withCredentials: true
                });
                this.books = result.data.data.slice(0, 10);
                await this.getAuthorOfBook();
            } catch (error) {
                let title = document.getElementsByClassName('TitlePage')
                console.log(title)
                title[0].innerHTML = 'Une erreur est arrivé, veuillez vérifier que vous êtes connecté'
            }
        },
        async getAuthorOfBook() {
            const APICall = "http://localhost:3000/api/authors"

            try {
                const result = await axios.get(APICall, {
                    withCredentials: true
                });
                this.authors = result.data.data;

                this.books.forEach((book) => {
                    const author = this.authors.find(author => author.id_author === book.fk_publisher);
                    if (author) {
                        book.author = `${author.autFirstName} ${author.autLastName}`;
                    }
                });

            } catch (error) {
                let title = document.getElementsByClassName('TitlePage')
                title[0].innerHTML = 'Une erreur est survenue, veuillez vérifier que vous êtes connecté'
            }
        }
    }
}
</script>

<template>
    <div id="bookDisplay">
        <h1 class="TitlePage"></h1>
        <div v-for="book in books" :key="book.id_book" class="bookSquare">
            <router-link :to="{ name: 'book', params: { id: book.id_book }}">
            <div>
                <img :src="book.booCoverImage" alt="Book Cover">
                <p class="title">{{ book.booTitle }}</p>
                <p class="author">{{ book.author }}</p>
                <p>Rating: {{ book.booAvgRating }}</p>
            </div>
        </router-link>
        </div>
    </div>
</template>

<style scoped>
img {
    padding-top: 10px;
    height: 200px;
    max-width: 300px;
}
#bookDisplay {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.bookSquare {
    width: 200px;
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
  color: black;
}
a:visited{
    color: black;
}
</style>
