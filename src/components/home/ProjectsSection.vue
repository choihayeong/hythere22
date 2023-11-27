<template>
  <section class="main-section main-section--projects">
    <h2 class="main__title">Projects</h2>
    <div class="projects-inner">
      <project-list></project-list>
      <div class="projects-bg">
        <!-- <router-link :to="`/projects/list`">
        Detail
        </router-link> -->
        <a href="https://my.surfit.io/w/1146355103" target="_blank">
          Detail
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ProjectList } from "@/components";

</script>

<style lang="scss" scoped>
// projects
.projects-inner {
  position: relative;
}

.projects-bg {
  text-align: center;
  font-size: 12vw;
  text-transform: uppercase;
  font-weight: bold;
  
  a {
    display:block;
    opacity: 0.2;
  }
}

@media screen and (max-width:1440px) {
  .projects-inner {
    padding-inline: 20px;
  }
}

@media screen and (max-width:769px) {
  .main-section--projects {
    padding-block: 120px;
  }
}
</style>