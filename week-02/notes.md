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

###  let 값 재할당
- let : 변수가 가리키는 대상을 언제든 새로운 값으로 재할당 할수 있음
- const : 변수가 처음 가리킨 참조 대상을 다른 것으로 다시 연결(재할당)하지 못하도록 잠금

### "기본은 const로 시작하고, 코드를 작성하다가 재할당이 필요해지는 순간에만 let으로 변경."
- 여러사람 협업할때, 실수로 기존 변수에 값을 덮어쓰는 사고 방지
- 변수의 생명주기를 추적하지 않아도 되고, 신경 쓸 필요가 없음


### 값의 타입을 직접 바꿔보기
console.log('42'+ 8); // 50
console.log(Number('42') + 8); // 42 string

console.log(String(42), typeof String(42)); // 42 string
console.log(Boolean(1), typeof Boolean(1)); // true boolean
console.log(Boolean(0), typeof Boolean(0)); // false boolean

console.log(Number('안녕'), typeof Number('안녕')); // NaN number


## 템플릿 리터럴 문장 조립하기 : 가독성이 좋음, 훨씬 읽기 쉬움

console.log('${customerName}님의 주문 ${orderCount}건'); //템플릿 리터럴 (Template Literal)
console.log(customerName + '님의 주문' + orderCount + "건" ); // 문자열 연결