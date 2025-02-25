// store/index.js
import { createStore } from "vuex";
import { computed } from "vue";

export default createStore({
  state: {
    workData: [
      {
        id: 34,
        exposure: 1,
        category: "운영",
        title: "삼성닷컴 갤럭시 캠퍼스 운영",
        start_date: "2024.04.01",
        end_date: "",
        open_date: "",
        summary: "삼성닷컴 갤럭시 캠퍼스 이벤트 페이지 운영",
        link: "https://www.samsungebiz.com/event/galaxycampus/gcseventhub/",
        description: [
          "개발 환경: gulp, svn",
          "디자인 시안: Adobe XD 이용",
          "개발 언어 및 라이브러리: javascript, scss, html5, Swiper.js 외 다수",
        ],
      },
      {
        id: 27,
        exposure: 1,
        category: "구축 | 쇼핑몰 | 이커머스",
        title: "하프클럽 쇼핑몰 구축",
        start_date: "2023.12.04",
        end_date: "2024.03.",
        open_date: "2024.08.",
        summary: "하프클럽 모바일 홈페이지 리뉴얼",
        link: "",
        description: [
          "SPA(Nuxt) 작업환경 쇼핑몰 구축",
          "모바일 360px ~ 500px 대응",
          "참여도: 약 20% (총6명)",
        ],
      },
      {
        id: 26,
        exposure: 1,
        category: "구축 | 쇼핑몰 | 이커머스",
        title: "보리보리 쇼핑몰 리뉴얼",
        start_date: "2023.08.22",
        end_date: "2023.10.24",
        open_date: "2023.12.14",
        summary: "보리보리 모바일 홈페이지 리뉴얼",
        link: "https://m.boribori.co.kr/home",
        description: [
          "SPA(Nuxt) 작업환경 쇼핑몰 구축",
          "모바일 360px ~ 500px 대응",
          "기여도: 약 30% (총4명)",
        ],
      },
      {
        id: 25,
        exposure: 1,
        category: "구축 | 쇼핑몰 | 이커머스 | 고도몰 | 반응형 | mobile-first",
        title: "유한양행 자사몰 (YHMALL)",
        start_date: "2022.08.12",
        end_date: "2022.10.24",
        open_date: "2023.05.01",
        summary: "유한양행 자사몰 반응형 쇼핑몰 구축",
        link: "https://www.yuhanshop.co.kr/",
        description: [
          "고도몰 솔루션을 이용한 쇼핑몰 구축 및 고도몰 스킨 커스터마이징",
          "반응형 375px ~ 1920px 해상도 대응 (mobile-first로 적용)",
          "퍼블리싱 참여도: 약 30%",
        ],
      },
      {
        id: 24,
        exposure: 1,
        category: "운영 | 유지보수 | 기업사이트",
        title: "코오로이 ESG 페이지 추가",
        start_date: "2023.02.13",
        end_date: "2023.02.17",
        open_date: "2023.06.30",
        summary: "코오로이 ESG 페이지 추가",
        link: "http://www.korloy.com/ko/intro/esg_environment.do",
        description: [
          "코오로이 ESG 페이지 추가",
          "375px ~ 1920px 해상도 대응",
          "퍼블리싱 참여도: 100%(퍼블리싱 1인)",
        ],
      },
      {
        id: 23,
        exposure: 1,
        category: "구축 | 리뉴얼 | 기업사이트 | 반응형",
        title: "한국도레이과학진흥재단",
        start_date: "2023.02.23",
        end_date: "2023.03.22",
        open_date: "2023.04.07",
        summary: "한국도레이과학진흥재단 반응형 웹페이지 구축",
        link: "https://www.koreatoraysf.org/ko/main.do",
        description: [
          "한국도레이과학진흥재단 기업 사이트 반응형(375px ~ 1920px 해상도 대응) 웹 퍼블리싱",
          "gulp, github, sourcetree를 이용한 협업 및 scss를 활용하여 효율적이고 협업을 위한 코드 작성",
          "퍼블리싱 참여도: 90%",
        ],
      },
      {
        id: 22,
        exposure: 1,
        category: "구축 | 리뉴얼 | 기업사이트 | 반응형",
        title: "원익큐엔씨",
        start_date: "2023.02.23",
        end_date: "2023.02.22",
        open_date: "2023.03.31",
        summary: "원익 큐엔씨 반응형 웹페이지 구축",
        link: "https://www.wonikqnc.com/ko/",
        description: [
          "반응형 375px ~ 1920px 해상도 대응 (메인 화면 2560px까지 대응)",
          "gulp, github, sourcetree를 이용한 협업 및 scss를 활용하여 효율적이고 협업을 위한 코드 작성",
          "퍼블리싱 참여도: 약 45%",
          "메인 가로스크롤을 활용한 넓고 시원한 움직임 효과",
          "openWAX, w3c를 이용한 웹 표준/접근성 검사",
        ],
      },
      {
        id: 21,
        exposure: 1,
        category: "구축 | 리뉴얼 | 기업사이트 | 반응형",
        title: "RIMAN KOREA",
        start_date: "2022.11.01",
        end_date: "2022.11.30",
        open_date: "2022.12.31",
        summary: "리만코리아 기업사이트 반응형 페이지 구축",
        link: "https://www.rimankorea.com/",
        description: [
          "vue.js(version 2.xx) 프레임워크 및 webpack 빌드 도구 사용, scss 활용",
          "AWS - CODE COMMIT 이용한 빌드 및 배포 관련 협업 경험",
          "375px ~ 1920px 해상도 대응",
          "vuex, axios를 활용하여 api 데이터를 불러오기",
          "컴포넌트 분리 및 scss를 활용하여 효율적인 코드 작성",
          "스크롤이 내려감에 따라 오브젝트가 반응하는 간단한 인터랙션 추가 (https://www.rimankorea.com/about/overview)",
          "프론트 퍼블리싱 기여도: 70%",
        ],
      },
      {
        id: 20,
        exposure: 1,
        category: "구축 | 리뉴얼 | 기업사이트 | 반응형",
        title: "ASK COMPANY",
        start_date: "2022.10.13",
        end_date: "2022.11.30",
        open_date: "2022.12.31",
        summary: "에스크컴퍼니 기업사이트 반응형 페이지 구축",
        link: "https://askcompany.co.kr/",
        description: [
          "vue.js(version 2.xx) 프레임워크 및 webpack 빌드 도구 사용, scss 활용",
          "AWS - CODE COMMIT 이용한 빌드 및 배포 관련 협업 경험",
          "375px ~ 1920px 해상도 대응",
          "vuex, axios를 활용하여 api 데이터를 불러오기",
          "컴포넌트 분리 및 scss를 활용하여 효율적인 코드 작성",
          "프론트 퍼블리싱 기여도: 90%",
        ],
      },
      {
        id: 19,
        exposure: 1,
        category: "구축 | 리뉴얼 | 기업사이트 | 반응형",
        title: "HYOSUNG ITX",
        start_date: "2022.06.07",
        end_date: "2022.07.26",
        open_date: "2022.09.02",
        summary: "효성 ITX 반응형 페이지 구축",
        link: "https://www.hyosungitx.com/ko/main.do",
        description: [
          "360px ~ 1920px 해상도 대응 (메인 화면 2560px까지 대응)",
          "openWAX, w3c를 이용한 웹 표준/접근성 검사",
          "gulp, github, sourcetree를 이용한 협업 및 scss를 활용하여 효율적이고 협업을 위한 코드 작성",
          "퍼블리싱 참여도 : 약 45%",
        ],
      },
      {
        id: 18,
        exposure: 1,
        category: "운영 | 유지보수 | 리뉴얼 | 기업사이트 | 그누보드",
        title: "Yuyu HealthCare",
        start_date: "2022.05.24",
        end_date: "2022.06.23",
        open_date: "2022.09.01",
        summary: "유유헬스케어 리뉴얼 및 운영",
        link: "https://www.yuyuhc.co.kr/",
        description: [
          "375px ~ 1920px 해상도 대응",
          "그누보드 cms를 활용한 관리자 게시판 세팅",
          "퍼블리싱 참여도 : 90%",
        ],
      },
      {
        id: 10,
        exposure: 1,
        category: "구축 | 쇼핑몰 | 이커머스 | 고도몰 | 유지보수",
        title: "ULOS",
        start_date: "2021.07.21",
        end_date: "2022.03.31",
        open_date: "2022.09.10",
        summary: "우르오스 고도몰 구축 서포트 및 운영(유지보수)",
        link: "https://www.ulos.co.kr/",
        description: [
          "고도몰 솔루션을 이용한 쇼핑몰 구축 및 고도몰 스킨 커스터마이징",
          "반응형(가로 해상도 375px ~ 1920px 대응)",
          "퍼블리싱 참여도 : 약 30%",
        ],
      },
      {
        id: 9,
        exposure: 1,
        category: "운영 | 쇼핑몰 | 이커머스 | 고도몰",
        title: "NATUREMADE MALL",
        start_date: "2021.07.21",
        end_date: "2022.03.31",
        open_date: "",
        summary: "네이처메이드 고도몰 운영 및 리뉴얼",
        link: "https://www.naturemademall.co.kr/",
        description: [
          "고도몰 솔루션을 이용한 쇼핑몰 구축 및 고도몰 스킨 커스터마이징",
          "메인 페이지 리뉴얼(pc / 모바일)",
          "메인 및 게시판 상품 리스트, 갤러리 레이아웃 커스터마이징",
          "게시판 댓글 섹션 레이아웃 커스터마이징",
        ],
      },
      {
        id: 17,
        exposure: 1,
        category: "구축 | 기업사이트 | 반응형",
        title: "BlueCove Investment",
        start_date: "2022.03.17",
        end_date: "2022.04.18",
        open_date: "2022.05.11",
        summary: "블루코브자산운용 구축 서포트",
        link: "https://www.bluecoveinvestment.com/ko/main.php",
        description: [
          "375px ~ 1920px 반응형 해상도 대응",
          "gulp, github, sourcetree를 이용한 협업 및 scss 사용",
          "퍼블리싱 참여도 : 45%",
        ],
      },
      {
        id: 16,
        exposure: 1,
        category: "구축 | 기업사이트 | 반응형",
        title: "Yuyuteijin",
        start_date: "2022.01.24",
        end_date: "2022.02.23",
        open_date: "2022.04.08",
        summary: "유유테이진 구축 서포트",
        link: "https://www.yuyuteijin.co.kr/main.do",
        description: [
          "375px ~ 1920px 반응형 해상도 대응",
          "openWAX, w3c를 이용한 웹 표준/접근성 검사",
          "gulp, github, sourcetree를 이용한 협업 및 scss 사용",
          "퍼블리싱 참여도 : 약 30%",
        ],
      },
      {
        id: 15,
        exposure: 1,
        category: "구축 | 리뉴얼 | 기업사이트 | 반응형",
        title: "B DOT CREATIVE",
        start_date: "2022.01.01",
        end_date: "",
        open_date: "",
        summary: "비닷 크리에이티브 회사 홈페이지 구축",
        link: "https://www.bdot.co.kr/",
        description: [
          "vue.js(3 버전) 프레임워크, vite 빌드 도구 이용",
          "backend api 커스터마이징(express.js)",
          "반응형 375px ~ 1920px 반응형 해상도 대응",
          "프론트/백 구축 참여도: 약 30%",
        ],
      },
      {
        id: 14,
        exposure: 0,
        category: "구축 | 리뉴얼 | APP",
        title: "ONE PICK",
        start_date: "2021.11.19",
        end_date: "2022.04.13",
        open_date: "",
        date: "2021.12.01 ~ 2022.01.30.",
        summary: "원픽 숙박앱 구축 퍼블리싱 서포트",
        link: "",
        description: [
          "vue.js(2 버전) 프레임워크 이용",
          "반응형 375px ~ 1024px 해상도 대응",
          "퍼블리싱 참여도 : 약 30%",
        ],
      },
      {
        id: 13,
        exposure: 1,
        category: "구축 | 쇼핑몰 | 이커머스 | 고도몰",
        title: "PAULMADE MALL",
        start_date: "2021.09.24",
        end_date: "2021.11.19",
        open_date: "2021.11.19",
        summary: "폴메이드 고도몰 구축 및 운영",
        link: "",
        description: [
          "고도몰 솔루션을 이용한 쇼핑몰 구축 및 고도몰 스킨 커스터마이징",
          "인스타 api 연동",
          "반응형 375px ~ 1920px 해상도 대응",
          "퍼블리싱 참여도 : 90%",
        ],
      },
      {
        id: 12,
        exposure: 1,
        category: "구축 | 기업사이트 | 하이브리드앱 | 적응형",
        title: "WFRI(우리은행금융경영연구소)",
        start_date: "2021.08.25",
        end_date: "2021.09.06",
        open_date: "2021.11.22",
        summary: "우리은행금융경영연구소 기업사이트 구축 및 서포트",
        link: "https://wfri.re.kr/ko/web/main.php",
        description: [
          "모바일 하이브리드 앱",
          "pc해상도 1200px ~ 1920px 대응 / 모바일 해상도 375px ~ 1024px 대응",
          "퍼블리싱 참여도 : 약 30%",
        ],
      },
      {
        id: 11,
        exposure: 1,
        category: "구축 | 기업사이트 | 적응형",
        title: "HAESUNG INDUSTRY",
        start_date: "2021.07.23",
        end_date: "2021.08.31",
        open_date: "2021.10.01",
        summary: "해성산업 기업사이트 구축",
        link: "http://www.haesungind.co.kr/ko/web/main.php",
        description: [
          "적응형으로 구현 (총 17페이지 - 메인 1페이지, 서브 16페이지)",
          "pc해상도 1280px ~ 1920px 대응 / 모바일 해상도 375px ~ 1125px 대응",
          "퍼블리싱 참여도 : 50%",
        ],
      },
      {
        id: 8,
        exposure: 1,
        category: "운영 | 유지보수 | 기업사이트",
        title: "PULMUONE 뉴스룸 유지보수 및 리뉴얼",
        start_date: "2021.11.02",
        end_date: "2022.01.30",
        open_date: "",
        summary: "풀무원 뉴스룸 유지보수 및 리뉴얼",
        link: "https://news.pulmuone.co.kr/",
        description: [
          "pc: 1920 ~ 1024 대응 / 모바일: 375px 대응",
          "참여도: 90%",
        ],
      },
      {
        id: 7,
        exposure: 1,
        category: "운영 | 유지보수 | 기업사이트",
        title: "WONIK IPS",
        start_date: "2021.12.01",
        end_date: "2022.12.10",
        open_date: "",
        summary: "원익 IPS ESG 섹션 추가 및 리뉴얼",
        link: "https://www.ips.co.kr/ko/esg/environment.php",
        description: [
          "pc: 1920 ~ 1024 대응 / 모바일: 375px 대응",
          "참여도: 50% (퍼블리셔 2인)",
        ],
      },
      {
        id: 26,
        exposure: 1,
        category: "제안",
        title: "GS엘리베이터 제안",
        start_date: "2023.05.30",
        end_date: "2023.06.08",
        open_date: "",
        summary: "gs엘리베이터 제안 시안 퍼블리싱 작업 (Type B)",
        link: "https://choihayeong.github.io/gselevator_draft/",
        description: [
          "gs엘리베이터 제안 시안 퍼블리싱 작업 (Type B)",
          "엘리베이터를 타는 느낌의 메인 컨셉",
        ],
      },
      {
        id: 25,
        exposure: 1,
        category: "제안",
        title: "한국카본 제안",
        start_date: "2023.04.25",
        end_date: "2023.05.12",
        open_date: "",
        summary: "한국카본 제안 시안 퍼블리싱 작업 (Type A)",
        link: "https://choihayeong.github.io/hankukcarbon_draft/",
        description: [
          "한국카본 제안 시안 퍼블리싱 작업 (Type A)",
          "메인이 블랙인 컨셉",
          "★ 해당프로젝트 수주",
        ],
      },
      {
        id: 28,
        exposure: 0,
        category: "제안",
        title: "트랜스코스모스 코리아(TCK) 제안",
        start_date: "2023.03.15",
        end_date: "2023.03.21",
        open_date: "",
        summary: "트랜스코스모스 코리아(TCK) 제안 시안 퍼블리싱 작업 (Type A)",
        link: "",
        description: [
          "트랜스코스모스 코리아(TCK) 제안 시안 퍼블리싱 작업 (Type A)",
          "가로스크롤 및 다양한 인터랙션",
          "★ 해당프로젝트 수주",
        ],
      },
      {
        id: 29,
        exposure: 0,
        category: "제안",
        title: "효성 그룹 제안",
        start_date: "2022.07.01",
        end_date: "2022.07.07",
        open_date: "",
        summary: "효성 그룹 제안 시안 퍼블리싱 작업 (Type B)",
        link: "",
        description: ["효성 그룹 제안 시안 퍼블리싱 작업 (Type B)"],
      },
      {
        id: 30,
        exposure: 0,
        category: "제안",
        title: "효성ITX 제안",
        start_date: "2022.04.25",
        end_date: "2022.04.27",
        open_date: "",
        summary: "효성ITX 제안 시안 퍼블리싱 작업 (Type B)",
        link: "",
        description: ["효성ITX 제안 시안 퍼블리싱 작업 (Type B)"],
      },
      {
        id: 27,
        exposure: 1,
        category: "제안",
        title: "JB금융그룹 제안",
        start_date: "2023.05.09",
        end_date: "2023.05.17",
        open_date: "",
        summary: "JB금융그룹 제안 시안 퍼블리싱 작업 (Type B)",
        link: "https://choihayeong.github.io/jb_draft/",
        description: [
          "JB금융그룹 제안 시안 퍼블리싱 작업 (Type B)",
          "이모티콘 및 박스를 활용한 컨셉",
        ],
      },
      {
        id: 31,
        exposure: 0,
        category: "제안",
        title: "한화디펜스 제안",
        start_date: "2022.03.15",
        end_date: "2022.03.18",
        open_date: "",
        summary: "한화디펜스 제안 시안 퍼블리싱 작업 (Type B)",
        link: "",
        description: [
          "한화디펜스 제안 시안 퍼블리싱 작업 (Type B)",
          "가로스크롤 인터랙션",
        ],
      },
      {
        id: 32,
        exposure: 0,
        category: "제안",
        title: "LX Pantos 제안",
        start_date: "2022.01.20",
        end_date: "2022.02.17",
        open_date: "",
        summary: "LX Pantos 제안 시안 퍼블리싱 작업 (Type B)",
        link: "",
        description: ["LX Pantos 제안 시안 퍼블리싱 작업 (Type B)"],
      },
      {
        id: 33,
        exposure: 0,
        category: "사이드 프로젝트",
        title: "simple-mbti-test",
        start_date: "",
        end_date: "",
        open_date: "",
        summary: "react.js를 이용한 simple-mbti-test",
        link: "https://choihayeong.github.io/weatherApi/",
        description: [],
      },
      {
        id: 6,
        exposure: 1,
        category: "사이드 프로젝트",
        title: "weatherApi",
        start_date: "",
        end_date: "",
        open_date: "",
        summary: "openweatherapi를 이용한 날씨 앱",
        link: "https://choihayeong.github.io/weatherApi/",
        description: [],
      },
      {
        id: 5,
        exposure: 1,
        category: "사이드 프로젝트",
        title: "jsTimer",
        start_date: "",
        end_date: "",
        open_date: "",
        summary: "javascript로 만든 timer 앱",
        link: "https://choihayeong.github.io/jsTimer/",
        description: [],
      },
      {
        id: 4,
        exposure: 1,
        category: "사이드 프로젝트",
        title: "vanilla-todo",
        start_date: "",
        end_date: "",
        open_date: "",
        summary: "javascript(ES6)로 만든 todo 앱",
        link: "https://choihayeong.github.io/vanillaTodo/",
        description: [],
      },
      {
        id: 3,
        exposure: 1,
        category: "사이드 프로젝트",
        title: "randomly-choose-dayoff",
        start_date: "",
        end_date: "",
        open_date: "",
        summary: "javascript로 만든 날짜 선택하기 앱",
        link: "https://choihayeong.github.io/randomly-choose-dayoff/",
        description: [],
      },
      {
        id: 2,
        exposure: 1,
        category: "사이드 프로젝트",
        title: "jsGame",
        start_date: "",
        end_date: "",
        open_date: "",
        summary: "javascript로 만든 다양한 미니 게임",
        link: "https://choihayeong.github.io/jsGame/",
        description: [],
      },
      {
        id: 1,
        exposure: 0,
        category: "사이드 프로젝트",
        title: "BasicPaint",
        start_date: "",
        end_date: "",
        open_date: "",
        summary: "html5 canvas를 이용한 간단한 그림판 앱",
        link: "",
        description: [],
      },
    ],
  },
});
