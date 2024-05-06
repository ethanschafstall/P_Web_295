<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    q: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetchData() {
  try {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/http://localhost:3000/api/${this.filter}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    this.items = data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

  }
};
</script>

<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style>
</style>
