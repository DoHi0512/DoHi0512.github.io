---
title: "Lighthouse를 사용해서 성능을 측정해 보자"
date: "2023-08-22T21:00"
description: "Lighthouse를 사용해서 성능을 측정하는 방법을 알아보자"
tags: ["프론트엔드", "최적화"]
thumbnail: "./optimize2.png"
---

# 서론

앞선 글에서 프론트엔드의 성능 최적화가 중요한 이유에 대해 설명했는데, 이번에는 Lighthouse를 사용해서 현재 내 웹사이트의 성능을 측정해보자.

# Lighthouse

## Lighthouse?

- 구글에서 만든 툴로, 웹사이트의 성능을 측정하고 개선 방향을 제시해주는 자동화 툴이다.
- 성능 점수를 측정하고 개선 가이드를 확인함으로써 어떤 부분을 최적화 해야 하는지 알 수 있다.
- Chrome 개발자 도구의 패널에서 쉽게 사용이 가능하다.

## 사용법

Chrome 패널에서 Lighthouse를 찾아 클릭한다

![](https://velog.velcdn.com/images/dohi/post/d5ca002b-81aa-4ab1-b3e1-8cc27d93866b/image.png)

모바일, 데스크톱중 하나를 선택하고 자신이 검사하고 싶은 카테고리를 선택하면 된다.
![](https://velog.velcdn.com/images/dohi/post/fc630fad-18b7-485c-ae73-ca6e5ef77ae3/image.png)

각 검사 항목은 아래와 같다

> - #### 성능(Performance)
>   웹 페이지의 로딩 과정에서 발생하는 성능 문제를 분석<br></br>
> - #### 접근성(Accessibility)
>   서비스의 사용자 접근성 문제를 분석<br></br>
> - #### 권장사항(Best practices)
>   웹사이트의 보안 측면과 웹 개발의 표준에 중점을 두고 분석<br></br>
> - #### 검색엔진 최적화(SEO)
>   검색 엔진에 얼마나 잘 표시되는지 분석<br></br>
> - #### 프로그레시브 웹 앱(Progressive Web App)
>   PWA와 관련된 문제를 분석

나는 velog의 메인 페이지를 측정할 것이므로 데스크톱을 선택하였고, 성능 위주로 분석할 것이므로 성능만 측정할 것이다.

![](https://velog.velcdn.com/images/dohi/post/0f83caf4-b5ec-4ba7-bddd-55695b54de39/image.png)

성능 측정 결과 92점이라는 높은 점수가 나왔고, 이 점수는 6가지의 지표에 가중치를 적용해서 계산한 결과다.

그럼 6가지 지표가 무엇인지 알아보자

> - #### First Contentful Paint (FCP)
>   FCP는 페이지가 로드될 때 브라우저가 DOM 콘텐츠의 첫 번째 부분을 렌더링하는 데 걸리는 시간을 의미함. **10%의 가중치를 가짐**<br></br>
> - #### Largest Contentful Paint (LCP)
>   LCP는 페이지가 로드될 때 화면 내에 있는 가장 큰 이미지나 텍스트 요소가 렌더링되기까지 걸리는 시간을 나타냄. **25%의 가중치를 가짐**<br></br>
> - #### Total Blocking Time (TBT)
>   TBT는 페이지가 클릭, 키보드 입력 등의 입력에 응답하지 않도록 차단된 시간을 총합한 지표임. **30%의 가중치를 가짐**<br></br>
> - #### Cumulative Layout Shift (CLS)
>   CLS는 페이지 로드 과정에서 발생하는 예기치 못한 레이아웃 이동을 측정한 지표임. **15%의 가중치를 가짐**<br></br>
> - #### Speed Index (SI)
>   SI는 페이지 로드 중에 콘텐츠가 시각적으로 표시되는 속도를 나타내는 지표임. **10%의 가중치를 가짐**<br></br>
> - #### Time to Interactive (TTI)
>   TTI는 사용자가 페이지와 상호 작용이 가능한 시점까지 걸리는 시간을 측정한 지표임. **10%의 가중치를 가짐**<br></br>
> [Lighthouse 공식문서](https://developer.chrome.com/ko/docs/lighthouse/performance/performance-scoring/#lighthouse-8)


또한 스크롤을 내리면 6가지 지표에 기반한 웹 페이지의 문제점과 해결 방안을 제시해준다.
![](https://velog.velcdn.com/images/dohi/post/93faf0fe-bd9e-48fd-bb2e-ba3b591fa025/image.png)

# 마무리

웹 성능 최적화에 관심이 많아서 이것저것 찾아보며 공부하고 있는데 Lighthouse는 사용하기 간편해서 사람들이 많이 사용하는것 같다.

예전에는 "코드는 돌아가기만 하면 그만" 이라는 생각을 가지고 개발을 했었는데 지금 생각하니 정말 부끄러운 생각이다. 계속해서 성능 최적화를 공부하면서 현재에 안주하지 않고 계속해서 성장하는 진짜 개발자가 되기 위해서 노력해야겠다.
