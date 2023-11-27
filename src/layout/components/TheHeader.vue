<template>
  <header 
    ref="appHeader" 
    id="header" 
    class="header"
    :class="{ 'on' : scrollY > 200 }"
  >
    <div class="header__inner">
      <button 
        type="button" 
        class="header__button" 
        @click="buttonClickEvent"
      ></button>
      <div ref="headerContents" class="header__contents">
        <nav class="header__links">
          <a href="https://github.com/choihayeong" target="_blank">github</a>
          <a href="https://my.surfit.io/w/1146355103" target="_blank">resume(surfit)</a>
          <a href="https://www.linkedin.com/in/hayeong-choi-85b7b2183/" target="_blank">linkedin</a>
        </nav>
        <ul class="header__info">
          <li>
            <span>FE Developer / UI Developer</span>
          </li>
          <li>
            <span>Email:</span> 
            hychoi318@gmail.com
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted } from "vue";

const scrollY = ref(0);

const appHeader = ref(null);
const headerContents = ref(null);

const buttonClickEvent = (ele: any) => {
  const target = ele.target;

  // console.log(target);
};

const changeHeader = () => {
  let scTop = window.pageYOffset;

  scrollY.value = scTop;
}

onMounted(() => {
  window.addEventListener("scroll", changeHeader);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", changeHeader);
});
</script>
