<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const options = reactive([
  { name: "Tout", type: "" },
  { name: "Livres", type: "books" },
  { name: "Auteurs", type: "authors" },
  { name: "Catégories", type: "categories" }
]);

const activeFilterName = ref("Tout");
const searchQuery = ref("");

const router = useRouter();

const search = () => {
  // Checks if user has input query
  if (searchQuery.value === "") {
    return;
  }

  // Saves user input value
  const userInputValue = searchQuery.value;

  // Find the active filter
  const activeFilter = options.find(option => option.name === activeFilterName.value);
  let filter = ""; // Initialize filter as empty string
  if (activeFilter) {
    filter = activeFilter.type;
  }

  // Construct the URL with the filter as a query parameter
  const routeParams = {
    name: 'search',
    params: { filter },
    query: { q: userInputValue }
  };

  // Navigate to the URL
  router.push(routeParams);
};

// Reset the input and filter values when navigating.
router.beforeEach((to, from, next) => {
  // Check if the destination is a search route
  if (to.name === 'search') {
    // If it is a search route, keep previous values.
    next();
  } else {
    // If it's not a search route, reset values
    searchQuery.value = "";
    activeFilterName.value = "Tout";
    next();
  }
});
</script>

<template>
  <div id="search">
    <select name="filters" id="filters" v-model="activeFilterName">
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
