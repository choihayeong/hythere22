# hythere
personal website for portfolio

## 📁 Directory

### Component
- 컴포넌트 주요 기능 정리

#### <TimeLine />
- 시작 날짜 ~ 종료 날짜 계산 기능 추가

- typescript 날짜 계산시 new Date() 앞에 +를 붙여야함 ```+new Date()```
```typescript
const getDiffTimeLine = (start: string | Date , end: string | Date) => {
  const diff = +new Date(end) - +new Date(start); 
  
  ...
}
```

- style 속성에 변수값을 넣을 때 typescript에서 ```StyleValue``` 타입을 지정해주면 됨
```html
<div class="timeline__image" :style="styles[index]"></div>
```
```typescript
const styles = computed(() => {
  const result: StyleValue = [];

  allTimeLineData.filter((item, index) => {
    result.push({
      "color": item.identity_color.font,
      "background-color": item.identity_color.bg,
    });
  })

  return result;
});
```

#### /projects/list
- 카테고리 필터 기능 추가 예정
