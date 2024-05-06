<script>
import axios from 'redaxios'
export default {
  data() {
    return {
      
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
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
          console.error(error)
      })
    }
  }
}
</script>

<template>

</template>

<style scoped>

</style>