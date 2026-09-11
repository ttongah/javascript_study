### 같은 `+`가 다르게 동작하는 것 확인하기
- console.log(3+4)  // 숫자 더하기
- console.log('3'+'4')  //  문자열 더하기

### typeof
- 타입은 변수가 아니라 '값'의 것
- 변수 자체의 본질이 바뀐 것이 아님.

### 숫자 · 문자열 · 불리언 · `undefined` · `null` 타입 출력하기
- null의 typeof 결과는 "null"이 아니라 "object"로 나옴


### `undefined`와 `null`을 각각 만들어보기
- undefined (자바스크립트 엔진 자동 부여) : 아직 값이 없음을 알려주는 상태
- null (개발자의 몫) : 값이 없음을 명시(의도적)

### 'const' 변수 재할당 에러
-TypeError: Assignment to constant variable.
  -> 선언된 상수 변수에 새로운 값을 다시 할당(재할당)하려고 할 때 발생 에러