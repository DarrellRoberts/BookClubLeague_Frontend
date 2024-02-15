<script setup lang="ts">
import { ref } from 'vue'
const count = ref(1000)
</script>

<template>
  <div class="loginCon">
    <button type="button" @click="count+= 1000">Login</button>
  </div>
</template>

<style scoped>
.loginCon {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 1rem;
}
@media screen and (max-width: 800px) {
  .loginCon {
  margin: 5px 0px 5px 5px;
  position: absolute;
  left: 70%;
}
}
</style>
