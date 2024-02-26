<template>
  <div class="homeTitle">
    <h1>BOOK</h1>
    <h1>CLUB</h1>
    <h1>LEAGUE</h1>     
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
  font-size: 8rem;
  line-height: 8rem;
  text-shadow: 2px 2px 0px white;
}
@media screen and (max-width: 800px) {
  .homeTitle h1 {
    font-size: 3rem;
    line-height: 3rem;
    margin-top: 1rem;
    margin-left: 2rem;
    text-shadow: 1px 1px 0px white;
  }
}
</style>
