<template>
  <div class="homeTitle">
    <h1>Book</h1>
    <h1>Club</h1>
    <h1>League</h1>     
  </div>

<HomepageGrid></HomepageGrid>
</template>

<script setup lang="ts">

import HomepageGrid from "./HomepageGrid.vue"
</script>

<style scoped>
.homeTitle {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
}
.homeTitle h1 {
  padding: 0px;
  margin: 0px;
  font-size: 5rem;
}
@media screen and (max-width: 800px) {
  .homeTitle h1 {
    font-size: 3rem;
    margin-top: 1rem;
    margin-left: 2rem;
  }
}
</style>
