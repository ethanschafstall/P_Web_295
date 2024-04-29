<!-- Component for displaying a row of books with arrow to navigate the row -->
<script setup>
const test = () => {
    console.log("hello world");
}
</script>

<template>
    <div id="search">
        <button @click="test">test</button>
        <input type="text" placeholder="Rechercher... ">
    </div>
</template>

<style scoped>

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
    }

</style>
