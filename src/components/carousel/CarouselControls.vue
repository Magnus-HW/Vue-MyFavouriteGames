<script setup lang="ts">
defineEmits<{
  prev: string;
  next: string;
}>();
</script>
<template>
  <div>
    <button class="carousel-contol left" @click="$emit('prev')">Prev</button>
    <button class="carousel-contol right" @click="$emit('next')">Next</button>
  </div>
</template>
<style scoped>
.carousel-contol {
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  display: inline-block;
  position: absolute;
  height: 100%;
  width: 70px;
  color: whitesmoke;
  cursor: pointer;
  z-index: 1;
}
.carousel-contol.right {
  right: 0;
}
.carousel-contol.left {
  left: 0;
}
</style>
