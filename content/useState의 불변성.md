---
title: "useState의 불변성이란 무엇일까?"
date: "2023-09-08"
description: "useState의 불변성에 대해 알아보자"
tags: ["면접", "CS"]
thumbnail: "./useState.webp"
---

# 개요
React를 사용해서 개발하다 보면 `useState` 를 사용하는 상황이 많다. 


```js
const [state,setState] = useState(0);


state = state + 1 // 리렌더링 되지 않음

setState(prev => prev + 1) // 리렌더링

```

위와 같은 코드를 보았을 때 `state` 의 상태를 직접 변경하면 리렌더링이 일어나지 않는다.
하지만 `setState` 를 사용해서 `state` 를 변경했을때는 리렌더링이 일어난다.
왜 이런 일이 일어나는지 지금부터 알아보자.

# useState의 불변성
React의 state는 **객체** 형태이다. 객체는 참조형 자료 주소이기 때문에 state의 값을 직접 변경하면 참조하는 자료 주소는 바뀌지 않는다.

React에서는 상태 변경의 기준을 **참조 값의 변경**이다. 이 때문에 state를 직접 변경한다면 React에서는 state가 변하지 않았다고 생각하고 리렌더링을 하지 않는다.

또한 값을 직접 변경하게 된다면 비교할 값이 없어지므로 값이 변경됬다는걸 알지 못한다.

다음은 간단한 useState의 코드이다


```js
const useState = (initialValue) => {
  let value = initialValue;
  
  const state = () => value;
  
  const setState = (newValue) => {
    value = newValue;
  }
  
  return [state,setState];
}

```

실제로는 훨씬 복잡하게 구현되어 있지만, 설명을 위해서는 이 정도 코드도 충분하다.

이 코드에서 `value` 라는 값을 `setState` 에서 핸들링 하고 있는데, 여기에서 [클로저](https://dohi0512.github.io/%ED%81%B4%EB%A1%9C%EC%A0%80,%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85,%EC%8A%A4%EC%BD%94%ED%94%84/)라는 개념이 나온다.

클로저를 사용해서 `setState`에서 `state`에 접근할 수 있게 되고, 값을 변경할수 있게 된다.

이처럼 `useState`의 **불변성** 때문에 우리는 `state` 의 값을 직접 변경하지 않는것이다.

# 마무리
useState의 불변성에 대해 간단히 정리해봤는데 이전에 공부했던 개념인 클로저가 나와서 쉽게 이해할 수 있었다. 지금처럼 차근차근 공부하면서 개념을 쌓아 나가는 개발자가 되야겠다.
