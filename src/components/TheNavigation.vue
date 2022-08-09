<script setup lang="ts">
import { useGamesStore } from "@/store/store.js";
import DropNav from "@/components/DropNav.vue";

const genreState = useGamesStore().genres;

// const showDropMenu = ref(false);
// watch(showDropMenu, () => {
//   console.log(showDropMenu.value);
// });
// onMounted(() => {
//   window.addEventListener("resize", () => {
//     if (window.innerWidth < 650) {
//       showDropMenu.value = true;
//     } else {
//       showDropMenu.value = false;
//     }
//   });
// });
</script>

<template>
  <nav id="nav">
    <div class="nav list">
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      <RouterLink
        v-for="genre in genreState"
        :key="genre"
        :to="{
          name: 'genre.show',
          params: {
            genre: genre,
          },
        }"
        >{{ genre }}</RouterLink
      >
    </div>
    <DropNav />
  </nav>
</template>

<style scoped>
.nav {
  margin-bottom: 1rem;
}
.nav.list {
  text-align: center;
  margin-right: 1rem;
}
.nav.list a {
  padding: 0.5rem;
  border-bottom: 1px solid;
}
a {
  text-decoration: none;
  font-size: 1.6rem;
}
/* #select-nav {
  display: none;
} */
</style>
