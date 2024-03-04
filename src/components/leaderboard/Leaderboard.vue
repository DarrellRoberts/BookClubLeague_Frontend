<template>
<div class="leaderTitle">
    <h1>Leaderboard</h1>
    <LeaderboardTable />
</div>
</template>

<script setup>
import LeaderboardTable from "./LeaderboardTable.vue";
</script>

<style>
.leaderTitle {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
}
.leaderTitle h1 {
  color: var(--mainTextColor);
  padding: 0px;
  margin-left: 5rem;
  margin-top: 5rem;
  font-size: 8rem;
  line-height: 8rem;
  text-shadow: 10px 0px 0px black;
  letter-spacing: 5px;
}
@media screen and (max-width: 800px) {
  .leaderTitle h1 {
    font-size: 3rem;
    line-height: 3rem;
    margin-top: 1rem;
    margin-left: 2rem;
    text-shadow: 1px 1px 0px black;
  }
}
</style>