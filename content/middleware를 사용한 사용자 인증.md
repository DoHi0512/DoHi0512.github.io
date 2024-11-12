---
title: "Middleware를 사용한 사용자 인증"
date: "2024-10-28"
description: "nextjs에서 middleware 사용해보기"
tags: ["middleware", "Next.js"]
thumbnail: "./middleware.webp"
---

## Middlware란?
Nextjs 공식에서는 이렇게 설명하고 있다.
> Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

쉽게 말해서 **요청이 들어오기 전에(페이지가 렌더링되기 전에)** 코드를 실행하는 것이다.
Next.js 12.2 부터 stable 되었으며 아래와 같은 상황에서 사용 가능하다.
- **인증 및 권한 부여**: 특정 페이지의 사용자 권한 확인.
- **서버 측 리디렉션(redirection)**: 특정 조건에 따라 서버에서의 사용자 리디렉션.
- **경로 재설정**: A/B 테스트, 레거시 경로 등 동적으로 경로 재설정.
- **봇 감지**: 봇 트래픽 감지 및 차단.

이 밖에도 여러가지 상황이 있지만 오늘은 **인증 및 권한 부여**를 해보자.

## 사용방법
먼저 middlware.ts 파일을 만든다.
- app router: src 폴더 밑에 생성.
- pages router: pages 폴더와 같은 경로에 생성.

```ts
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
  matcher: '/about/:path*',
}
```
하나씩 살펴보자

### 함수
```ts
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
```
- `middleware` 라는 함수명으로 export한다 (함수명은 반드시 **middlware**여야 한다.)

- 파라미터로 `NextRequest` 객체를 받고 있다.
`NextRequest` 로 쿠키를 설정하거나 다양한 작업을 할 수 있다. 
[NextRequest](https://nextjs.org/docs/app/api-reference/functions/next-request)

- `NextResponse` redirect 함수를 호출하고 return 한다.
`NextResponse` 객체로 페이지 redirect, 쿠키 설정, json 등 다양한 작업을 할 수 있다.
[NextResponse](https://nextjs.org/docs/app/api-reference/functions/next-response)

### matcher
```ts
export const config = {
  matcher: '/about/:path*',
}
```
middleware가 실행될 경로를 설정해주는 객체다. (객체명은 반드시 **config**여야 한다.)
위 코드는 `/about` 뒤에 오는 모든 경로를 포함한다.

배열을 사용해 matcher를 여러개 설정할 수도 있다.
```ts
export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}
```
위 코드는 `/about`, `dashboard` 뒤에 오는 모든 경로를 포함한다.

이 밖에도 정규식 등 다양한 설정을 할 수 있다.

## 사용자 인증
### 기존 방식
middleware를 알아봤으니 이제 사용자 인증을 해보자.
처음에는 `cookies-next` 라이브러리로 쿠키를 저장하고, middleware를 통해 검증하는 로직을 사용했다.
```ts
import { setCookie } from "cookies-next";
export const useLoginMutation = () => {
  ...
  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res;
      setCookie("accessToken", accessToken);
      setCookie("refreshToken", refreshToken);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("로그인 성공!");
    },
  });
  ...
};
```
로그인 성공시 refreshToken과 accessToken을 받아서 `cookies-next` 라이브러리를 사용해 쿠키에 저장하는 코드다.

middleware 코드를 한번 보자.
```ts
// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  if (!req.cookies.has("accessToken"))
    return NextResponse.redirect(new URL("/login", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/review/:path*", "/category/:path*"],
};
```
위 코드는 `/review`, `/category` 를 포함하는 모든 경로에서 로그인이 되어있지 않다면(accessToken이 없다면) 로그인 페이지로 redirect 하는 코드다.

보기에는 잘 작동할것 같지만, `cookies-next` 라이브러리가 비동기적으로 동작해서 브라우저에는 쿠키 값이 나오지만, middleware는 쿠키 값을 인식하지 못하고 새로고침을 해야지 인식하는 문제가 있었다.

Next.js 의 특성상 cookie는 `Server Action` 또는 `Route Hanlder` 에서만 가능했기에 클라이언트에서는 쿠키를 설정할 방법이 없었다. (`Server Component` 에서도 불가능.)

그래서 로그인 로직을 middleware로 옮기고, 서버에서 로그인과 인증을 모두 처리하는 방법을 시도해 보았다.
### 새로운 방식
```ts
import { NextRequest, NextResponse } from "next/server";
import { server } from "./api/instance/instance";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/oauth")) {
    const code = req.nextUrl.searchParams.get("code");
    const provider = req.nextUrl.searchParams.get("provider");
    const res = NextResponse.redirect(new URL("/", req.url));
    await server
      .post(`auth/${provider}/token`, {
        authorizationCode: code,
        redirectUri: '/',
      })
      .then((response) => {
        const { refreshToken, accessToken } = response.data;

        res.cookies.set("accessToken", accessToken, {
          maxAge: 60 * 60 * 24 * 7, //일주일
        });
        res.cookies.set("refreshToken", refreshToken, {
          maxAge: 60 * 60 * 24 * 30, //한달,
        });
      });
    return res;
  }

  if (!req.cookies.has("accessToken"))
    return NextResponse.redirect(new URL("/login", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/review/:path*", "/category/:path*", "/oauth"],
};

```
기존의 클라이언트에서의 login 로직을 제거하고, middleware에서 로그인을 하도록 변경했다.
1. `req` 파라미터로 현재 경로를 찾고, 만약 `/oauth`(로그인) 경로라면 로그인을 시도한다.
2. 로그인이 성공하면 `NextResponse` 객체에 `cookie` 를 저장해 return한다.
3. `/oauth` 경로가 아니라면 사용자 인증 후 페이지를 로드한다.

 **server** 에서 **response**에 직접 쿠키를 설정하는 방법으로 새로고침 없이 middleware에서도 정상적으로 쿠키를 읽고, 사용자 인증 처리를 할 수 있었다.
 
 
 ## 후기
 Nextjs에서의 SSR 방식이다 보니까 cookie를 다루는게 쉽지 않다. 라이브러리를 사용해 보았지만 근본적인 해결 방법은 될 수 없었고 Nextjs 공식 문서를 찾아보면서 해결 할 수 있었다.
route handler로 구현하는것도 생각해 보았지만 별 차이가 없을것 같아서 middleware를 선택했다. middleware를 사용하여 해결하긴 했지만 더 좋은 방법이 없을까 고민하게 된다.
만약 더 좋은 방법을 찾으면 글을 업데이트 하겠다.

## 참조
[Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)




