<template>
  <h1>CSR (Client side rendering)</h1>
  <p>Page will rendered first and data requested inside browser cleint asynchronusly</p>
  <div>
    {{ data }}
  </div>
</template>


<script setup>
  const data = new Date()
</script>

