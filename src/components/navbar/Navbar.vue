<template>
    <div @click=turnFull v-if=showFull class=navbarFull >
        <h2>this way</h2>
    </div>
    <div ref="myDiv" @click=turnFull  v-else class=navbarCon >
        <h2>>>></h2>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showFull = ref(false);
const turnFull = () => {
    showFull.value = !showFull.value;}
</script>

<style>
.navbarCon {
    display: flex;
    position: absolute;
    background-color: black;
    height: 100%;
    width: 3%;
    animation: swipeIn 0.5s cubic-bezier(0.9, 0.82, 0.165, 1) 0s 1;
    cursor: pointer;
}
.navbarFull {
    display: flex;
    position: absolute;
    background-color: black;
    height: 100%;
    width: 50%; 
    animation: swipeOut 0.5s cubic-bezier(0.9, 0.82, 0.165, 1) 0s 1;
    cursor: pointer;
}
@keyframes swipeOut {
    0%  {width: 3%};
    100%  {width: 50%};
}
@keyframes swipeIn {
    0%  {width: 50%};
    100%  {width: 3%};
}
</style>


