<template>
  <h1>SSG (Static side generation)</h1>
  <div>
    {{ res.data }}
  </div>
</template>


<script setup>
  // request is execute in build time
  // run as ssr when development
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
