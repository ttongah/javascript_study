// predictions.md 를 커밋한 뒤에 실행하세요.
//   node week-03/check.js

const EXPRESSIONS = [
  '3 + 4 * 2',
  '(3 + 4) * 2',
  '10 / 3',
  '10 % 3',
  "'5' + 2",
  "'5' - 2",
  '5 >= 5',
  'true && false',
  '!0',
  '2 ** 10',
];

// 결과가 문자열인지 숫자인지 눈에 보이게: 문자열에는 따옴표를 붙입니다.
function show(value) {
  if (typeof value === 'string') return JSON.stringify(value);
  return String(value);
}

// 표현식을 문자열로 두고 eval로 평가합니다. eval은 평소 쓰지 마세요.
// 여기서는 "표현식 원문과 결과를 나란히 찍는다"는 목적에만 씁니다.
EXPRESSIONS.forEach((source, index) => {
  const result = eval(source);
  console.log(
    `${String(index + 1).padStart(2)}. ${source.padEnd(16)} → ${show(result)}  (typeof: ${typeof result})`
  );
});
