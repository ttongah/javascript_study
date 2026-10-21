// 윤년규칙
const year = 2400;

const isDivisibleBy4 = year % 4 === 0; //4의 배수
const isDivisibleBy100 = year % 100 === 0; // 100의 배수
const isDivisibleBy400 = year % 400 === 0; // 400의 배수 

//4의 배수이고 100의 배수가 아니거나, 400의 배수면 윤년
const isLeapYear = (isDivisibleBy4 && !isDivisibleBy100) || isDivisibleBy400;

console.log(`${year}년 → 4의 배수: ${isDivisibleBy4} / 100의 배수: ${isDivisibleBy100} / 400의 배수: ${isDivisibleBy400} / 윤년: ${isLeapYear}`);