## 에러 1
C:\project\study\javascript_study\week-01\hello.js:9
document.title ="타이틀 작성하기"
^
ReferenceError: document is not defined
    at Object.<anonymous> (C:\project\study\javascript_study\week-01\hello.js:9:1)
    at Module._compile (node:internal/modules/cjs/loader:1760:14)
    at Object..js (node:internal/modules/cjs/loader:1893:10)
    at Module.load (node:internal/modules/cjs/loader:1480:32)
    at Module._load (node:internal/modules/cjs/loader:1299:12)
    at TracingChannel.traceSync (node:diagnostics_channel:328:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:244:24)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

    - 브라우저 전용 객체
    - Node.js 표준 출력 함수인 console.log()로 변경
      
      // 수정 후
      console.log("Hello World");
---

## 에러 2
hello.js:14 Uncaught ReferenceError: process is not defined
    at hello.js:14:13

    - process는 Node.js 전용 객체
    - 터미널에서 명령어로 직접 실행

---
## 차이점
실행되는 환경(런타임)이 브라우저냐 컴퓨터 운영체제(OS)냐에 따라서 제공하는 내장 API, 전역 객체, 보안 권한에서 근본적인 차이가 발생

1. 브라우저의 JavaScript
   - UI 화면 제어, 브라우저 상호작용
   - DOM/UI 접근 : 가능
   - 실행 주체 : 사용자의 브라우저
   - 네트워크 역할 : 클라이언트(브라우저에서 서버로 요청 전송)
   - 파일시스템 접근 : 불가능

   사용자 화면을 동적으로 바꾸고 상호작용하는 UI 제어에 집중합니다. 
   사용자의 기기를 보호해야 하므로 로컬 파일 시스템이나 OS 핵심 기능에 직접 접근할 수 없는 샌드박스(Sandbox) 안에서 동작합니다

2. Node.js의 JavaScript
   - DOM/UI 접근 : 불가능(화면,DOM 개념 없음)
   - 실행 주체 : 서버 또는 로컬 컴퓨터 OS 터미널
   - 네트워크 역할 : 서버 호스팅 (직접 HTTP 서버를 띄우고 요청 수신)
   - 파일시스템 접근 : 가능

   화면이 없는 백엔드 애플리케이션이나 유틸리티 스크립트를 작성하는 데 쓰임
   OS에 직접 접근하여 로컬 파일을 읽고 쓰고, 포트를 열어 웹 서버를 구축하거나 
   데이터베이스에 접근할 수 있음

   ---
## 문법만 공부할 때 Node가 편한 이유 
브라우저 띄우고 개발자 콘솔 열고, 번거로운 과정없이 즉시 결과 출력하고 확인할수 있음.