<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicators from "./CarouselIndicators.vue";

const props = defineProps<{
  slides: string[];
}>();

const currentSlide = ref(0);
const slideInterval = ref(0);
const direction = ref("right");
const slideIntervalTime = 4000;
const setCurrentSlide = (index: number) => {
  currentSlide.value = index;
};

const startSlideTimer = () => {
  //console.log("start");
  slideInterval.value = setInterval(() => {
    _next();
  }, slideIntervalTime);
};
const stopSlideTimer = () => {
  //console.log("stop");
  clearInterval(slideInterval.value);
};

function switchSlide(index: number) {
  const step = index - currentSlide.value;
  if (step > 0) {
    _next(step);
  } else {
    _prev(step);
  }
  currentSlide.value = index;
}

function _prev(step = -1) {
  const index =
    currentSlide.value > 0
      ? currentSlide.value + step
      : props.slides.length + step;
  direction.value = "left";
  setCurrentSlide(index);
}
function prev() {
  _prev();
  stopSlideTimer();
}
function _next(step = 1) {
  const index =
    currentSlide.value < props.slides.length - 1
      ? currentSlide.value + step
      : 0;
  direction.value = "right";
  setCurrentSlide(index);
}
function next() {
  _next();
  stopSlideTimer();
}

onMounted(() => {
  startSlideTimer();
});
onBeforeMount(() => {
  stopSlideTimer();
});
</script>

<template>
  <div
    class="carousel"
    @mouseenter="stopSlideTimer"
    @mouseleave="startSlideTimer"
  >
    <div class="carousel-inner">
      <CarouselIndicators
        :total="slides.length"
        :currentindex="currentSlide"
        @switch="switchSlide($event)"
      />
      <CarouselItem
        v-for="(slide, index) in slides"
        :key="`item-${index}`"
        :slide="slide"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
      />
      <CarouselControls @prev="prev" @next="next" />
      <img id="filler" src="/images/godofwar3/godofwar3-ss1.jpg" key="filler" />
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}
.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#filler {
  width: 100%;
  height: 100%;
  z-index: +100;
  opacity: 0;
}
</style>
