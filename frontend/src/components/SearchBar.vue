<!-- Component for displaying a row of books with arrow to navigate the row -->
<script setup>
import { ref, computed } from 'vue';

const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
  
};
const activeFilter = computed(() => {
    for (let index = 0; index < options.length; index++) 
    {
        if (options[i].isActive)
        {
        return options[i]
        }
    }
    return;
});

// let options = ["Tout", "Livres", "Auteurs", "Catégories"]
let options = [{name:"Tout", isActive: false},{name:"Livres", isActive: false},{name:"Auteurs", isActive: false},{name:"Catégories", isActive: false}]

</script>

<template>
    <div class="box">
            <form action="#">
                <div class="input_box">
                    <input type="text" placeholder="Search">
                    <div class="selection" @click="toggleActive">
                        <p>{{activeFilter}}</p><span></span>
                    </div>
                    <div class="filters" :class="{ 'active': isActive }" >
                        <p v-for="option in options" class="options">{{ option }}</p>
                    </div>
                </div>
            </form>
        </div>
    <!-- <div id="search">
        <button @click="test">test</button>
        <input type="text" placeholder="Rechercher... ">
    </div> -->
</template>

<style scoped>
.box{
    width: 600px;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
}
.box form .input_box {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
}
.box form .input_box input{
    width: 100%;
    font-size: 25px;
    padding: 10px 15px;
    border: none;
    outline: none;
}
.box form .selection{
    background-color: #000;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    border-radius: 5px;
}
.box form .selection p{
    font-size: 25px;
    color: #fff;
}
.box form .selection span{
    border-right: 5px solid #fff;
    border-bottom: 5px solid #fff;
    border-left: 5px solid #000;
    border-top: 5px solid #000;
    display: inline-block;
    rotate: 45deg;
    margin-left: 10px;
}
.box form .filters{
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
.box form .active{
    font-size: 25px;
    opacity: 1;
    pointer-events: fill;
}
.box form .filters p{
    margin: 5px 0px;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
}
.box form .filters p:hover{
    background-color: #1e1e1e;
}
/* 
    #search{
        display: flex;
        border: 1.5px solid #87772F;
        border-radius: 5px;
        width: 250px;
        height: 38px;
    }
    #search button{
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
    } */

</style>
