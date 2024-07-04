---
title: "pnpm으로 모노레포 구축해보기"
date: "2024-07-04T23:00"
description: "pnpm 모노레포 세팅부터 사용법까지"
tags: ["monorepo"]
thumbnail: "./pnpm.webp"
---

## 모노레포의 개념
모노레포의 개념은 조금 길어서 [해당 글](/Monorepo를%20알아보자/)에 따로 정리했다.


## 모노레포 구축하기

### 1. pnpm 설치하기
``` bash
npm install -g pnpm
```
npm 명령어로 pnpm을 설치한다

### 2. 모노레포 설정하기
```bash
mkdir [폴더명]
cd [폴더명]
pnpm init
```

### 3. pnpm-workspace.yaml 에 packages 명시하기
프로젝트 구조는 아래와 같다
```bash
├──apps
	└── client
    
├──pakages
	├── ui
	├── types 
```

workspace 안에 있는 모든 프로젝트를 루트 디렉토리의 **pnpm-workspace.yaml** 에 명시해야 한다.
```yaml
// pnpm-workspace.yaml
packages:
	- "apps/*"
    - "packages/*"
```


## 모노레포 사용하기
모노레포의 기본적인 세팅을 했으니 사용하는 방법을 알아볼 것이다.



### 공통 dependency 설치하기
모노레포에서는 root 에 dependency를 설치하면 하위 packaged에서 dependency를 설치할 필요 없이 사용할 수 있다.

```bash
pnpm install [dependency 이름]
```

하지만 위 명령어로 설치한다면 
` ERR_PNPM_ADDING_TO_ROOT ` 라는 에러가 나온다.

위 에러가 나는 이유는 pnpm 에서 root에 실수로 dependency를 설치하는것을 방지하기 위해서 에러가 난다.

이를 해결하려면 **-w** 옵션을 사용해서 root에 dependency를 설치하는 것을 명시해 주어야 한다.

```bash
pnpm install [dependency 이름] -w
```


### 각 package 접근하기
각 package에는 **--filter** 또는 **-F** 옵션을 통해 접근할 수 있다.

예를 들어 `client` 에 접근하고 싶다면 해당 명령어를  사용하면 된다.

```bash
pnpm --filter client [원하는 명령어]
또는
pnpm --F client [원하는 명령어]
```

매번 명령어를 치는게 불편하다면, root의 `package.json` 에서 명령어를 지정할 수 있다.
```json
//package.json
"scripts": {
  "client": "pnpm --filter client",
  "ui": "pnpm --filter ui",
  "types": "pnpm --filter types",
}
```

위와 같이 설정하면 **--filter** 또는 **-F** 없이도 아래와 같이 사용 가능하다.
```bash
pnpm client [원하는 명령어]
```

### package 공유하기
`client` 에서 `ui` 에 있는 컴포넌트가 필요하다면 해당 명령어로 설치할 수 있다.

- root에서 명령어 입력
```bash
pnpm add ui -F client --workspace
```
- 해당 폴더에서 명령어 입력
```bash
pnpm add ui --workspace
```

## 마무리
모노레포 세팅을 다시 한번 정리하면서 명령어를 잘 숙지할수 있었다.
다음에 모노레포를 사용할 일이 생기면 복습하는 개념으로 다시 봐도 좋을것 같다.








