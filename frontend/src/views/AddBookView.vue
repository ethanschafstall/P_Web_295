<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'redaxios'

export default {
  setup() {
    const router = useRouter()

    // Book attributes
    const booTitle = ref('')
    const booPageCount = ref('')
    const booExcerpt = ref('')
    const booSummary = ref('')
    const booCoverImage = ref('')
    const booPublishDate = ref('')

    const book = computed(() => ({
      title: booTitle.value,
      pageCount: booPageCount.value,
      excerpt: booExcerpt.value,
      summary: booSummary.value,
      coverImage: booCoverImage.value,
      publishDate: booPublishDate.value,
    }))

    const startOver = () => {
      booTitle.value = ""
      booPageCount.value = ""
      booExcerpt.value = ""
      booSummary.value = ""
      booCoverImage.value = ""
      booPublishDate.value = ""
    }

    const addBook = () => {
      if (
        booTitle.value == '' ||
        booPageCount.value == '' ||
        booExcerpt.value == '' ||
        booSummary.value == '' ||
        booCoverImage.value == '' ||
        booPublishDate.value == ''
      ) {
        return alert('Veuillez remplir tous les champs')
      } else {
        putBook()
      }
    }

    const putBook = async () => {
      console.log(booPublishDate.value)
      const APICall = `http://localhost:3000/api/books/`
      try {
        await axios.post(APICall, book.value, {
          withCredentials: true
        })
        location.reload()
      } catch (error) {
        console.error("Error while adding book:", error)
      }
    }

    return {
      booTitle,
      booPageCount,
      booExcerpt,
      booSummary,
      booCoverImage,
      booPublishDate,
      startOver,
      addBook
    }
  }
}

</script>


<template>
  <main class="container">
    <div class="user-body">
      <form id="form" @submit.prevent="addBook()">
        <h3>Ajout d'un nouveau livre</h3>
        <p>
          <label for="booTitle">Titre :</label>
          <input type="text" id="booTitle" v-model="booTitle" />
        </p>
        <p>
          <label for="booPageCount">Nombre de pages :</label>
          <input type="text" id="booPageCount" v-model="booPageCount" />
        </p>
        <p>
          <label for="booExcerpt">Extrait :</label>
          <input type="text" id="booExcerpt" v-model="booExcerpt" />
        </p>
        <p>
          <label for="booSummary">Résumé :</label>
          <input type="text" id="booSummary" v-model="booSummary" />
        </p>
        <p>
          <label for="booCoverImage">Image de couverture :</label>
          <input type="text" id="booCoverImage" v-model="booCoverImage" />
        </p>
        <p>
          <label for="booPublishDate">Date de publication :</label>
          <input type="date" id="booPublishDate" v-model="booPublishDate" />
        </p>
        <p>
          <input class="button" type="submit" value="Submit" />
          <button type="button" @click="startOver()">Effacer</button>
        </p>
      </form>
    </div>
    <p>Veuillez vous assurer que vous êtes connecté</p>
    <div class="user-footer">
      <RouterLink :to="{ name: 'home' }">Retour à la page d'accueil</RouterLink>
    </div>
  </main>
</template>
