<script>
import { useRoute } from 'vue-router';
import axios from 'redaxios'
export default {
    data() {
        return {
            bookId: 0
        }
    },
    mounted() {
        this.getIdOfBook()
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

            if(!comment){
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
            <input id="rating" type="number" step="0.1" min="1" max="5" placeholder="5" >
            <button type="submit" class="btn">Envoyer</button>
        </div>
    </form>
</template>

<style scoped>
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