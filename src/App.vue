<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavigation from "./components/NavigationMenu/TheNavigation.vue";
import MainHeader from "./components/MainHeader.vue";
import { useGamesStore } from "./store/store";

useGamesStore().fetchGames();
</script>

<template>
  <header>
    <MainHeader />
  </header>
  <div id="wrapper">
    <TheNavigation />
    <router-view />
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  margin-top: 0.5rem;
}
</style>
