<template>
  <a href="/product">Back</a>
  <h1>Product with CSR</h1>

  <div style="margin-top: 20px">
    <div v-if="products == null">Fetching data on client ...</div>
    <div v-for="(product, idx) in products" :key="idx">
      <h5>{{ product.title }}</h5>
      <a :href="'/product/csr/' + product.id">
        <p>Open csr</p>
      </a>
      <hr />
    </div>
  </div>
</template>


<script setup>
import axios from 'axios';

const products = ref(null)

onMounted(async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products")
  products.value = data
}) 
</script>

