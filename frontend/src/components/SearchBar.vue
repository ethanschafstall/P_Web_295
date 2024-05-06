<script setup>
import { reactive, ref } from 'vue';

const options = reactive([
  { name: "Tout", type: "all" },
  { name: "Livres", type: "books" },
  { name: "Auteurs", type: "authors" },
  { name: "Catégories", type: "categories" }
]);

const activeFilterName = ref("Tout");
const searchQuery = ref("");

const updateSearchQuery = () => {
  // Find the active filter
  const activeFilter = options.find(option => option.name === activeFilterName.value);
  // Modify the search query based on the active filter
  switch (activeFilter.type) {
    case "books":
      
      break;
    case "authors":
      break;
    case "categories":
      break;
    default:

  }
};


const search = () => {
  // Define your authorization token
  const authToken = 'Bearer YOUR_AUTH_TOKEN';

  // Define your request headers
  const headers = {
    'Authorization': authToken,
    'Content-Type': 'application/json' // You can add more headers as needed
  };

  // Define your request options
  const requestOptions = {
    method: 'GET', // Or 'POST', 'PUT', 'DELETE', etc.
    headers: headers
    // You can add more options like body for POST requests
  };

  // Navigate to a different page using Vue Router
  router.push(`/search?query=${searchQuery.value}&filter=${activeFilterName.value}`);
  
  // Send a fetch request to your API
  fetch(`YOUR_API_URL/search?query=${searchQuery.value}&filter=${activeFilterName.value}`, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the data from the API response
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
};

</script>

<template>
  <div id="search">
    <select name="filters" id="filters" v-model="activeFilterName" @change="updateSearchQuery">
      <option v-for="option in options" :value="option.name" :key="option.name">{{ option.name }}</option>
    </select>
    <input type="text" placeholder="Rechercher..." v-model="searchQuery" @keyup.enter="search">
  </div>
</template>

<style scoped>

#search{
        display: flex;
        border: 1.5px solid #87772F;
        border-radius: 5px;
        width: 300px;
        height: 44px;
    }
#search select{
        border: 0cm;
        border-top-left-radius: 3.5px;
        border-bottom-left-radius: 3.5px;
        width: 45%;
        border-right: #87772F 1.5px solid;
        background-color: #FFFBE7;
    }
#search input{
        border: 0cm;
        border-top-right-radius: 3.5px;
        border-bottom-right-radius: 3.5px;
        width: 70%;
        padding-left: 5%;
    }
input{
  caret-color: transparent;
  padding-top: 2%;
}
::placeholder {
        font-size: 20px;
        color: #B4A665;
        }
#filters, option{
        font-size: 18px;
        color: #B4A665;
        text-align: center;
    }
option{
  font-size: 15px;
  text-align: none;
}
#search select:focus{   
        outline: none;
    }

</style>
