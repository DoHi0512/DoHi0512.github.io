---
title: "검색창에 www.google.com을 입력하면 무슨 일이 일어날까?"
date: "2023-09-04T23:00"
description: "검색창에 주소를 입력하고 들어가기까지의 과정을 알아보자"
tags: ["프론트엔드", "면접", "CS"]
thumbnail: "./google.png"
---





## 이 글을 작성한 계기
많은 사람들은 검색창에 naver또는 google과 같은 다양한 웹사이트를 찾아서 들어간다.

너무나 자연스러운 일이라서 이게 어떻게 동작하는지, 어떤 과정이 필요한지는 알지 못하는 사람들이 많을 것이다.

그래서 오늘은 검색창에 주소를 치고 웹사이트를 들어가기까지의 과정을 설명할 것이다.

## 1. 브라우저는 캐싱된 DNS 기록을 통해 입력한 도메인주소와 대응되는 IP 주소를 확인한다

![How DNS works](https://velog.velcdn.com/images/dohi/post/21a10d29-e4ef-49a6-8ad2-324514476b86/image.png)


> **DNS (Domain Name System)** :
> 영문/한글 주소를 IP 네트워크에서 찾아갈 수 있는 IP로 변환해 준다. 


`DNS` 는 캐시를 4가지 과정을 통해 확인한다.

#### 1. 브라우저 캐시
#### 2. OS 캐시
#### 3. router 캐시
#### 4. ISP 캐시


이렇게 많은 곳에 캐시를 저장하는 이유는 **네트워크 트래픽** 조절과 **데이터 전송 시간** 을 줄이기 위해서이다.


## 2. 요청한 URL이 캐시에 없으면, ISP의 DNS서버가 서버의 IP주소를 찾기 위해 DNS 쿼리를 날린다.
![Recursive Search](https://velog.velcdn.com/images/dohi/post/a0f385ac-77bb-4d20-8f1d-564b6adb9f68/image.png)

> **ISP (Internet Service Provider)** :
> 인터넷 서비스 제공업체로, 한국에서는 KT, SKT 텔레콤등이 이에 해당한다.

google.com에 접속하기 위해서는 IP주소가 반드시 필요하므로, DNS Query는 다른 DNS 서버를 검색해서 IP를 찾는 것이다.

이러한 상황에서 ISP의 DNS 서버는 `DNS recursion` 이라 부르고, 다른 DNS 서버는 `name server` 라고 불린다.

이러한 검색을 `recursive search` 라고 부르는데, 찾지 못해서 에러가 발생하거나 IP를 찾을 때까지 계속 반복한다.


## 3.브라우저와 서버가 TCP CONNECTION 을 한다.
브라우저가 정상적인 IP를 받게 된다면, 서버와 connection을 하게 된다.

인터넷 프로토콜을 이용해서 connection을 하게 되는데, **HTTP** 는 일반적으로 **TCP** 를 사용한다.

## 4. 브라우저가 웹 서버에 HTTP 요청을 한다.
서버와 브라우저가 연결되었으니, 웹 서버에 HTTP 요청을 보내서 웹 페이지를 받아온다.

## 5. 서버가 요청을 처리하고 HTTP Response를 보낸다.
서버가 요청을 처리한 뒤, google.com 웹 페이지를 전송한다.

## 6. 받아온 웹사이트를 브라우저가 렌더링한다.
브라우저의 렌더링 과정은 [이 글](https://dohi0512.github.io/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98%20%EB%A0%8C%EB%8D%94%EB%A7%81%20%EA%B3%BC%EC%A0%95/)에서 자세히 다루고 있으니 참고 바란다.

## 결론
검색창에 google.com을 입력하면 정말 많은 일들이 일어나지만, 대부분의 사람들은 이런 일이 일어난지도 모르고 있다. 그만큼 짧은 시간에 많은 일이 일어난다는 뜻이고, 정말 신기한 일이다. 

면접을 준비하면서 이와 같은 다양한 지식을 습득할 수 있었다. 더욱 좋은 개발자가 되는 그날까지 열심히 해보자!!