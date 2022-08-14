<script setup lang="ts">
import type { IGame } from "@/types.js";
import { pickOutImagesFolderName } from "@/utility/utility.js";

const props = defineProps<{ game: IGame }>();
const folderName = pickOutImagesFolderName(props.game.poster);
</script>

<template>
  <RouterLink
    class="game-card"
    :to="{
      name: 'game.details',
      params: {
        genre: game.info.genres[0],
        id: game.id,
        title: game.title.replace(/\s/g, ''),
      },
    }"
  >
    <div class="poster-wrap">
      <img
        :src="`/images/${folderName}/${props.game.poster}`"
        :alt="props.game.poster"
      />
    </div>
  </RouterLink>
</template>

<style scoped>
.game-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.poster-wrap {
  height: 100%;
}
img {
  height: 100%;
  width: 100%;
}
</style>
