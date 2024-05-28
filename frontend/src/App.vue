<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SearchBar from '@/components/SearchBar.vue'
import axios from 'redaxios'
import Footer from './components/Footer.vue';
</script>

<script>
export default {
  data() {
    return {
      isConnected: false,
    }
  },
  mounted() {
    //this.isConnected()
  },
  methods: {
    async isConnected() {
      const APICall = 'http://localhost:3000/api/books'

      await axios.get(APICall, {
        withCredentials: true
      }).then((result) => {
        this.isConnected = true
      }).catch((error) => {
        this.isConnected = false
      })

    }
  }
}
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'home' }"><img src="./assets/placeholder-logo.png" alt="logo"></RouterLink>
          <div>
            <RouterLink :to="{ name: 'home' }">Accueil</RouterLink> |
            <RouterLink :to="{ name: 'books' }">Livres</RouterLink> |
            <RouterLink v-if="!isConnected" :to="{ name: 'login' }">Login</RouterLink>
            <RouterLink v-if="isConnected" to="/users">Compte</RouterLink>
          </div>
          <SearchBar></SearchBar>
        </nav>
      </div>
    </header>
    <div id="content-zone">
      <RouterView />
    </div>
      <Footer />
  </div>
</template>


<style>
#layout {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px 100px 30px 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #7D7757;
}

nav a.router-link-exact-active {
  color: #447866;
}

nav {
  color: #7D7757;
  font-size: 20px;
}

#content-zone {
  border: #87772F solid 3px;
  border-radius: 10px;
  width: 1200px;
  height: 1200px;
  margin: auto;
  background-color: white;
}

footer {
  height: 100px;
}
</style>