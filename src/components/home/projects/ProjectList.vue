<template>
  <ul class="projects-list">
    <li v-for="(item, index) in workData" :key="index">
      <a :href="item.link" target="_blank">
        <span class="projects-list__title">
          {{ item.title }}
        </span>
        <span class="projects-list__summary">
          {{ item.summary }}
        </span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

let workData = computed(() =>
  store.state.workData.filter((item: any) => item.exposure === 1),
);
</script>

<style lang="scss">
@import "@/assets/sass/variables";
@import "@/assets/sass/mixin";

// projects
.projects-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  > li {
    position: relative;
    padding: 15px 0;
    cursor: pointer;
    @include transition();

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 1px;
      background-color: $pointColor2;
      @include transition();
    }

    &:hover {
      &::after {
        left: 0;
        width: 100%;
      }

      .projects-list__title {
        color: $pointColor;
      }
    }
  }

  &__title {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
  }

  &__summary {
    display: block;
  }
}

@media screen and (max-width: 769px) {
  .projects-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
