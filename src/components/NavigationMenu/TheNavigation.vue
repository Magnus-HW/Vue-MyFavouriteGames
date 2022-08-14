<script setup lang="ts">
import { useGamesStore } from "@/store/store.js";
import DropNav from "@/components/NavigationMenu/DropNav.vue";
import { onMounted, ref } from "vue";
import ListNav from "./ListNav.vue";

const genres = useGamesStore().genres;
const showDropNav = ref(false);

onMounted(() => {
  window.addEventListener("resize", myEventHandler);
});

function myEventHandler() {
  if (window.innerWidth < 620) {
    showDropNav.value = true;
  } else {
    showDropNav.value = false;
  }
}
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
    <KeepAlive>
      <ListNav :genres="genres" v-if="!showDropNav" />
      <DropNav v-else />
    </KeepAlive>
  </nav>
</template>
