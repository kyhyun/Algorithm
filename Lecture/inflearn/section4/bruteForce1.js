// Section 4. 완전 탐색 (브루트 포스) - 자리수의 합
/* 
문제 풀이 과정
[v] 이해하기 - 각 자릿 수 합이 가장 큰 수를 출력한다. (같다면, 원래 숫자가 큰 수가 출력된다.)
[v] 자릿 수를 계산하기 위해 배열 안의 숫자를 꺼내서 각자 자릿수를 계산하기 위해 배열을 가공한다.
[v] 방법 >> 내장 함수 split과 reduce를 이용한 방법 vs 10의 배수로 나눈 후 값을 더하는 방법
- 자릿 수의 합 비교
[v] 현재 자릿수 합이 이전 최대 값보다 큰지 비교 -> 크다면 최대 값을 현재 자릿수로 교체, 정답을 현재 원본 숫자로 처리
[v] 만약 현재 자릿수 합이 이전 최대 값과 같다면 -> 
[v] 현재 반복 분기의 원본 숫자가 이전 정답의 숫자보다 큰지 비교 -> 이전 정답을 현재 반복 분기의 원본 숫자로 교체
*/
function solution(n, arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (const x of arr) {
    // 128, 460, 40, 521, 137, 123
    let temp = x;
    let sum = 0; // 사본 값을 담을 배열과 더한 값을 담을 변수 선언
    while (temp) {
      // 128
      // 조건 : temp 가 0이 되면 종료
      sum += temp % 10; // 예) 8 + 2 + 1 => 11
      temp = Math.floor(temp / 10); // temp에 나눈 후 나머지를 버리면서 temp를 갱신한다.
    }
    // 비교하기
    if (sum > max) {
      // 더한 값이 현재 최대 값보다 크면 max 갱신 + 정답을 원본 숫자로 처리한다.
      max = sum;
      answer = x;
    } else if (sum === max) {
      // 이전 최대 값과 현재 자릿수 합이 같다면
      if (x > answer) {
        // 이전 최대 값 원본 숫자가 현재 분기의 원본 숫자보다 큰지 비교한다.
        answer = x;
      }
    }
  }
  return answer;
}

// split + reduce를 이용한 내장 함수로 푸는 방법
function solution2(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (const x of arr) {
    let sum = x
      .toString()
      .split('')
      .reduce((a, c) => a + Number(c), 0);
    //  비교하기
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) {
        answer = x;
      }
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
console.log(solution2(7, arr));
