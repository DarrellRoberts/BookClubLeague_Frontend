
<template>
  <Navbar />
  <div class="homepageCon">
  <div class="titleCon">
    <Homepage msg="hello" />
  </div>
  <Login/>
</div>

</template>

<script setup lang="ts">
import Navbar from './components/navbar/Navbar.vue'
import Homepage from './components/Homepage.vue'
import Login from './components/login/Login.vue'
</script>

<style scoped>
.homepageCon {
  display: flex;
  height: 100vh;
  justify-content: space-evenly;
}
.titleCon {
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 800px) {
.homepageCon {
  justify-content: center;
}
}
</style>
