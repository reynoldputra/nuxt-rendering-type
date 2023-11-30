<template>
  <a href="/product">Back</a>
  <h1>Product with SSG</h1>

  <div style="margin-top: 20px">
    <div v-for="(product, idx) in products" :key="idx">
      <h5>{{ product.title }}</h5>
      <a :href="'/product/ssg/' + product.id">
        <p>Open ssg</p>
      </a>
      <hr />
    </div>
  </div>
</template>


<script setup>
import axios from 'axios';

const { data } = await useAsyncData(async () => {
  const res = await axios.get("https://fakestoreapi.com/products")
  return res.data
})

const products = data

</script>

