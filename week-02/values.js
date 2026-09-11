
const userAge=100;
const userId=6;

console.log(userAge+userId);

console.log(3+4);  // 숫자 더하기
console.log('3'+'4');  //  문자열 더하기


//  typeof 공부하기

let userKey=100;
console.log(typeof userKey);

userKey="홍길동";
console.log(typeof userKey) ;


//  숫자 · 문자열 · 불리언 · `undefined` · `null` 'typeof' 출력하기
const num = 123;
const str = "sky";
const bool = true;
const undef = undefined;
const empty = null;

console.log(typeof num);   // "number"
console.log(typeof str);   // "string"
console.log(typeof bool);  // "boolean"
console.log(typeof undef); // "undefined"
console.log(typeof empty); // "object"

// `undefined`와 `null`을 각각 만들어보기
let unNum ;
console.log(unNum);
console.log(typeof unNum);

let unNum2 = null ;
console.log(unNum2);
console.log(typeof unNum2);


//  cont 에러내기
const constis=100;
// constis = 30;
console.log(constis);


// let 값 재할당
let letis=99;
letis = 30;
console.log(letis);