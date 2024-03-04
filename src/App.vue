<template>
  <Navbar />
  <div class="homepageCon">
  <div class="titleCon">
    <router-view></router-view>
  </div>
  <Login/>
</div>
</template>

<script setup lang="ts">
import "./style.css"
import Navbar from './components/navbar/Navbar.vue'
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
