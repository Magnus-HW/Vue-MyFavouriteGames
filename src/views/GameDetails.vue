<script setup lang="ts">
import { useGamesStore } from "@/store/store.js";
import { imagesFolderName } from "@/utility/utility.js";
import CarouselApp from "../components/carousel/CarouselApp.vue";

const props = defineProps<{
  id: number;
}>();

const gameStore = useGamesStore();
const theGame = gameStore.games.find((game) => game.id === props.id);

const imagesFolder = imagesFolderName(theGame?.poster as string) as string;

const title = theGame?.title;
const poster = theGame?.poster;
const genres = theGame?.info.genres;
const developer = theGame?.info.developer;
const releaseDate = theGame?.info.released;
const description = theGame?.info.description;
const shortPlot = theGame?.info.shortPlot;
const images = theGame?.images as string[];
</script>
<template>
  <div class="game-details">
    <div id="game-info" v-if="theGame">
      <div class="poster-wrap">
        <img
          :src="`/images/${imagesFolder}/${poster}`"
          :alt="`${title} poster`"
        />
      </div>

      <div class="info">
        <p><b>Title: </b> {{ title }}</p>
        <p>
          <b>Genre: </b>
          <span v-for="genre in genres" :key="genre">{{ genre }}</span>
        </p>
        <p><b>Released date: </b> {{ releaseDate }}</p>
        <p><b>Developer: </b> {{ developer }}</p>
      </div>

      <div class="game-description intend">
        {{ description }}
      </div>

      <div class="short-plot" v-if="theGame.info.shortPlot !== ''">
        <h3>Краткий сюжет</h3>
        <div class="drop-plot intend">{{ shortPlot }}</div>
      </div>

      <CarouselApp :imagesFolder="imagesFolder" :images="images" />
    </div>

    <div v-else id="notfound">
      <h3>Sry, there is some error</h3>
    </div>
  </div>
</template>
<style scoped>
/*Layout */

#game-info {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
}
.info {
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.game-description,
.short-plot {
  margin: 0.5rem 0;
  font-size: 1rem;
  display: block;
}
/* text styling*/
h3 {
  text-align: center;
  margin-bottom: 0.4rem;
}
.intend {
  text-indent: 2rem;
}
/*Img wrapper*/
.poster-wrap {
  flex: 1;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
</style>
