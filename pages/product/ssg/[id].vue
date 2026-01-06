<template>
  <a href="/product/ssg">Back</a>
  <h3>{{ product?.title || "" }}</h3>
  <p>{{ product?.description || "" }}</p>
</template>

<script setup>
import axios from 'axios';

const route = useRoute()
const { data } = await useAsyncData(async () => {
  const res = await axios.get("https://api.escuelajs.co/api/v1/products/" + route.params.id )
  return res.data
})

const product = data
</script>

