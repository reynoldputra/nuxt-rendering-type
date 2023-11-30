<template>
  <a href="/product/csr">Back</a>
  <p v-if="product == null">Fetching data on client ...</p>
  <h3>{{ product?.title || "" }}</h3>
  <p>{{ product?.description || "" }}</p>
</template>

<script setup>
import axios from 'axios';

const product = ref(null)

// get router information
const route = useRoute()

onMounted(async () => {
  console.log(route)
  const { data } = await axios.get("https://fakestoreapi.com/products/" + route.params.id)
  product.value = data
}) 
</script>

