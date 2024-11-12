---
title: "redux-persist + Next.js Hydrate 오류 해결법"
date: "2024-11-12"
description: "redux-persist + nextjs app router"
tags: ["redux-persist","redux", "Next.js", "SSR"]
thumbnail: "./redux.webp"
---
## redux-persist
`redux-persist` 는 redux store를 **persist**하고 **rehydrate** 하기 위해서 사용한다.
기존의 redux store는 새로고침을 하면 저장된 상태가 모두 사라지는데, redux-persist 를 이용해 이를 방지할 수 있다.
그럼 어떻게 사용하는지 알아보자.

## 사용 방법
기존의 redux 코드를 보자

**store.ts**
```ts
import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, useStore } from 'react-redux';
import recentPost from './board';
export const makeStore = () => {
  return configureStore({
    reducer: {
      recentPost
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
```

**provider.ts**
```ts
'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}
```

기존 코드는 `makeStore` 함수를 통해 저장소가 한번만 생성되도록 한다(useRef의 참조값) 서버에서는 한 번만 렌더링되지만 클라이언트에서는 여러번 렌더링 가능하다.
[redux 공식문서](https://redux.js.org/usage/nextjs#providing-the-store)


이처럼 redux 공식문서에는 Next.js 에서 사용하는 방법을 알려주고 있다.
하지만 공식 사양이 아닌 `redux-persist`는 문서가 없어서 어려움을 겪었는데, 해결 방법을 찾아서 공유하고자 한다.

### redux-persist 설치

먼저 `redux-persist`를 설치한다

> npm install redux-persist

또는 
> yarn add redux-persist


### persistConfig 설정
먼저 persistConfig 설정을 통해 config를 설정한다.

```ts
import storage from 'redux-persist/lib/storage'; //localstorage 사용 경우
import sessionStorage from 'redux-persist/lib/storage';  // session 사용 경우

import recentPost from './board';
const persistConfig = {
  key: 'persist',
  storage, // localStorage 사용
  whitelist: ['recentPost'] // redux-persist를 적용할 slice 선택
};
```

위 코드는 localStorage에 redux를 저장하고, `recentPost` 라는 slice에 redux-persist를 적용한다는 코드다.

`whitelist` 말고 `blacklist` 를 사용하여 slice를 제외하는것도 가능하다.


### makeStore 함수 수정
```ts
const rootReducer = combineReducers({
  recentPost,
});

export const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return configureStore({
      reducer: rootReducer
    });
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            ignoredPaths: ['__persistor']
          }
        })
    });
    store.__persistor = persistStore(store);
    return store;
  }
};
```
코드를 하나씩 살펴보자
```ts
const rootReducer = combineReducers({
  recentPost,
  ...
});
```
`conbineReducers` 함수를 이용해 slice를 합친다.

```ts
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return configureStore({
      reducer: rootReducer
    });
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            ignoredPaths: ['__persistor']
          }
        })
    });
    store.__persistor = persistStore(store);
    return store;
  }
};
```

먼저 `isServer` 변수로 현재 서버인지, 클라이언트인지 확인한다.
만약 서버라면 기존 방법대로 store를 생성한다(서버에서는 persist를 할 필요가 없음)

만약 클라이언트라면 `persistReducer` 를 사용해 persist reducer를 만든다.
그 후 store를 만드는데 middleware를 사용하 직렬화 하지 않을 Action과 Path를 설정한다.

redux-persist는 storage에 값을 저장할 때 **직렬화(serialize)** 해서 저장하기 때문에 직렬화 되지 않는 값을 직렬화 하려고 하면 오류가 나기 때문에 제외하는 것이다.

이를 위해 redux-persist에서 제공하는 Action을 제외하고, 내가 만들 `__persistor` 도 path에서 제외한다.

그 후 store에 **__persistor** 속성을 추가하여 클라이언트에서 상태 유지 관리를 할 수 있게 한다.


### provider 수정
```ts
'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { PersistGate } from 'redux-persist/integration/react';
export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  return (
      <Provider store={storeRef.current}>
        <PersistGate loading={null} persistor={storeRef.current.__persistor}>
          {children}
        </PersistGate>
      </Provider>
  );
}
```

기존 `Provider` 를 `PersistGate` 로 한번 더 감싸준다.

`loading` 에는 store가 로딩되는 동안 보여줄 화면을 넣으면 된다.

`persistor` 에는 기존에 만들었던 **__persistor** 를 넣어준다.

실제로 실행하면 잘 되는 모습을 볼 수 있다.



## 후기
새로고침시에도 값을 유지하기 위해서 redux-persist를 사용해 보았다.
기존 redux + next.js  는 공식 문서에 가이드가 나와있어서 쉽게 할 수 있었다.
하지만 redux-persist + ssr 구현은 공식문서에 나와있지 않아서 쉽지 않았지만 자료를 찾아보면서 결국 성공할 수 있어서 뿌듯하다.
나와 같은 어려움을 겪는 사람이 있다면 위 방법으로 해결할 수 있기를 바란다.


## 참조
[redux + next.js 공식 문서](https://redux.js.org/usage/nextjs)

[stackoverflow](https://stackoverflow.com/questions/77783551/how-to-use-redux-persist-with-next-js-app-router)
