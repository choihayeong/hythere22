<template>
  <main 
    ref="main" 
    id="main" 
    class="main"
  >
    <!-- VISUAL -->
    <visual-section></visual-section>
    <!-- // -->

    <!-- CAREERS -->
    <career-section></career-section>
    <!-- // -->

    <!-- STRENGTH -->
    <strength-section ref="strengthContent"></strength-section>
    <!-- // -->

    <!-- PROJECTS -->
    <projects-section></projects-section>
    <!-- // -->
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { VisualSection, CareerSection, StrengthSection, ProjectsSection } from "@/components";

// const main = ref(null);
// const strengthContent = ref(null);

const scrollY = ref(0);

const changeBgColor = () => {
  let scTop = window.pageYOffset;

  const main = document.querySelector('#main') as HTMLElement;
  const strengthContent = document.querySelector('.strength') as HTMLElement;

  if (strengthContent !== null) {
    if (scTop > (strengthContent.offsetTop - 150)) {
      main.classList.add('black');
    } else {
      main.classList.remove('black');
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', changeBgColor);
});
onBeforeUnmount(() => {
  window.addEventListener("scroll", changeBgColor);
});
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables";
@import "@/assets/sass/mixin";
</style>
