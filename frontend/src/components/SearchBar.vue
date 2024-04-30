<script setup>
import { reactive, computed, ref } from 'vue';

const options = reactive([
  { name: "Tout", isActive: true },
  { name: "Livres", isActive: false },
  { name: "Auteurs", isActive: false },
  { name: "Catégories", isActive: false }
]);

const activeFilter = computed(() => options.find(option => option.isActive));

const isActive = ref(false);

const toggleOptions = () => {
  isActive.value = !isActive.value;
};

const setActive = (option) => {
  options.forEach(opt => opt.isActive = false);
  option.isActive = true;
  toggleOptions(); // Hide options after selecting one
};
</script>

<template>
    <div id="search">
        <div class="selection" @click="toggleOptions">
            <p>{{ activeFilter.name }}</p><span></span>
        </div>
        <input type="text" placeholder="Rechercher... ">
    </div>
    <!-- <div id="searchbar">
      <form action="#">
        <div class="input_box">
          <input type="text" placeholder="Search">
          <div class="selection" @click="toggleOptions">
            <p>{{ activeFilter.name }}</p><span></span>
          </div>
          <div class="filters" :class="{ 'active': isActive }">
            <p v-for="(option, index) in options" :key="index" class="options" @click="setActive(option)">
              {{ option.name }}
            </p>
          </div>
        </div>
      </form>
    </div> -->
  </template>

<style scoped>
#search{
        display: flex;
        border: 1.5px solid #87772F;
        border-radius: 5px;
        width: 250px;
        height: 38px;
    }
.selection{
        border: 0cm;
        border-top-left-radius: 3.5px;
        border-bottom-left-radius: 3.5px;
        width: 30%;
        border-right: #87772F 1.5px solid;
        background-color: #FFFBE7;
    }
.selection p{
        border: 0cm;
        border-top-left-radius: 3.5px;
        border-bottom-left-radius: 3.5px;
        width: 30%;
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
::placeholder {
        font-size: 16px;
        color: #B4A665;
        }
#search input {
        font-size: 15px;
        color: #B4A665;
    }
#search input text{
        font-size: 15px;
        color: #B4A665;
    }
#search input:focus{   
        outline: none;
    }

/* #searchbar{
    width: 600px;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
}

#searchbar form .input_box {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
}
#searchbar form .input_box input{
    width: 100%;
    font-size: 25px;
    padding: 10px 15px;
    border: none;
    outline: none;
}
#searchbar form .selection{
    background-color: #000;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    border-radius: 5px;
}
#searchbar form .selection p{
    font-size: 25px;
    color: #fff;
}
#searchbar form .selection span{
    border-right: 5px solid #fff;
    border-bottom: 5px solid #fff;
    border-left: 5px solid #000;
    border-top: 5px solid #000;
    display: inline-block;
    rotate: 45deg;
    margin-left: 10px;
}
#searchbar form .filters{
    position: absolute;
    top: 100%;
    right: 0px;
    background-color: #000;
    color: #fff;
    padding: 10px;
    font-size: 0px;
    margin-top: 1px;
    border-radius: 5px;
    pointer-events: none;
    opacity: 0;
}
#searchbar form .active{
    font-size: 25px;
    opacity: 1;
    pointer-events: fill;
}
#searchbar form .filters p{
    margin: 5px 0px;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
}
#searchbar form .filters p:hover{
    background-color: #1e1e1e;
} */


</style>
