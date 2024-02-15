<template>
  <section class="homepageGrid">
    <div class="homepageGridItem">1</div>
    <div class="homepageGridItem">2</div>
    <div class="homepageGridItem">3</div>
    <div class="homepageGridItem">4</div>
    <div class="homepageGridItem">5</div>
    <div class="homepageGridItem">6</div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.homepageGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 3rem;
}
.homepageGridItem {
  width: 15rem;
  height: 10rem;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  background-color: grey;
}

@media screen and (max-width: 800px) {
  .homepageGrid {
    /* display: flex;
    flex-direction: column; */
    grid-template-columns: 1fr 1fr;
    margin-left: 2rem;
  }
  .homepageGridItem {
    width: 8rem;
    height: 7rem;
  }
}
</style>
