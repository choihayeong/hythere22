<template>
  <ul class="timeline">
    <!-- timeline items -->
    <li v-for="(item, index) in allTimeLineData" :key="index">
      <div class="timeline__image" :style="styles[index]">
        {{ item.company.slice(0, 1).toUpperCase() }}
      </div>
      <div class="timeline__panel">
        <div class="timeline__heading">
          <span class="timeline__date"
            >{{ item.start_date }} ~
            {{ item.end_date ? item.end_date : "current" }} ({{
              getDurations[index]
            }})</span
          >
          <h3 class="timeline__title">
            {{ item.company }}
            <small class="timeline__group"
              >{{ item.grade }} / {{ item.department }}</small
            >
          </h3>
        </div>
        <div class="timeline__description">
          <p v-for="(desc, index) in item.description" :key="index">
            {{ desc }}
          </p>
        </div>
      </div>
    </li>
    <!-- // -->
    <li>
      <div
        class="timeline__image"
        style="color: #1f2c37; background-color: #bfdba7"
      >
        <a href="https://github.com/choihayeong" target="_blank"> GitHub </a>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { StyleValue, computed, reactive } from "vue";

const props = defineProps({
  timeLineData: {
    type: Array,
    default: undefined,
  },
});

const allTimeLineData = reactive([
  {
    company: "CTTD",
    start_date: "2023.08.21.",
    end_date: undefined,
    grade: "사원",
    department: "Frontend Development",
    description: ["이커머스 플랫폼 구축 및 운영"],
    identity_color: {
      font: "#fff",
      bg: "#000",
    },
  },
  {
    company: "B DOT CREATIVE",
    start_date: "2021.07.20.",
    end_date: "2023.08.18",
    grade: "사원",
    department: "마크업개발팀",
    description: [
      "웹 페이지 퍼블리싱 구축 및 유지보수",
      "vue.js 프레임 워크를 이용한 SPA 퍼블리싱 및 프론트 개발",
      "기술스택: vue.js, scss, javascript(ES6), jQuery, html5/css3",
    ],
    identity_color: {
      font: "#1f1f1f",
      bg: "#fee101",
    },
  },
  {
    company: "ETARAE",
    start_date: "2021.04.12.",
    end_date: "2021.06.30",
    grade: "팀원",
    department: "콘텐츠개발팀",
    description: [
      "교과서(다락원) 전자저작물 이러닝 제작 프로젝트 참여(프로토 제작 외)",
      "vue.js 프레임 워크를 이용한 SPA 퍼블리싱 및 프론트 개발",
      "기술스택: jQuery, html5/css3",
    ],
    identity_color: {
      font: "#fff",
      bg: "#10B4B1",
    },
  },
]);

const styles = computed(() => {
  const results: StyleValue = [];

  allTimeLineData.filter((item, index) => {
    results.push({
      color: item.identity_color.font,
      "background-color": item.identity_color.bg,
    });
  });

  return results;
});

const getDiffTimeLine = (start: string | Date, end: string | Date) => {
  const diff = +new Date(end) - +new Date(start);

  const SECOND_IN_MS = 1000;
  const MINUTE_IN_MS = SECOND_IN_MS * 60;
  const HOUR_IN_MS = MINUTE_IN_MS * 60;
  const DAY_IN_MS = HOUR_IN_MS * 24;

  const DAYS = diff / DAY_IN_MS;

  const allMonthLeft = Math.floor(DAYS / 30);
  const yearLeft = Math.floor(DAYS / 365);

  if (yearLeft !== 0) {
    const monthLeft = allMonthLeft - 12 * yearLeft;

    return `${yearLeft}년 ${monthLeft}개월`;
  } else {
    return `${allMonthLeft}개월`;
  }
};

const getDurations = computed(() => {
  const results: String[] = [];
  const TODAY = new Date().toDateString();

  allTimeLineData.filter((item, index) => {
    if (item.end_date) {
      results.push(getDiffTimeLine(item.start_date, item.end_date));
    } else {
      results.push(getDiffTimeLine(item.start_date, TODAY));
    }
  });

  return results;
});
</script>

<style lang="scss" scoped>
.timeline {
  position: relative;
  padding: 0;
  list-style: none;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    margin-left: -1.5px;
    content: "";
    background-color: #e9ecef;
  }

  & > li {
    position: relative;
    min-height: 170px;
    margin-bottom: 100px;
    &::before,
    &::after {
      display: table;
      content: "";
    }
    &::after {
      clear: both;
    }
    &:nth-child(2n) {
      .timeline__panel {
        text-align: left;
        margin-left: auto;
        padding: 0 100px 0 20px;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  &__image {
    position: absolute;
    z-index: 100;
    left: 50%;
    width: 170px;
    height: 170px;
    margin-left: -85px;
    text-align: center;
    color: white;
    border: 7px solid #e9ecef;
    border-radius: 100%;
    background-color: #ccc;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 38px;
    font-weight: bold;

    &::before {
      // content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #e9ecef;
      // animation: scale 2.4s linear infinite
    }
  }

  &__panel {
    width: calc(50% - 85px);
    padding: 0 20px 0 100px;
    text-align: right;
  }
  &__heading {
    margin-bottom: 13px;
    border-bottom: 1px solid #ccc;
  }

  &__date {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    font-weight: 300;
  }

  &__group {
    display: block;
    font-size: 16px;
    font-weight: 300;
  }

  &__title {
    padding-bottom: 12px;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.5;
  }

  &__description {
    color: #6c757d;
    font-size: 16px;
    line-height: 1.5;
  }
}

// animation
@keyframes scale {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0.2;
    transform: scale(1.2);
  }
}

@media screen and (max-width: 1440px) {
  .timeline {
    &__panel {
      padding: 0 20px 0 0;
    }

    & > li {
      &:nth-child(2n) .timeline__panel {
        padding: 0 0 0 20px;
      }
    }
  }
}

@media screen and (max-width: 1025px) {
  .timeline {
    & > li {
      min-height: 150px;
      margin-block-end: 60px;
    }

    &__image {
      width: 150px;
      height: 150px;
      margin-inline-start: -75px;
    }

    &__title {
      font-size: 24px;
    }
  }
}

@media screen and (max-width: 769px) {
  .timeline {
    &::before {
      left: 40px;
    }

    & > li {
      min-height: 50px;
    }

    &__image {
      width: 80px;
      height: 80px;
      left: 0;
      margin-left: 0;
      font-size: 18px;
    }

    &__panel,
    & > li:nth-child(2n) .timeline__panel {
      width: 100%;
      padding: 0 0 0 100px;
      text-align: left;
    }

    &__title {
      font-size: 18px;
    }
  }
}
</style>
