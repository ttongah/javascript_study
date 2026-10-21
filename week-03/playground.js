// 예시로 연산자 두개만 작성했습니다.
console.log('5 + 3 =', 5 + 3);
console.log('5 - 3 =', 5 - 3);
console.log('5 * 3 =', 5 * 3);
console.log('5 / 3 =', 5 / 3);
console.log('5 % 3 =', 5 % 3);
console.log('5 ** 3 =', 5 ** 3);

console.log('3 ** 5 =', 3 ** 5);

// 계산 순서 확인하기
console.log('3 + 4 * 2 =', 3 + 4 * 2);
console.log('(3 + 4) * 2 =', (3 + 4) * 2);

//  비교 연산자 
console.log('3 > 4 =', 3 > 4, typeof (3 > 4));
console.log('3 >= 4 =', 3 >= 4, typeof (3 >= 4));
console.log('3 < 4 =', 3 < 4, typeof (3 < 4));
console.log('3 <= 4 =', 3 <= 4, typeof (3 <= 4));
console.log('3 === 4 =', 3 === 4, typeof (3 === 4));
console.log('3 !== 4 =', 3 !== 4, typeof (3 !== 4));

//  논리연산자
const logic1 = true;
const logic2 = true;
const both = logic1 && logic2;
console.log('logic1 && logic2 =', both);

const logic3 = true;
const logic4 = false;
const both2 = logic3 && logic4;
console.log('logic3 && logic4 =', both2);

const logic5 = true;
const logic6 = false;
const both3 = logic5 && logic6;
console.log('logic5 && logic6 =', both3);

const logic7 = true;
const logic8 = false;
const both4 = logic7 && logic8;
console.log('logic7 && logic8 =', both4);

//  논리연산자 추가 (거짓,참)
const logic9 = false;
const logic10 = true;
const both5 = logic9 && logic10;
console.log('logic9 && logic10 =', both5);

//  논리연산자 추가 (거짓.거짓)
const logic11 = false;
const logic12 = false;
const both6 = logic11 && logic12;
console.log('logic11 && logic12 =', both6);

const logic2_1 = true;
const logic2_2 = true;
const both2_1 = logic2_1 || logic2_2;
console.log('logic2_1 || logic2_2 =', both2_1);

const logic2_3 = true;
const logic2_4 = false;
const both2_2 = logic2_3 || logic2_4;
console.log('logic2_3 || logic2_4 =', both2_2);

const logic2_5 = false;
const logic2_6 = false;
const both2_3 = logic2_5 || logic2_6;
console.log('logic2_5 || logic2_6 =', both2_3);

//  논리연산자 추가 (거짓/참)
const logic2_7 = false;
const logic2_8 = true;
const both2_4 = logic2_7 || logic2_8;
console.log('logic2_7 || logic2_8 =', both2_4);


const logic3_1 = true;
console.log(!logic3_1);

console.log('!0 =', !0 );
console.log("!'' =", !'' );
console.log("!null =", !null );
console.log('!1 =', !1 );
console.log('!-1 =', !-1 );
console.log("!'oh' =", !'oh' );


//  복합 할당
let point = 10;
console.log('시작 = ', point);

point += 5; 
console.log('+= 5후 = ', point);

point -= 3; 
console.log('-= 3후 = ', point);

point *= 2; 
console.log('*= 2후 = ', point);

let message = "Hello";
message += " World!"; 
console.log(message); 



// 타입이 다른 값을 섞어보기
console.log("'5' + 2 =", '5' + 2);
console.log("'5' - 2 =", '5' - 2);

console.log("'5' + 2 =", '5' + 2, typeof('5' + 2) );
console.log("'5' - 2 =", '5' - 2, typeof('5' - 2));


console.log("true  && true  :", true && true);