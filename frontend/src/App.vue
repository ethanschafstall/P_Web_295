<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'home' }">Accueil</RouterLink> |
          <RouterLink :to="{ name: 'books' }">Livres</RouterLink> |
          <RouterLink :to="{ name: 'login' }">Compte</RouterLink>
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
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #7D7757;
}
nav a.router-link-exact-active {
  color: #447866;
}
nav text{
  color: #7D7757;
}
nav{
  font-size: 25px;
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
