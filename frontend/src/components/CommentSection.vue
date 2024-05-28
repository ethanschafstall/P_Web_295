<script>
import { useRoute } from 'vue-router';
import axios from 'redaxios'
export default {
    data() {
        return {
            bookId: 0,
            comments: []
        }
    },
    mounted() {
        this.getIdOfBook(),
            this.getComments()
    },
    methods: {
        getIdOfBook() {
            const route = useRoute()
            this.bookId = route.params.id
        },
        async addComment() {
            const APICall = `http://localhost:3000/api/books/${this.bookId}/reviews`

            const rating = document.getElementById('rating').value

            const comment = document.getElementById('comment').value

            if (!comment) {
                alert(`Veuillez remplir l'espace commentaire`)
                return
            }

            await axios.post(APICall, {
                bookId: this.bookId,
                comment: comment,
                rating: rating
            }, {
                withCredentials: true
            }).then((result) => {
                location.reload()
            })
        },
        async getComments() {
            const APICall = `http://localhost:3000/api/books/${this.bookId}/reviews`

            await axios.get(APICall, {
                withCredentials: true
            }).then((result) => {
                this.comments = result.data.data

                this.comments.forEach((comment) => {
                    comment.revDate = String(comment.revDate).split('T')[0]
                })
            })
        }
    }
}
</script>

<template>
    <form action="#" class="commentary" @submit.prevent="addComment()">
        <div>
            <textarea name="Comment" id="comment" placeholder="Commentaire"></textarea>
        </div>
        <div id="right">
            <input id="rating" type="number" step="0.1" min="1" max="5" placeholder="5">
            <button type="submit" class="btn">Envoyer</button>
        </div>
    </form>
    <div id="comments">
        <div class="actualComment" v-for="comment in comments">
            <p>{{ comment.revComment }} {{ comment.revRating }}*</p>
            <p>Date: {{ comment.revDate }}</p>
        </div>
    </div>
</template>

<style scoped>
.commentary {
    margin-top: 50px;
    display: flex;
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

#comments {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}

.actualComment {
    width: 800px;
    border-radius: 10px;
    border-color: rgb(65, 58, 58);
    border-width: 1px;
    border-style: groove;
    margin-bottom: 50px;
    margin-bottom: 5px;
}
</style>