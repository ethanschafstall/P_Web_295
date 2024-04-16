<script setup>
import axios from 'redaxios';

const getData = async () => {
  axios.get('http://localhost:3000/test16042024')
    .then((answer) => {
      console.log(answer.data)
    })
}

const login = async () => {
  axios.post('http://localhost:3000/login', {
    nickname: 'toto',
    password: 'titi'
  }).then((answer) => {
    console.log(answer.data)
  })
}
</script>

<template>
  <main>
    <button @click="getData()">get</button>
    <button @click="login()">login</button>
  </main>
</template>