<script setup lang="ts">
</script>

<template>
  <div class="loginCon">
    <button type="button">Login</button>
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
.loginCon button {
  background-color: black;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}
@media screen and (max-width: 800px) {
  .loginCon {
  margin: 5px 0px 5px 5px;
  position: absolute;
  left: 70%;
}
}
</style>
