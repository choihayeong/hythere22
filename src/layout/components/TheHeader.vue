<template>
  <header
    ref="appHeader"
    id="header"
    class="header"
    :class="{ on: scrollY > 200 }"
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
          <a href="https://my.surfit.io/w/1146355103" target="_blank"
            >resume(surfit)</a
          >
          <a
            href="https://www.linkedin.com/in/hayeong-choi-85b7b2183/"
            target="_blank"
            >linkedin</a
          >
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
};

onMounted(() => {
  window.addEventListener("scroll", changeHeader);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", changeHeader);
});
</script>

<style lang="scss" scoped>
// header
.header {
  position: fixed;
  left: 30px;
  bottom: 210px;
  z-index: 50;
  color: #fff;
  // transition:all 0.4s ease-out;

  &.on {
    left: auto;
    right: 60px;
    bottom: 30px;
    color: #1f2c37;
    .header__links {
      color: #5a5aff;
    }
    .header__button {
      display: block;
      &.active {
        display: none;
      }
    }
    .header__contents {
      display: none;
      &.active {
        display: block;
      }
    }
  }

  &__inner {
    padding: 30px;
    border-radius: 10px;
  }

  &__button {
    display: none;
    width: 60px;
    height: 60px;
    background: url("@/assets/images/img_minesweeper.png") no-repeat;
    border-radius: 50%;
    background-size: cover;
  }

  &__links {
    display: flex;
    gap: 10px;
    color: #fff689;
  }

  &__info {
    margin-top: 30px;
    & > li {
      & ~ li {
        margin-top: 5px;
      }
    }
  }
}

@media screen and (max-width: 769px) {
  .header.on {
    right: 0;
    bottom: 20px;
  }
}
</style>
