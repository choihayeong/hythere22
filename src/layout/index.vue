<template>
  <div id="wrap" class="wrap">
    <!-- the-header></the-header -->
    <transition name="fade-transform">
      <router-view v-bind:key="key"></router-view>
    </transition>
    <the-footer></the-footer>
  </div>
</template>

<script setup>
import { onBeforeMount, computed } from "vue";
import { useRoute } from "vue-router";
import { TheHeader, TheFooter } from "./components";

const route = useRoute();
const key = computed(() => route.path);

onBeforeMount(() => (document.title = route.meta.title));
</script>
