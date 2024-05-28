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
            const APICall = 'http://localhost:3000/api/books?limit=5&orderby=id_book&order=desc'
            for (let i = 0; i < 2; i++) {
                await axios.get(APICall, {
                    withCredentials: true
                }).then((result) => {
                    for (let i = 0; i < result.data.data.length; i++) {
                        if (result.data.data[i] !== null) {
                            this.books.push(result.data.data[i])
                            if(this.books.length == 5){
                                break;
                            }
                        }
                    }
                }).catch((error) => {
                    let title = document.getElementsByClassName('TitlePage')
                    console.log(title)
                    title[0].innerHTML = 'Une erreur est arrivé, veuillez vérifier que vous êtes connecté'
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
                let title = document.getElementsByClassName('TitlePage')
                title.innerHTML = 'Une erreur est survenue, veuillez vérifier que vous êtes connecté'
            })
        },
        redirectToBook(book) {
            let bookId = book.id_book
            location.href = "/book/" + bookId
        }
    }
}
</script>

<template>
    <div id="bookDisplay">
        <h1 class="TitlePage"></h1>
        <div v-for="book in books" class="bookSquare">
            <div @click="redirectToBook(book)">
                <img :src="book.booCoverImage">
                <p class="title">{{ book.booTitle }}</p>
                <p class="author">{{ book.author }}</p>
                <p>Rating: {{ book.booAvgRating }}</p>
            </div>
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
</style>