<template>
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

    <visual-star v-for="i in 300" :key="i" :index="generateIndex(i)" ></visual-star>
  </section>
</template>

<script setup lang="ts">
import { VisualStar } from "@/components";

type GroupIndex = (idx : number) => number | undefined;

const generateIndex : GroupIndex = (idx) => {
  for (let i = 0; i < 6; i++) {
    if (idx <= 50 * (i+1) && idx > 50 * i) {

      return i+1;
    }
  }
}
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

.hythere {
  color:#fff;
  font-size:10vw;
  font-weight:bold;
  text-transform:uppercase;
  letter-spacing:.02em;
  animation: cloud 3s ease-out 0.3s infinite alternate;
  &--stroke {
    color:transparent;
    text-align:end;
    -webkit-text-stroke:1px #fff;
    animation:none;
    // animation: cloud02 3s ease-out 0.3s infinite alternate;
  }
}

// animation
@keyframes wave{
  0%{
    background-position-x: 0px; 
  }
  100%{
    background-position-x: 1000px; 
  }
}

@keyframes wave2{
  0%{
    background-position-x: 0px; 
  }
  100%{
    background-position-x: -1000px; 
  }
}

@keyframes cloud {
  0% {
    transform:translateX(20px);
  }
  50% {
    transform:translateX(0px);
  }
  100% {
    transform:translateX(20px);
  }
}

@keyframes cloud02 {
  0% {
    transform:translateX(-20px);
  }
  50% {
    transform:translateX(0px);
  }
  100% {
    transform:translateX(-20px);
  }
}

@media screen and (max-width:1440px) {
  .hythere {
    font-size: 6vw;
  }
}

@media screen and (max-width:1025px) {
  .hythere {
    font-size: 60px;
  }
}

@media screen and (max-width:769px) {
  .hythere {
    animation: none;
    padding-inline: 20px;

    &--stroke {
      padding-block-start: 6vh;
    }
  }
}
</style>
