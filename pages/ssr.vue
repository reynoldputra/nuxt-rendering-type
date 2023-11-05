<template>
  <h1>SSR (Server side rendering)</h1>
  <p>Request data in server -> render page -> sent to client</p>
  <div>
    {{ res.data }}
  </div>
</template>


<script setup>
  // request is execute before page sent
  const res = await useAsyncData(async () => {
    console.log(new Date())
    return new Promise((resolve) => {
      setTimeout(() => {
        const date = new Date();
        resolve(date);
      }, 5000);
    });
  })
</script>
