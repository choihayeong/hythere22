<template>
  <div class="star" :style="starStyles" :class="`star--${props.index}`"></div>
</template>

<script setup lang="ts">
import { ref, computed, CSSProperties } from "vue";

const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
});

const sizes = ref([1, 1, 2, 3, 4]);

//get random position between 1 - 100;
type RandomCoord = (min: number, max: number) => number;
const randomPosition: RandomCoord = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const starStyles = computed(() => {
  const top = randomPosition(1, 100);
  const left = randomPosition(1, 100);
  const random = Math.floor(Math.random() * sizes.value.length);
  const randomSize = sizes.value[random];

  const result: CSSProperties = {
    "--star-left": `${left}%`,
    "--star-top": `${top}%`,
    "--star-size": `${randomSize}px`,
  };

  return result;
});
</script>

<style lang="scss" scoped>
.star {
  position: absolute;
  top: var(--star-top);
  left: var(--star-left);
  width: var(--star-size);
  height: var(--star-size);
  border-radius: 50%;
  background: #fff;

  &--1 {
    animation: 3s linear 1s infinite alternate twinkle;
  }
  &--2 {
    animation: 4s linear 0s infinite alternate twinkle;
  }
  &--3 {
    animation: 3.5s linear 0.5s infinite alternate twinkle;
  }
  &--4 {
    animation: 1.25s linear 1.5s infinite alternate twinkle;
  }
  &--5 {
    animation: 4s linear 2s infinite alternate twinkle;
  }
  &--6 {
    animation: 2.5s linear 1s infinite alternate twinkle;
  }
}

// animation
@keyframes twinkle {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
