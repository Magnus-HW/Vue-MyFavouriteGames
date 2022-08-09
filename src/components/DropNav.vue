<script setup lang="ts">
import { useGamesStore } from "@/store/store.js";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const genres = useGamesStore().genres; //array of genres

const showMenu = ref(false);
const menuHeight = ref("0");

//calculate the height of the drop down menu
onMounted(() => {
  //el will always exist
  const el: any = document.getElementById("selected");
  const styles = window.getComputedStyle(el);
  const elHeight =
    el.offsetHeight +
    parseFloat(styles["paddingTop"]) +
    parseFloat(styles["paddingBottom"]);
  menuHeight.value = el ? `${elHeight * genres.length - 1}px` : "0";
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
#selected {
  border-bottom: 1px solid;
  padding: 0.5rem;
  text-align: center;
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
}

.dropdown-enter-active {
  transition: all 1s;
  /* max-height: 1000px; */
  max-height: v-bind(menuHeight);
}

.dropdown-leave-active {
  transition: all 1s;
  /* max-height: 1000px; */
  max-height: v-bind(menuHeight);
}
/* .dropdown-leave-from,
.dropdown-enter-to {
  background-color: black;
} */
.dropdown-enter-from,
.dropdown-leave-to {
  overflow: hidden;
  max-height: 0;
  /* background-color: aquamarine; */
  /* opacity: 0; */
}
</style>
