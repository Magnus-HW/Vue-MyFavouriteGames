<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  slide: string;
  currentSlide: number;
  index: number;
  direction: string;
}>();
// defineEmits<{
//   enter: string;
//   out: string;
// }>();
const transitionEffect = computed(() => {
  return props.direction === "right" ? "slide-out" : "slide-in";
});
</script>
<template>
  <transition :name="transitionEffect">
    <div class="carousel-item" v-show="index === currentSlide">
      <img :src="slide" />
    </div>
  </transition>
</template>

<style scope>
.carousel-item {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1.2s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>
