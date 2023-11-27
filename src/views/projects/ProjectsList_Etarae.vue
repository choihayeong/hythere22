<template>
  <div class="contents">
    <h2 class="subtitle subtitle--projects">Projects.</h2>

    <div class="projects">
      <div class="work-info">
        <h3 class="work-info__name">
          Etarae
          <span class="work-info__period">2021.04.12. - 2021.06.30.</span>
        </h3>
        <p class="work-info__position">콘텐츠 개발1팀 / 팀원</p>
      </div>

      <div class="projects__list">
        <table class="table table--hover">
          <caption>
            Project List
          </caption>
          <colgroup>
            <col width="5%" />
            <col width="20%" />
            <col width="10%" />
            <col width="50%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th>구분</th>
              <th>프로젝트명</th>
              <th>참여율</th>
              <th>내용</th>
              <th>링크</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>다락원 전자저작물(한문, 중국어) e-learning 컨텐츠 제작</td>
              <td>50%</td>
              <td>* 전자저작물(한문, 중국어) e-learning 컨텐츠 제작</td>
              <td>
                <!-- <a target="_blank" href="http://textbook.darakwon.co.kr/">다락원 사이트</a> -->
                <a
                  target="_blank"
                  href="http://darakwon.hscdn.com:8081/pds/ebook/textbook_2015/7052/index.html"
                  >다락원 고등한문 official</a
                >
                <a
                  target="_blank"
                  href="https://darakwonpds.hscdn.com:8443/ebook/textbook_2015/7048/index.html"
                  >다락원 중등한문 offical</a
                >
                <a
                  target="_blank"
                  href="https://darakwonpds.hscdn.com:8443/ebook/textbook_2015/6976/index.html"
                  >다락원 중국어 Ⅰ official</a
                >
                <a
                  target="_blank"
                  href="http://darakwon.hscdn.com:8081/pds/ebook/textbook_2015/7521/index.html"
                  >다락원 중국어 Ⅱ official</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { Words } from '@/components'

export default defineComponent({
  setup() {
    const components = {
      // Words
    };

    return {
      components,
    };
  },
});
</script>
