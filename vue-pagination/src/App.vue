<template>
  <div id="app">
    <h1>Products</h1>
    <ul>
      <li v-for="product in displayedProducts" :key="product.id">{{ product.name }}</li>
    </ul>
    <button @click="handleFirstPage" :disabled="currentPage === 1">First</button>
    <button @click="handlePrevPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }}</span>
    <button @click="handleNextPage" :disabled="currentPage === totalPages">Next</button>
    <button @click="handleLastPage" :disabled="currentPage === totalPages">Last</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      products: [
          { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' },
    { id: 7, name: 'Product 7' },
    { id: 8, name: 'Product 8' },
    { id: 9, name: 'Product 9' },
    { id: 10, name: 'Product 10' },
  ],
      currentPage: 1,
      pageSize: 3
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.pageSize);
    },
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.products.slice(startIndex, endIndex);
    }
  },
  methods: {
    handleFirstPage() {
      this.currentPage = 1;
    },
    handlePrevPage() {
      this.currentPage = Math.max(this.currentPage - 1, 1);
    },
    handleNextPage() {
      this.currentPage = Math.min(this.currentPage + 1, this.totalPages);
    },
    handleLastPage() {
      this.currentPage = this.totalPages;
    }
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
