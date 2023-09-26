<template>
  <main id="main" class="main">
    <!-- VISUAL -->
    <section ref="visual" class="main-section main-section--visual visual">
      <div class = "light"></div>
      <div class="air air--01"></div>
      <div class="air air--02"></div>
      <div class="air air--03"></div>
      <div class="air air--04"></div>
      <h1 class="hythere">Hythere!</h1>
      <div class="hythere hythere--stroke">
        choi <br>
        hayeong
      </div>
    </section>
    <!-- // -->
    <!-- CAREERS -->
    <section class="main-section main-section--careers careers">
      <h2 class="main__title">Careers</h2>
      <!-- timeline -->
      <div class="row">
        <time-line></time-line>
      </div>
      <!-- // -->
    </section>
    <!-- // -->
    <!-- STRENGTH -->
    <section class="main-section main-section--strength strength">
      <h2 class="main__title">Strength</h2>
      <div class="row">
        <ul class="strength__tag">
          <li>vue.js</li>
          <li>javascript</li>
          <li>scss</li>
          <li>html5</li>
          <li>css3</li>
          <li>webpack</li>
          <li>gulp</li>
          <li>React(Create React App)</li>
          <li>BootStrap</li>
          <li>Python3</li>
          <li>Flask</li>
          <li>typescript</li>
        </ul>
        <ul class="strength__list">
          <li>
            <h3 class="strength__title">Javascript</h3>
            <div class="strength__content"> 
              * ES6+(ES2015) 문법에 익숙합니다. <br> 
              * gulp 및 webpack를 사용한 빌드도구 및 프로젝트 협업에 익숙합니다. <br> 
              * babel 등의 트랜스파일러를 사용할 수 있습니다. <br> 
              * typescript를 사용할 수 있습니다. 
            </div>
          </li>
          <li>
            <h3 class="strength__title">vue.js</h3>
            <div class="strength__content"> 
              * Options API를 이용한 vue2 문법과 Composition API를 이용한 vue3 문법 모두 활용할 수 있습니다. <br> 
              * vuex 및 axios를 활용하여 자원의 상태관리 및 api 데이터를 불러오는 작업에 대한 경험이 있습니다. <br> 
              * vue-router를 사용하여 SPA(single page application)에 대한 이해와 적용이 가능합니다. 
            </div>
          </li>
          <li>
            <h3 class="strength__title">html5/css3</h3>
            <div class="strength__content"> 
              * 웹표준을 지키려 노력합니다. <br> 
              * 반응형/적응형 구현이 가능합니다. <br> 
              * SCSS 문법에 익숙합니다. <br> 
              * BEM 방법론을 사용하여 css를 적용합니다. <br> 
              * 크로스 브라우징에 대응할 수 있습니다. <br> 
              * css3 flexbox와 grid를 활용할 수 있습니다. <br> 
              * keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다. <br> 
              * bootstrap(v.5) 사용 경험이 있습니다. 
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- // -->
    <!-- projects -->
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
    <!-- // -->
  </main>
</template>

<script setup>
import { defineComponent, onMounted, ref, reactive, onBeforeUnmount } from "vue";
import { TimeLine, ProjectList } from "@/components";

const visual = ref(null);

const sizes = ref([1,1,2,3,4]);

//get random position between 1 - 100;
const randomPosition = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateStars = () => {
  // const visual = document.querySelector(".visual");

  for (let i = 0; i < 300; i++) {
    const top = randomPosition(1,100);
    const left = randomPosition(1,100);
    const random = Math.floor(Math.random() * sizes.value.length);
    const randomSize = sizes.value[random];
    const div = document.createElement('div');

    div.style.position = 'absolute';
    div.style.top = top +'%';
    div.style.left = left + '%';
    div.style.height = randomSize +'px';
    div.style.width = randomSize +'px';
    div.style.backgroundColor = "#FFFFFF";
    div.style.borderRadius = '50%';

    if (i <= 50) {
      div.classList.add('star1');
    }
    if (i <= 100 && i > 50) {
      div.classList.add('star2');
    }
    if (i <= 150 && i > 100) {
      div.classList.add('star3');
    }
    if (i <= 200 && i > 150) {
      div.classList.add('star4');
    }
    if (i <= 250 && i > 200) {
      div.classList.add('star5');
    }
    if (i <= 300 && i > 250) {
      div.classList.add('star6');
    }

    // if (visual !== null) {
    //   visual.appendChild(div);
    // }
  }
}

const changeBgColor = () => {
  let scTop = window.pageYOffset;
  const body = document.querySelector('body'), strengthContent = document.querySelector('.strength');

  if (strengthContent !== null) {
    if (scTop > (strengthContent.offsetTop - 150)) {
      body.classList.add('black');
    } else {
      body.classList.remove('black');
    }
  }
}

onMounted(() => {
  generateStars();
  window.addEventListener('scroll', changeBgColor);
});
onBeforeUnmount(() => {
  window.addEventListener("scroll", changeBgColor);
})

</script>

<style lang="scss" scoped>
.air {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png);
  background-size: 1000px 100px;
  &--01 {
    animation: wave 30s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: 0;
  }
  &--02 {
    animation: wave2 15s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }
  &--03 {
    animation: wave 30s linear infinite;
    z-index: 998;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15px;
  }
  &--04 {
    animation: wave2 5s linear infinite;
    z-index: 997;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 20px;
  }
}
.light {
  position:absolute;
  top: 0;
  left:0;
  height: 100%;
  width: 100%;
  &:after, &:before {
    content: "";
    display: block;
    position: absolute;
  }
  &:before {
    width: 120%;
    height: 120%;
    top: 40%;
    left: -25%;
    background: radial-gradient(48.58% 48.58% at 49.96% 59.07%, #5a5aff 0%, rgba(142, 133, 190, 0.4) 43.23%, rgba(59, 61, 70, 0) 100%);
  }
  &:after {
    width: 120%;
    height: 100%;
    top: 65%;
    left: 25%;
    background: radial-gradient(48.58% 48.58% at 49.96% 59.07%, #FFF689 0%, rgba(180, 174, 113, 0.45) 38.02%, rgba(59, 61, 70, 0) 100%);
  }
}
</style>