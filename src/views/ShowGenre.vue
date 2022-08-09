<script setup lang="ts">
import { useGamesStore } from "@/store/store.js";
import { alphabeticalSort, capitalizeFirstLetter } from "@/utility/utility";
import { computed } from "vue";
import GameCard from "@/components/GameCard.vue";

const props = defineProps<{
  genre: string;
}>();

const gameStore = useGamesStore();

const gamesToShow = computed(() => {
  return gameStore.games
    .filter((game) =>
      game.info.genres.includes(capitalizeFirstLetter(props.genre))
    )
    .sort(alphabeticalSort);
});
</script>

<template>
  <div id="games-field">
    <GameCard v-for="game in gamesToShow" :key="game.id" :game="game" />
  </div>
</template>
