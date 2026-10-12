** 산술 연산자 + - * / % **를 각각 실행해보기
// 예시로 연산자 두개만 작성했습니다.
- 5 / 3 = 1.6666666666666667 : 나눈 값, 소수까지 계산
- 5 % 3 = 2 : 나머지를 계산
- 5 ** 3 = 125
- 3 ** 5 = 243

[] 계산 순서 확인하기
- 괄호가 없을 때는 곱하기 부터 계산 됨.

[] 비교 연산자 결과 : boolean
3 > 4 = false boolean
3 >= 4 = false boolean
3 < 4 = true boolean
3 <= 4 = true boolean
3 === 4 = false boolean
3 !== 4 = true boolean

[] 복합 할당
- +=가 무엇의 줄임인지 : 변수에 값을 더한 후 다시 할당 한다. 

[] 타입이 다른 값
- '5' + 2 ==> 문자열 (string)
- '5' - 2 ==> 숫자 (number)

---

 1. 3 + 4 * 2        → 11  (typeof: number)  - 일치
 2. (3 + 4) * 2      → 14  (typeof: number) - 일치
 3. 10 / 3           → 3.3333333333333335  (typeof: number) - 불일치 (값 수정)
 4. 10 % 3           → 1  (typeof: number) -  일치
 5. '5' + 2          → "52"  (typeof: string) - 일치
 6. '5' - 2          → 3  (typeof: number) - 일치
 7. 5 >= 5           → true  (typeof: boolean) - 일치
 8. true && false    → false  (typeof: boolean) - 일치
 9. !0               → true  (typeof: boolean) - 일치
10. 2 ** 10          → 1024  (typeof: number) - 일치


