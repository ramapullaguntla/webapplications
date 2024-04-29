<template>
  <div>
    <button @click="handleFirstPage" :disabled="currentPage === 1">First</button>
    <button @click="handlePrevPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }}</span>
    <button @click="handleNextPage" :disabled="currentPage === totalPages">Next</button>
    <button @click="handleLastPage" :disabled="currentPage === totalPages">Last</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    handleFirstPage: Function,
    handlePrevPage: Function,
    handleNextPage: Function,
    handleLastPage: Function
  }
};
</script>
