---
title: "WebRTC에 대해 알아보자"
date: "2024-05-09T23:00"
description: "WebRTC 개념과 용어 정리"
tags: ["WEBRTC", "네트워크"]
thumbnail: "./webrtc.webp"
---

## 1. WebRTC 란?
WebRTC 는 **Web Real-Time Communication** 의 약자로 실시간으로 영상 통화, 음성 채팅, P2P 파일 공유 등에 사용되는 라이브러리다.

### 장점
- **real-time 에 흡사하는 낮은 Latency**
예를 들어 다른 스트리밍 기술인 HLS는 애플에서 개발된 Low Latency 기술임에도 약 **3s**의 지연시간을 가지고 있다.
하지만 WebRTC는 **real-time** 에 가까운 속도를 가지고 있다.
![참고사진](https://velog.velcdn.com/images/dohi/post/93fc6711-d612-41ec-b420-54a939224d89/image.png)



- **별도의 소프트웨어/플러그인 설치 없이 사용할 수 있다** 
WebRTC는 기본 **JS API** 라서 개발하는데 진입장벽이 낮고, 사용자가 별도의 소프트웨어나 플러그인을 설치하지 않고도 사용할 수 있다.




### 단점
- **UDP 로 동작**
UDP로 동작하기 때문에 매우 빠른 속도를 낼 수 있지만 이로 인한 데이터 손실이 발생할 수 있다.

- **크로스 브라우징 이슈**
WebRTC는 IOS, Android, FireFox와 같은 환경에서도 사용이 가능하지만 사람들이 잘 사용하지 않는 브라우저나 이전 버전에서는 동작하지 않을 수 있다.




## 2. 작동 원리
### 용어
- **SDP(Session Description Protocol)** : 코덱, 오디오 및 비디오 등과 같은 세션 연결에 대한 정보를 포함하는 프로토콜. 두 peer간에 SDP를 교환함으로 서로의 연결 방식을 알 수 있고. 이는 **SDP Offer(제안)** 과 **SDP Answer(응답)** 으로 나뉜다.

- **ICE(Interactive Connectivity Establishment)** : 데이터를 수신할 수 있는 공용 IP 주소 및 포트, 사용자는 **STUN** 서버에 요청을 함으로써 여러개의 Ice 후보를 갖게 된다.

- **STUN(Session Traversal Uilities for NAT)** : 각 peer 사이에 방화벽이 존재하거나, **NAT** 환경에 놓여 있는 경우에는 각 peer 간에 **Signaling**이 불가능하기 때문에 이를 서로 중개해주는 서버라고 생각하면 된다.


### 과정
정보가 전달되는 방식은 일반적으로 **Signaling** 이라는 프로세스로 동작한다.
두 peer는 서로의 정보를 모르기 때문에 일반적으로 WebSocket이나 제 3자 Signaling 서비스 등을 사용하여 동일한 채널로 연결한다.

동일한 채널에 있으면 SDP와 ICE 후보 교환을 통해 최적의 네트워크 경로를 찾은 뒤, 서로간의 통신이 이루어진다.

자세한 과정을 알아보자.
1. 두 peer는 일종의 Signaling 방법을 통해서 SDP를 교환한다. 하지만 아직 SDP 교환만 했을 뿐 통신은 불가능하다.

2. 두 peer간의 통신을 위해서는 데이터의 전송이 더 필요한데, 대부분의 장치가 NAT환경 또는 방화벽에 막혀 있기 때문에 ICE 라는 방법으로 데이터를 보낸다.

3. 백그라운드에서 SDP Offer가 교환되면 각 peer는 STUN서버에 ICE 후보들을 생성해달라고 요청한다. 

4. 생성한 ICE 후보들을 peer간 교환한 후, 네트워크가 사용할 최적의 ICE 후보를 선택한다.

5. ICE 후보가 교환되고 최적의 네트워크 경로가 탐색되면 두 peer간의 데이터 통신이 이루어진다.


이 과정에서는 한가지 문제가 있는데, ICE 후보를 모으는데 시간이 걸릴 수 있다.
일반적으로 각 peer는 ICE 후보를 수집해서 한꺼번에 교환할 뿐만 아니라 한쪽 peer의 ICE 후보 수집이 완료되어야 다른 한쪽 peer의 ICE 후보 수집이 시작된다.

이런 작업을 병렬적으로 수행할 수 있게 하는것이 **Trickle ICE**다.
Trickle ICE는 ICE 후보를 찾는 즉시 peer간 교환한다. 이로 인해 상호 연결 가능한 ICE 후보를 더 빠르게 찾아낼 수 있다.

## 마무리
프로젝트에서 WebRTC를 사용할 일이 생겨서 공부하게 되었는데 알아야 할 용어도 많고 네트워크를 많이 안 하다 보니까 조금 어려웠던 것 같다.
그래도 블로그에 정리하면서 이해도 더 잘 되었고 나중에 기억이 잘 안나는 부분이 있을 때 복습할 수 있을것 같다.

## 참고
[How does WebRTC work](https://medium.com/agora-io/how-does-webrtc-work-996748603141)

[WebRTC](https://webrtc.org/?hl=ko)

[WebRTC API](https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API)







