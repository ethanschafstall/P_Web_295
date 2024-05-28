<script>
import { useRoute } from 'vue-router';
import axios from 'redaxios'
export default {
    data() {
        return {
            book: {},
            authors: [],
            isASuccess: true
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
                this.book.booPublishDate = String(this.book.booPublishDate).split('T')[0]
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
            }).catch((error) => {
                console.error(error)
                let title = document.getElementsByClassName('TitlePage')
                title[0].innerHTML = 'Une erreur est survenue, veuillez vérifier que vous êtes connecté'
                this.isASuccess = false
            })
        }
    }
}
</script>

<template>
    <h1 class="TitlePage"></h1>
    <div id="book" v-if="this.isASuccess">
        <img :src="this.book.booCoverImage">
        <h1 class="title">{{ this.book.booTitle }}</h1>
        <h2 class="author">{{ this.book.author }}</h2>
        <p>Évaluation: {{ this.book.booAvgRating }}</p>
        <p>Pages: {{ this.book.booPageCount }}</p>
        <p>Date de publication: {{ this.book.booPublishDate }}</p>
        <div class="details">
            <h3>Summary :</h3>
            <p>     {{ this.book.booSummary }}</p>
        </div>
    </div>
</template>

<style scoped>
#book img {
    width: 400px;
}

#book {
    margin-top: 20px;
}
.details {
    text-align: start;
    margin-left: 20px;
}

.details p {
    margin-left: 20px;
}

.commentary {
    margin-top: 50px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
}

.commentary textarea {
    margin-right: 50px;
    width: 500px;
    height: 100px;
}

#rating {
    font-size: 30px;
    width: 100px;
}

.btn {
    width: 100%;
    height: 45px;
    background: #866d6d;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
    margin-top: 20px
}
</style>