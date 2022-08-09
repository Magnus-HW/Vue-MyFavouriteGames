<script setup lang="ts">
import { useGamesStore } from "@/store/store.js";
import { computed, onActivated, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const genres = useGamesStore().genres; //array of genres

const showMenu = ref(false);
const menuHeight = ref("0");

//calculate the height of the drop down menu
onActivated(() => {
  //el will always exist
  const el: any = document.getElementById("selected");
  const styles = window.getComputedStyle(el);
  const elHeight =
    el.offsetHeight +
    parseFloat(styles["paddingTop"]) +
    parseFloat(styles["paddingBottom"]);
  menuHeight.value = el ? `${elHeight * genres.length - 1}px` : "0";
  console.log(menuHeight.value);
});

const selectedItem = computed(() => {
  const pathGenre = route.fullPath.match(/\/(.*?)(\/|$)/);
  return pathGenre ? pathGenre[1] : "undefined";
});
</script>

<template>
  <div class="nav dropdown" id="nav-to-hide">
    <div id="selected" @click="() => (showMenu = !showMenu)">
      Selected {{ selectedItem }}
    </div>

    <Transition name="dropdown" @click="showMenu = false">
      <div id="options" v-if="showMenu">
        <RouterLink
          :to="{ name: 'Home' }"
          key="Home"
          v-show="selectedItem !== 'Home'"
          >Home
        </RouterLink>
        <RouterLink
          v-for="genre in genres"
          :key="genre"
          :to="{
            name: 'genre.show',
            params: {
              genre: genre,
            },
          }"
          v-show="selectedItem !== `${genre}`"
          >{{ genre }}</RouterLink
        >
      </div>
    </Transition>
  </div>
</template>

<style>
.nav.dropdown {
  position: relative;
}
.nav.dropdown #options * {
  border-bottom: 1px solid;
}

#options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  overflow: hidden;
}
#selected,
#options a,
#selected a {
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 1.6rem;
  padding: 0.5rem;
  border-bottom: 1px solid;
  padding: 0.5rem;
  text-align: center;
}

.dropdown-enter-active {
  transition: all 1s;
  max-height: v-bind(menuHeight);
}

.dropdown-leave-active {
  transition: all 1s;
  max-height: v-bind(menuHeight);
}

.dropdown-enter-from,
.dropdown-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
