<script>
import { useRoute } from 'vue-router';
import axios from 'redaxios'
export default {
    data() {
        return {
            book: {},
            authors: []
        }
    },
    mounted() {
        this.getBookInfo()
        this.getAuthorOfBook()
    },
    methods: {
        async getBookInfo() {
            const route = useRoute()

            const APICall = 'http://localhost:3000/api/books/' + route.params.id

            await axios.get(APICall, {
                withCredentials: true
            }).then((result) => {
                this.book = result.data.data
                console.log(this.book)
            }).catch((error) => {
                console.error(error)
            })
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

                this.authors.forEach((author) => {
                    if (author.id_author == this.book.fk_publisher) {
                        this.book.author = `${author.autFirstName} ${author.autLastName}`
                    }
                });
                console.log(this.book)
            }).catch((error) => {
                console.error(error)
            })
        },
    }
}
</script>

<template>
    <div id="book">
        <img :src="this.book.booCoverImage">
        <h1 class="title">{{ this.book.booTitle }}</h1>
        <h2 class="author">{{ this.book.author }}</h2>
        <p>Évaluation: {{ this.book.booAvgRating }}</p>
        <p>Pages: {{ this.book.booPageCount }}</p>
        <div class="details">
            <h3>Summary :</h3>
            <p>{{ this.book.booSummary }}</p>
        </div>
    </div>

</template>

<style scoped>
#book img {
    width: 400px
}

#book {
    margin-top: 20px;
}
</style>