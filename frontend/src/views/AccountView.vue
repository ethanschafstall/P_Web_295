<!-- Vue for the login page/account page -->
<script setup>
import LoginSquare from '@/components/LoginSquare.vue';

const isConnected = () => {
  return false
}
</script>

<template>
  <LoginSquare v-if="isConnected"/>
</template>

<style></style>