<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SearchBar from '@/components/SearchBar.vue'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'home' }"><img src="./assets/placeholder-logo.png" alt=""></RouterLink>
          <div>
            <RouterLink :to="{ name: 'home' }">Accueil</RouterLink> |
            <RouterLink :to="{ name: 'books' }">Livres</RouterLink> |
            <RouterLink :to="{ name: 'login' }">Compte</RouterLink>
          </div>
          <SearchBar></SearchBar>
        </nav>
      </div>
    </header>
    <div id="content-zone">
      <RouterView />
    </div>
    <footer>
    </footer>
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
nav{
  color: #7D7757;
  font-size: 20px;
}
#content-zone{
  border: #87772F solid 3px;
  border-radius: 10px;
  width: 1200px;
  height: 1200px;
  margin: auto;
  background-color: white;
}
footer{
  height: 100px;
}
</style>
