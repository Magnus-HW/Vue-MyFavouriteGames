<script setup lang="ts">
import { useGamesStore } from "@/store/store.js";
import GameCard from "@/components/GameCard.vue";
const gamesStore = useGamesStore();
</script>

<template>
  <div id="games-field">
    <GameCard v-for="game in gamesStore.games" :key="game.id" :game="game" />
  </div>
</template>

<style></style>
