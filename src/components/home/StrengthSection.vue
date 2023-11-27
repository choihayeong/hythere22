<template>
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
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables";

// strength 
.strength {
  &__list {
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    margin-top:calc(60px + 42px);
    & > li {
      position:relative;
      flex:1;
      border:2px solid #5a5aff;
      border-radius:25px;
    }
  }
  &__tag {
    display:flex;
    flex-wrap:wrap;
    gap:15px;
    justify-content:center;
    margin-top:30px;
    > li {
      padding:5px 10px;
      border:2px solid #1F2C37;
      border-radius:8px;
      font-weight:bold;
    }
  }
  &__title {
    position:absolute;
    top:-42px;
    left:-16px;
    display:inline-block;
    padding:10px 15px;
    border:2px solid #5a5aff;
    background-color:#fff;
    font-size:24px;
    font-weight:bold;
    transform:rotate(-15deg);
    z-index: 10;
  }
  &__content {
    position:relative;
    padding:30px;
  }
}

@media screen and (max-width:769px) {
  .strength__list {
    flex-wrap: nowrap;
    flex-direction: column;
  }
}
</style>