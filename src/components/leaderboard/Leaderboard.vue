<template>
<div v-if="jsonData">
    <div v-for="dd in jsonData" :key="dd.id">
        <h1>{{dd?.title}}</h1>
    </div>
</div>
<div v-else>
    Loading...
</div>
</template>

<script setup>
import {ref, onMounted} from "vue";

const jsonData = ref(null)

const fetchData = async () => {
    try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();
    jsonData.value = data;
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    fetchData();
})
</script>

<style>
</style>