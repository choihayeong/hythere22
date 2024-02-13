<template>
  <div class="container">
    <section class="section">
      <h2 class="section__title">Project List</h2>

      <div class="row">
        <!-- [D] 해시태그 필터 -->
        <ul class="hashtags">
          <li
            v-for="(item, index) in allHashTags"
            :key="index"
            @click="clickHashEvent"
          >
            {{ item }}
          </li>
        </ul>

        <ul class="gridlist">
          <li v-for="(item, index) in allWorkData" :key="index">
            <figure>
              <img
                src="https://dummyimage.com/480x480/f5f5f5/5a5aff&text=Project"
                alt=""
              />
            </figure>
            <div class="gridlist__info">
              <ul class="gridlist__category">
                <li
                  v-for="(cate, index) in setKeyWords(item.category)"
                  :key="index"
                >
                  #{{ cate }}
                </li>
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
                <li v-for="(desc, index) in item.description" :key="index">
                  {{ desc }}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
let workData: Object[] = [];

let allWorkData = computed(() =>
  store.state.workData.filter((item: any) => item.exposure === 1),
);
let allHashTags: String[] = [];
let getHashTagList = () => {
  let arr: String[] = [];
  store.state.workData.filter((item: any) => {
    if (item.exposure === 1) {
      arr.push(item.category.split(" | "));
      allHashTags = [...new Set(arr.join(",").split(","))];
    }
  });
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
  });
};

const setKeyWords = (text: String) => {
  return text.split(" | ");
};
</script>

<style lang="scss" scoped>
// gridlist
.gridlist {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  grid-row-gap: 60px;
  figure {
    img {
      width: 100%;
      max-width: 100%;
    }
  }
  &__info {
    margin-top: 30px;
    padding: 0 10px;
  }
  &__category {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    // margin-top:20px;
    & > li {
      padding: 5px 10px;
      border-radius: 5px;
      color: #1f2c37;
      background: #f5f5f5;
    }
  }
  &__title {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 500;
    ~ p {
      margin-top: 10px;
      color: #666;
    }
    > a {
      transition: all 0.4s ease-out;
      &:hover {
        color: #5a5aff;
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    }
  }
  &__date {
    margin-top: 10px;
    color: #666;
    font-family: "Noto Sans KR";
    font-weight: 300;
    strong {
      color: #333;
      font-weight: 500;
    }
  }
  &__description {
    margin-top: 20px;
    & > li {
      position: relative;
      padding-left: 15px;
      font-family: "Noto Sans KR";
      line-height: 1.6;
      &::before {
        content: "-";
        position: absolute;
        left: 0;
      }
      ~ li {
        margin-top: 10px;
      }
    }
  }
}
.hashtags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  & > li {
    position: relative;
    padding: 10px 15px 10px 25px;
    border: 1px solid #5a5aff;
    border-radius: 50px;
    background: #fafafa;
    cursor: pointer;
    // transition:all 0.3s ease-out;
    &:hover {
      color: #fff689;
      background: #5a5aff;
    }
    &::before {
      content: "#";
      position: absolute;
      left: 10px;
    }
  }
}
</style>
