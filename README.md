# hythere

personal website for portfolio with deploying via vercel, vue3, typescript and vite

## vite 설치 (https://vitejs.dev/guide/)

```bash
npm create vite@latest
```

```bash
Ok to proceed? (y) y
√ Project name: ... whatever
√ Select a framework: » Vue
√ Select a variant: » TypeScript
```

### 설치 후 개발서버 실행

```bash
cd whatever
npm install
npm run dev
```

## Prettier 설치

- [Prettier 설치](https://prettier.io/docs/en/install.html)

## tsconfig.json

- `"compilerOptions"` 속성 중 `"baseUrl": "./",`, `"paths: { "@/*":["./src/*"] }"`을 추가해줘야 컴포넌트 임포트시 오류가 안남

```json
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "skipLibCheck": true,
    "allowJs": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "src/main.js",
    "src/main.js"
  ],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## package.json (의존 패키지 설치)
```json
  "dependencies": {
    "aos": "^2.3.4",
    "sass": "^1.51.0",
    "vue": "^3.2.25", // >> "^3.3.8"
    "vue-router": "^4.0.14",
    "vuex": "^4.0.2"
  },
  "devDependencies": {
    "@types/aos": "^3.0.4",
    "@types/node": "^17.0.33",
    "@vitejs/plugin-vue": "^2.3.3", // >> "^4.5.0",
    "eslint": "^8.5.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-vue": "^8.2.0",
    "nodemon": "^2.0.16",
    "prettier": "3.0.0",
    "sass-loader": "^12.6.0",
    "ts-node": "^10.7.0",
    "typescript": "^4.5.4", // >> "^5.2.2",
    "vite": "^2.9.9", // >> "^5.0.0",
    "vue-tsc": "^0.34.7" // >> "^1.8.22"
  }
```

## 📁 Directory 구조
```
\ (root)
└ src
  └ assets        << including fonts, images ....
    └ stylesheets << such as scss....
  └ components
  └ layout
    └ components  << TheHeader.vue / TheFooter.vue 
  └ router
    index.ts
  └ store
    index.ts
  └ views
  App.vue
  main.ts
```

## Components

컴포넌트 주요 기능 정리

### &lt;TimeLine /&gt;

- 시작 날짜 ~ 종료 날짜 계산 기능 추가

- typescript 날짜 계산시 new Date() 앞에 +를 붙여야함 `+new Date()`

```typescript
const getDiffTimeLine = (start: string | Date , end: string | Date) => {
  const diff = +new Date(end) - +new Date(start);

  ...
}
```

- style 속성에 변수값을 넣을 때 typescript에서 `StyleValue` 타입을 지정해주면 됨

```html
<div class="timeline__image" :style="styles[index]"></div>
```

```typescript
const styles = computed(() => {
  const result: StyleValue = [];

  allTimeLineData.filter((item, index) => {
    result.push({
      color: item.identity_color.font,
      "background-color": item.identity_color.bg,
    });
  });

  return result;
});
```

### &lt;VisualStar /&gt;

- 상단 별 생성 컴포넌트로 분리

- style 속성에 속성 값을 추가할 때 typescript에서 `CSSProperties` 타입 추가

```html
<div class="star" :style="starStyles" :class="`star--${props.index}`"></div>
```

```typescript
// ...
const starStyles = computed(() => {
  const top = randomPosition(1, 100);
  const left = randomPosition(1, 100);
  const random = Math.floor(Math.random() * sizes.value.length);
  const randomSize = sizes.value[random];

  const result: CSSProperties = {
    "--star-left": `${left}%`,
    "--star-top": `${top}%`,
    "--star-size": `${randomSize}px`,
  };

  return result;
});
```

- 기존의 부모 컴포넌트 &lt;VisualSection /&gt;에서 분리 후 `appendChild()` 적용 대신 `v-for`를 이용
  - &lt;VisualSection /&gt;
  ```vue
  <visual-star
    v-for="i in 300"
    :key="i"
    :index="generateIndex(i)"
  ></visual-star>
  ```

### /projects/list

- 카테고리 필터 기능 추가 예정

#### 참고링크

- [CSSProperties Type](https://stackoverflow.com/questions/63081579/vue-typescript-how-to-find-right-type-of-object-used-for-style)
