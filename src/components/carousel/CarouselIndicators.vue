<script setup lang="ts">
const props = defineProps<{
  total: number;
  currentindex: number;
}>();
defineEmits<{
  switch: string;
  index: number;
}>();
</script>

<template>
  <div class="carousel-indicators">
    <button
      class="carousel-indicator-item"
      :class="{ active: currentindex === index }"
      v-for="(item, index) in total"
      :key="index"
      @click="$emit('switch', index)"
    >
      {{ index }}
    </button>
  </div>
</template>

<style scoped>
.carousel-indicators {
  position: absolute;
  transform: translate(-50%);
  left: 50%;
  bottom: 3%;
  z-index: 2;
  border: none;
}
.carousel-indicator-item {
  width: 15px;
  height: 15px;
  border: none;
  color: antiquewhite;
  background-color: antiquewhite;
  opacity: 0.5;
  margin: 0.2rem;
  border-radius: 50%;
  cursor: pointer;
}

.active {
  opacity: 1;
}
</style>
