<!-- src/components/ProductList.vue -->
<template>
    <div>
      <h1>Products</h1>
      <ul>
        <li v-for="product in displayedProducts" :key="product.id">{{ product.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      displayedProducts: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  