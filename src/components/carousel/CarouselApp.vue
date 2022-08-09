<script setup lang="ts">
import { computed } from "vue";
import CarouselMain from "./CarouselMain.vue";

const props = defineProps<{
  imagesFolder: string;
  images: string[];
}>();

const slides = computed(() => {
  return props.images.map(
    (image: string) => `/images/${props.imagesFolder}/${image}`
  );
});
</script>

<template>
  <CarouselMain :slides="slides" />
</template>
