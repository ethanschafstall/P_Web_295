<!-- Vue for the home page -->
<script setup>
import LastBooks from '@/components/LastBooks.vue'
</script>

<template>
  <main>
    <div id="welcome">
      <h1>Bienvenue</h1>
      <p>Ce site, réalisé pour le projet web frontend (C-294), a été réalisé par Ethan Schafstall et Lucas Simoes
        Polvora.
        Réaliser pour apprendre à faire du frontend dynamique avec une base de donnée qui envoye des données et le
        frontend,
        codé en vue3. Ce site permet aux utilisateurs de publiés leurs livres et de mettres des informations
        supplémentaires.
      </p>
    </div id="lastBooks">
    <h1>Dernières sorties</h1>
      <LastBooks/>
    <div>

    </div>
  </main>
</template>

<style>
#welcome p {
  font-size: 20px;
}
</style>