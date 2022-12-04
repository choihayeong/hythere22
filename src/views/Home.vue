<template>
    <section class="main-section main-section--intro">
        <h1 class="main-section__title">Hythere!</h1>
        <div class="main-section__title main-section__title--stroke">
            choi <br>
            hayeong
        </div>
        <div class="main-section__links">
            <a href="https://github.com/choihayeong" target="_blank">github</a>
            <a href="https://hythere.tistory.com/" target="_blank">blog</a>
            <a href="#" target="_blank">resume</a>
            <a href="#" target="_blank">linkedin</a>
        </div>
        <ul class="main-section__info">
            <li>
                <span>FE Developer / UI Developer</span>
            </li>
            <li>
                <span>Email:</span> 
                hychoi318@gmail.com
            </li>
        </ul>
    </section>
    <section class="main-section main-section--overview">
        <p class="slogan">
            Currently, I'm a UI developer with programming skills. <br>
            Now I mainly work as a UI developer team member at Web agency named <a href="http://bdot.co.kr/" target="_blank">B DOT CREATIVE.</a> <br>
            Also, I'm actively expanding my field and interest to be a FE developer <br>
            by expanding my devlopement skills regardless of field.
        </p>
    </section>
    <section class="main-section main-section--strength">
        <h2 class="subtitle subtitle--strength">Strength.</h2>
        <ul class="strength-tag">
            <li>javscript</li>
            <li>scss</li>
            <li>html5</li>
            <li>css3</li>
            <li>vue.js</li>
            <li>gulp</li>
            <li>typescript</li>
        </ul>
        <ul class="strength-detail">
            <li>
                <h3 class="strength-detail__title">Javascript</h3>
                <div class="strength-detail__content">
                    ES6+(ES2015) 문법에 익숙합니다. <br>
                    gulp를 사용한 프로젝트 협업에 익숙합니다. <br> 
                    babel 등의 트랜스파일러를 사용할 수 있습니다. <br>
                    typescript를 사용할 수 있습니다.
                </div>
            </li>
            <li>
                <h3 class="strength-detail__title">html5/css3</h3>
                <div class="strength-detail__content">
                    웹표준을 지키려 노력합니다. <br>
                    반응형, 적응형 구현이 가능합니다. <br>
                    SCSS 문법에 익숙합니다. <br>
                    BEM 방법론을 사용하여 css를 적용합니다. <br>
                    크로스 브라우징에 대응할 수 있습니다. <br>
                    flex와 grid를 활용할 수 있습니다. <br>
                    keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다. <br>
                    bootstrap(v.5) 사용 경험이 있습니다.
                </div>
            </li>
            <li>
                <h3 class="strength-detail__title">vue.js</h3>
                <div class="strength-detail__content">
                    Options API를 이용한 vue2 문법과 Composition API를 이용한 vue3 문법 모두 활용할 수 있습니다. <br>
                    vuex 사용 경험이 있습니다. <br>
                    vue-router를 사용하여 SPA(single page application)에 대한 이해와 적용이 가능합니다.
                </div>
            </li>
        </ul>
    </section>
    <section class="main-section main-section--career">
        <h2 class="subtitle subtitle--career">Careers.</h2>
        <ul class="career-list">
            <li>
                <h3 class="career-list__title">
                    B DOT CREATIVE
                    <span class="career-list__date">2021.07.20. ~ Now</span>
                </h3>
                <span class="career-list__position">마크업 개발팀 / 사원</span>
                
                <router-link to="/projects/list_bdot">
                    Projects List
                </router-link>
            </li>
            <li>
                <h3 class="career-list__title">
                    Etarae
                    <span class="career-list__date">2021.04.12. ~ 2021.06.30.</span>
                </h3>
                <span class="career-list__position">콘텐츠 개발1팀 / 팀원</span>

                <router-link to="/projects/list_etarae">
                    Projects List
                </router-link>
            </li>
        </ul>
    </section>
    <section class="main-section main-section--projects">
        <h2 class="subtitle subtitle--projects">Projects.</h2>
        <Words />
        <ul class="projects-list">
            <li>
                <h3 class="projects-list__title">
                    HYOSUNG ITX
                </h3>
                <p>
                    효성 ITX 반응형 페이지 구축
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    Yuyu HealthCare
                </h3>
                <p>
                    유유헬스케어 리뉴얼 및 운영
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    BlueCove Investment
                </h3>
                <p>
                    블루코브자산운용 구축 서포트
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    Yuyuteijin
                </h3>
                <p>
                    유유테이진 구축 서포트 및 운영
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    B DOT CREATIVE <br>
                </h3>
                <p>
                    비닷 크리에이티브 회사 홈페이지 구축
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    ONE PICK
                </h3>
                <p>
                    원픽 앱 구축 퍼블리싱 서포트
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    ULOS
                </h3>
                <p>
                    우르오스 고도몰 구축 서포트 및 운영
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    PAULMADE MALL
                </h3>
                <p>
                    폴메이드 고도몰 구축 및 운영
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    WFRI
                </h3>
                <p>
                    우리금융경영연구소 구축 서포트
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    HAESUNG INDUSTRY
                </h3>
                <p>
                    해성산업 구축
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    NATUREMADE MALL
                </h3>
                <p>
                    네이처메이드 고도몰 운영 및 리뉴얼
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    PULMUONE
                </h3>
                <p>
                    풀무원 뉴스룸 리뉴얼
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    WONIK IPS
                </h3>
                <p>
                    원익 IPS ESG 섹션 리뉴얼
                </p>
            </li>
            <li>
                <h3 class="projects-list__title">
                    weatherApi
                </h3>
                <p>openweatherapi를 이용한 날씨 앱</p>
                <!-- <a href="#">Github Link</a> -->
            </li>
            <li>
                <h3 class="projects-list__title">
                    jsTimer
                </h3>
                <p>javascript로 만든 timer 앱</p>
                <!-- <a href="#">Github Link</a> -->
            </li>
            <li>
                <h3 class="projects-list__title">
                    vanilla-todo
                </h3>
                <p>javascript로 만든 todo 앱</p>
                <!-- <a href="#">Github Link</a> -->
            </li>
            <li>
                <h3 class="projects-list__title">
                    randomly-choose-dayoff
                </h3>
                <p>javascript로 만든 날짜 선택하기 앱</p>
                <!-- <a href="#">Github Link</a> -->
            </li>
            <li>
                <h3 class="projects-list__title">
                    jsGame
                </h3>
                <p>javascript로 만든 다양한 미니 게임</p>
                <!-- <a href="#">Github Link</a> -->
            </li>
            <li>
                <h3 class="projects-list__title">
                    BasicPaint
                </h3>
                <p>html5 canvas를 이용한 간단한 그림판 앱</p>
                <!-- <a href="#">Github Link</a> -->
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    // import { Words } from '@/components'

    export default defineComponent({
        setup() {
            const components = {
                // Words
            };
        
            return {
                components,
            }
        }
    })
</script>