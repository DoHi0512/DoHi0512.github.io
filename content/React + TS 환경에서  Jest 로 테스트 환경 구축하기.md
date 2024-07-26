---
title: "React + TS 환경에서  Jest 로 테스트 환경 구축하기"
date: "2024-07-26"
description: "Jest로 React 에서 테스트 코드를 작성해보자"
tags: ["테스팅", "Jest"]
thumbnail: "./jest.webp"
---

## Jest란
**Jest**는 Facebook에서 만든 테스팅 프레임워크이다.

여러가지의 테스팅 라이브러리가 있지만 Jest를 선택한 이유는 다음과 같다.

1. React와 같은 JS 라이브러리 또는 프레임워크와 사용하기 최적화 되어있다.
2. 스냅샷 테스팅, Mock 과 같은 다양한 기능을 제공한다.
3. 간단한 사용 할 수 있고, 쉽게 학습 할 수 있다.
4. 상세한 공식 문서 및 다양한 정보들이 있다.

위와 같은 이유로 Jest를 선정하였고, 이제 사용법을 알아보자.

## 테스팅 환경 구축하기
### 1. Jest 설치하기
```bash
npm i -D jest @types/jest
```
```bash
npm i -D ts-test // typescript에서 jest를 사용하기 위해 설치
```

```bash
npm i -D jest-environment-jsdom // dom 을 테스트하기 위해 설치
```

test 코드는 개발환경에서만 사용되므로 ```-D``` 명령어를 사용해서 설치해준다.

### 2. config 설정하기
``` bash
npx ts-jest config:init
```

해당 명령어를 입력하면 ```jest.config.js``` 파일이 생긴다
```js
/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  
  // 추가
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], 
  testEnvironment: "jsdom",
};

```
- preset 에 ```ts-jest``` 를 설정해서 ts를 사용한다.
- setupFilesAfterEnv 에 공통 셋업파일을 지정한다.
- testEnviornment에 ```js-dom```을 설정해서 **react dom**을 테스트 할수 있도록 한다.

### 3. setupTests.ts 설정하기
```ts
// setupTests.ts
import "@testing-library/jest-dom";
```
해당 구문을 추가해 dom을 테스트하기 위한 추가 라이브러리를 불러온다.

### 4. package.json 수정하기
```json
"scripts": {
    "test": "jest", // 수정
 },
```

test 명령어를 **jest** 로 수정한다.
## 테스트 해보기
기본적인 테스트 코드를 작성해보자
```tsx
describe("react 에서 jest 사용하기", () => {
  it("기본 테스트", () => {
    expect(1 + 2).toBe(3);
  });
});
```
명령어를 입력해서 테스트가 잘 됐는지 확인해보자.

```bash
npm run test
```
![테스트 결과](https://velog.velcdn.com/images/dohi/post/d499f8bf-4fa8-447c-94bc-5776479f55ac/image.png)

테스트가 성공적으로 끝난걸 알 수 있다.

이번에는 **React DOM**을 테스트 해보자

```tsx
import { render, screen } from "@testing-library/react";

describe("react 에서 jest 사용하기", () => {
  it("기본 테스트", () => {
    expect(1 + 2).toBe(3);
  });
  
  it("dom 테스트", () => {
    render(<div data-testid="test-dom">DOM TEST</div>);
    const element = screen.getByTestId("test-dom");
    expect(element).toHaveTextContent("DOM TEST");
  });
});

```


```render```를 이용해 dom을 렌더링 한 뒤 ```getByTestId``` 를 사용해서 test-dom의 텍스트를 테스트하는 코드다.

한번 테스트해보자
```bash
npm run test
```

![](https://velog.velcdn.com/images/dohi/post/d1a5800a-fef4-47a0-b5a8-096864587aef/image.png)
테스트가 성공적으로 끝난걸 알 수 있다.


## 마무리
React + Typescript + Jest 로 테스팅 코드를 작성하는 방법을 알아보았다.
테스트 코드를 작성하는 것으로 코드의 오류를 발견하고 수정하는 작업을 효율적으로 할 수 있다는 것을 알았고 테스트 코드를 작성하는 습관을 들이겠다고 다짐했다.

## 참고
[Jest 공식 홈페이지](https://jestjs.io/)






