<template>
  <div class="container">
    <section class="section">
      <h2 class="section__title">Project List</h2>

      <div class="row">
        <!-- [D] 해시태그 필터 -->
        <ul class="hashtags">
          <li v-for="(item, index) in allHashTags" :key="index" @click="clickHashEvent">{{ item }}</li>
        </ul>

        <ul class="gridlist">
          <li v-for="(item, index) in allWorkData" :key="index">
            <figure>
              <img src="https://dummyimage.com/480x480/f5f5f5/5a5aff&text=Project" alt="">
            </figure>
            <div class="gridlist__info">
              <ul class="gridlist__category">
                <li v-for="(cate, index) in setKeyWords(item.category)" :key="index">#{{ cate }}</li>
              </ul>
              <h3 class="gridlist__title">
                <a :href="item.link" target="_blank">{{ item.title }}</a>
              </h3>
              <p>{{ item.summary }}</p>
              <div class="gridlist__date">
                <strong>작업 기간:</strong>
                {{ item.start_date }} ~ {{ item.end_date }}
              </div>
              <ul class="gridlist__description">
                <li v-for="(desc, index) in item.description" :key="index">{{ desc }}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
let workData: Object[] = [];

let allWorkData = computed(() => store.state.workData.filter((item: any) => item.exposure === 1));
let allHashTags: String[] = [];
let getHashTagList = () => {
  let arr: String[] = [];
  store.state.workData.filter((item: any) => {
    if (item.exposure === 1) {
      arr.push(item.category.split(" | "));
      allHashTags = [...new Set(arr.join(",").split(","))];
    }
  })
};

getHashTagList();

const clickHashEvent = (e: any) => {
  let thisHash = e.target.textContent;
  let arr: String[] = [];

  store.state.workData.filter((item: any) => {
    if (item.exposure === 1) {
      arr.push(item.category.split(" | "));
      console.log(arr);
      // console.log(item.category.split(" | ").filter((cate: String) => cate === thisHash));
    }
  })
}

const setKeyWords = (text: String) => {
  return text.split(" | ");
}
</script>