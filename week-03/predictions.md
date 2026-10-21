# 검증 전 예측

> **1단계(연산자 익히기)를 마친 뒤에 채우세요.** 그리고 이 파일을 커밋한 뒤에야
> `check.js`를 돌릴 수 있습니다.
>
> 근거란에는 **1단계에서 알아낸 규칙**을 적으세요. "느낌상"은 근거가 아닙니다.
> 1단계에서 다루지 않은 것이 하나 있습니다. 그건 `모름`이라고 쓰고 왜 모르겠는지 적으면 됩니다.
> 모른다고 적는 건 감점이 아닙니다. 아는 척이 감점입니다.

| # | 표현식 | 예측 | 근거 (1단계에서 알아낸 규칙) |
|---|---|---|---|
| 1 | `3 + 4 * 2` | 11 | 곱셈이 덧셈보다 우선순위가 높음 |
| 2 | `(3 + 4) * 2` | 14 | 괄호는 연산자 보다 먼저 계산 |
| 3 | `10 / 3` | 3.3333333333333335 | 소수까지 계산 |
| 4 | `10 % 3` | 1 | 나누고 남은 값 |
| 5 | `'5' + 2` | 52 | 문자열이면 문자열로 더하여 짐 |
| 6 | `'5' - 2` | 3 | -는 문자열 연결 기능 없음 |
| 7 | `5 >= 5` | true | 크거나 같다... 모름 |
| 8 | `true && false` | false | AND는 모두 true 일때만 true |
| 9 | `!0` | true | 0는 false 이므로  |
| 10 | `2 ** 10` | 1024 | 2를 10번 곱하기 |

Check.js 실행결과
 1. 3 + 4 * 2        → 11  (typeof: number)
 2. (3 + 4) * 2      → 14  (typeof: number)
 3. 10 / 3           → 3.3333333333333335  (typeof: number)
 4. 10 % 3           → 1  (typeof: number)
 5. '5' + 2          → "52"  (typeof: string)
 6. '5' - 2          → 3  (typeof: number)
 7. 5 >= 5           → true  (typeof: boolean)
 8. true && false    → false  (typeof: boolean)
 9. !0               → true  (typeof: boolean)
10. 2 ** 10          → 1024  (typeof: number)

`10 / 3` | 3.3333333333333335 | 소수까지 계산 |
- 암산으로 결과 예측(3.33333...), 
- 정확한 수치 계산 해야함. 3.3333333333333335
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#%EC%82%B0%EC%88%A0_%EC%97%B0%EC%82%B0%EC%9E%90


비교연산자 (>= 크거나 같음)
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#%EB%B9%84%EA%B5%90_%EC%97%B0%EC%82%B0%EC%9E%90