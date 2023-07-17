// store/index.js
import { createStore } from "vuex";
import { computed } from "vue";

export default createStore({
    state: {
        workData: [
            {
                id: 24,
                title: '유한양행 자사몰 (YHMALL) (~ing)',
                date: '2023.05.01 (예정)',
                summary: '유한양행 자사몰 반응형 쇼핑몰 구축',
                link: 'https://www.yuhanshop.co.kr/',
                description: [
                    '고도몰 솔루션을 이용한 쇼핑몰 구축 및 고도몰 스킨 커스터마이징',
                    '반응형(가로 해상도 375px ~ 1920px 대응)',
                    '구축 참여도: 30% (퍼블리셔 3인)',
                ]
            },
            {
                id: 23,
                title: '한국도레이과학진흥재단',
                date: '~ 2023.04.07',
                summary: '한국도레이과학진흥재단 반응형 웹페이지 구축',
                link: 'https://www.koreatoraysf.org/main.do',
                description: [
                    '한국도레이과학진흥재단 기업 사이트 반응형(375px ~ 1920px 해상도 대응) 웹 퍼블리싱',
                    'gulp, github, sourcetree를 이용한 협업 및 scss 사용',
                    '구축 참여도: 90% (퍼블리셔 3인)',
                ],
            },
            {
                id: 22,
                title: '원익큐엔씨',
                date: '~ 2023.03.31',
                summary: '원익 큐엔씨 반응형 웹페이지 구축',
                link: 'https://www.wonikqnc.com/ko/',
                description: [
                    '원익큐엔씨 기업 사이트 반응형(375px ~ 1920px 해상도 대응) 웹 퍼블리싱',
                    'gulp, github, sourcetree를 이용한 협업 및 scss 사용',
                    '구축 참여도: 30% (퍼블리셔 3인)',
                ],
            },
            {
                id: 21,
                title: 'RIMAN KOREA',
                date: '2022.10.01 ~ 2022.12.31',
                summary: '리만코리아 기업사이트 반응형 페이지 구축',
                link: 'https://www.rimankorea.com/',
                description: [
                    'vue.js(2 버전) 프레임워크 및 웹팩 빌드 도구 활용 및 scss 사용',
                    'AWS CODE COMMIT 활용한 협업',
                    '375px ~ 1920px 해상도 대응',
                    '구축 참여도: 50% (프론트)',
                ]
            },
            {
                id: 20,
                title: 'ASK COMPANY',
                date: '2022.10.01 ~ 2022.12.31',
                summary: '에스크컴퍼니 기업사이트 반응형 페이지 구축',
                link: 'https://askcompany.co.kr/',
                description: [
                    'vue.js(2 버전) 프레임워크 및 웹팩 빌드 도구 활용 및 scss 사용',
                    'AWS CODE COMMIT 활용한 협업',
                    '375px ~ 1920px 해상도 대응',
                    '구축 참여도: 100% (프론트)',
                ]
            },
            {
                id: 19,
                title: 'HYOSUNG ITX',
                date: '2022.06.01 ~ 2022.09.30',
                summary: '효성 ITX 반응형 페이지 구축',
                link: 'https://www.hyosungitx.com/ko/main.do',
                description: [
                    '효성ITX 기업 사이트 반응형(360px ~ 1920px 해상도 대응) 웹 퍼블리싱',
                    'openWAX, w3c를 이용한 웹 표준/접근성 심사',
                    'gulp, github, sourcetree를 이용한 협업 및 scss 사용',
                    '구축 참여도: 30% (퍼블리셔 3인)',
                ]
            },
            {
                id: 18,
                title: 'Yuyu HealthCare',
                date: '2022.06.01 ~ 2022.09.01',
                summary: '유유헬스케어 리뉴얼 및 운영',
                link: 'https://www.yuyuhc.co.kr/',
                description: [
                    '유유헬스케어 기업 사이트 반응형(375px ~ 1920px 해상도 대응) 웹 사이트 리뉴얼',
                    '그누보드 cms를 활용한 관리자 게시판 세팅',
                    '참여도: 100%',
                ]
            },
            {
                id: 17,
                title: 'BlueCove Investment',
                date: '2022.02.01 ~ 2022.04.01',
                summary: '블루코브자산운용 구축 서포트',
                link: 'https://www.bluecoveinvestment.com/ko/main.php',
                description: [
                    '블루코브자산운용 기업 사이트 반응형(375px ~ 1920px 해상도 대응) 웹 퍼블리싱',
                    'gulp, github, sourcetree를 이용한 협업 및 scss 사용',
                    '영문 다국어 진행',
                    '구축 참여도: 30% (퍼블리셔 3인)',
                ]
            },
            {
                id: 16,
                title: 'Yuyuteijin',
                date: '2022.01.01 ~ 2022.03.30',
                summary: '유유테이진 구축 서포트 및 운영',
                link: 'https://yuyuteijin.com/',
                description: [
                    '유유테이진 기업 사이트 반응형(375px ~ 1920px 해상도 대응) 웹 퍼블리싱',
                    'openWAX, w3c를 이용한 웹 표준/접근성 심사',
                    'gulp, github, sourcetree를 이용한 협업 및 scss 사용',
                    '구축 참여도: 30% (퍼블리셔 3인)',
                ]
            },
            {
                id: 15,
                title: 'B DOT CREATIVE',
                date: '2022.01.01 ~ ',
                summary: '비닷 크리에이티브 회사 홈페이지 구축',
                link: 'https://www.bdot.co.kr/',
                description: [
                    'vue.js(3 버전) 프레임워크, vite 빌드 도구 이용',
                    '반응형 375px ~ 1024px 해상도 대응',
                    '구축 참여도: 30% (퍼블리셔 3인)',
                ]
            },
            {
                id: 14,
                title: 'ONE PICK',
                date: '2021.12.01 ~ 2022.01.30.',
                summary: '원픽 숙박앱 구축 퍼블리싱 서포트',
                link: '',
                description: [
                    'vue.js(2 버전) 프레임워크 이용',
                    '반응형 375px ~ 1024px 해상도 대응',
                    '구축 참여도: 30% (퍼블리셔 3인)',
                ]
            },
            {
                id: 13,
                title: 'PAULMADE MALL',
                date: '2021.11.01 ~ 2021.11.30.',
                summary: '폴메이드 고도몰 구축 및 운영',
                link: 'https://www.paulmademall.com/',
                description: [
                    '고도몰 솔루션을 이용한 쇼핑몰 구축 및 고도몰 스킨 커스터마이징',
                    '인스타 위젯 연동',
                    '반응형 375px ~ 1920px 해상도 대응',
                    '구축 참여도: 100%',
                ]
            },
            {
                id: 12,
                title: 'WFRI',
                date: '2021.10. ~ 2021.11.30.',
                summary: '우리금융경영연구소 기업사이트 구축 및 서포트',
                link: 'https://wfri.re.kr/ko/web/main.php',
                description: [
                    '우리금융경영연구소 기업사이트 웹 퍼블리싱 pc/모바일 구축 서포트',
                    '모바일 하이브리드 앱',
                    'pc해상도 1200px ~ 1920px 대응 / 모바일 해상도 375px ~ 1024px 대응',
                    '구축 참여도: 30% (퍼블리셔 3인)',
                ]
            },
            {
                id: 11,
                title: 'HAESUNG INDUSTRY',
                date: '2021.07. ~ 2021.09.30.',
                summary: '해성산업 기업사이트 구축',
                link: 'http://www.haesungind.co.kr/ko/web/main.php',
                description: [
                    '해성산업 기업 사이트 웹 퍼블리싱 pc/모바일 구축 (총 17페이지 - 메인 1페이지, 서브 16페이지)',
                    '구축 참여도: 50% (퍼블리셔 2인)',
                ]
            },
            {
                id: 10,
                title: 'ULOS',
                date: '2021.07. ~ 2022.03.31.',
                summary: '우르오스 고도몰 구축 서포트 및 운영',
                link: 'https://www.ulos.co.kr/',
                description: [
                    '고도몰 솔루션을 이용한 쇼핑몰 구축 및 고도몰 스킨 커스터마이징',
                    '반응형(가로 해상도 375px ~ 1920px 대응)',
                    '구축 참여도: 30% (퍼블리셔 3인)',
                ],
            },
            {
                id: 9,
                title: 'NATUREMADE MALL',
                date: '2021.07. ~ 2022.03.31.',
                summary: '네이처메이드 고도몰 운영 및 리뉴얼',
                link: 'https://www.naturemademall.co.kr/',
                description: [
                    '고도몰 솔루션을 이용한 쇼핑몰 구축 및 고도몰 스킨 커스터마이징',
                    '메인 페이지 리뉴얼(pc / 모바일)',
                    '메인 및 게시판 상품 리스트, 갤러리 레이아웃 커스터마이징',
                    '게시판 댓글 섹션 레이아웃 커스터마이징',
                ],
            },
            {
                id: 8,
                title: 'PULMUONE 뉴스룸',
                date: '2022.01.30.',
                summary: '풀무원 뉴스룸 리뉴얼',
                link: 'https://news.pulmuone.co.kr/',
                description: [
                    'pc: 1920~1024 대응 / 모바일: 375px 대응',
                    '참여도: 90%',
                ],
            },
            {
                id: 7,
                title: 'WONIK IPS',
                date: '2022.01.30.',
                summary: '원익 IPS ESG 섹션 리뉴얼',
                link: 'https://www.ips.co.kr/ko/esg/environment.php',
                description: [
                    'pc: 1920~1024 대응 / 모바일: 375px 대응',
                    '참여도: 50% (퍼블리셔 2인)',
                ],
            },
            {
                id: 6,
                title: 'weatherApi',
                date: '',
                summary: 'openweatherapi를 이용한 날씨 앱',
                link: 'https://choihayeong.github.io/weatherApi/',
                description: [],
            },
            // {
            //     id: 5,
            //     title: 'jsTimer',
            //     date: '',
            //     summary: 'javascript로 만든 timer 앱',
            //     link: '',
            //     description: [],
            // },
            {
                id: 4,
                title: 'vanilla-todo',
                date: '',
                summary: 'javascript로 만든 todo 앱',
                link: 'https://choihayeong.github.io/vanillaTodo/',
                description: [],
            },
            {
                id: 3,
                title: 'randomly-choose-dayoff',
                date: '',
                summary: 'javascript로 만든 날짜 선택하기 앱',
                link: 'https://choihayeong.github.io/randomly-choose-dayoff/',
                description: [],
            },
            {
                id: 2,
                title: 'jsGame',
                date: '',
                summary: 'javascript로 만든 다양한 미니 게임',
                link: 'https://choihayeong.github.io/jsGame/',
                description: [],
            },
            // {
            //     id: 1,
            //     title: 'BasicPaint',
            //     date: '',
            //     summary: 'html5 canvas를 이용한 간단한 그림판 앱',
            //     link: '',
            //     description: [],
            // },
        ],
    }
})