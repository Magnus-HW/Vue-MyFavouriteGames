<script setup lang="ts">
const props = defineProps<{
  genres: string[];
}>();
</script>
<template>
  <div class="nav list">
    <RouterLink :to="{ name: 'genre.show', params: { genre: 'All' } }"
      >All</RouterLink
    >
    <RouterLink
      v-for="genre in genres"
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
  transition: all 0.4s, color 0.4s;
  text-decoration: none;
  font-size: 1.6rem;
}
a:hover {
  border-left: 8px solid #cc537b;
}
.router-link-exact-active {
  border-left: 8px solid #cc537b;
}
</style>
