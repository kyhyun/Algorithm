/* 
Section 1. 기본문제풀이 - 홀수 
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 
고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

1. 배열에 있는 요소 중 홀수를 찾는다.
  [v] 홀수의 조건 -> 어떠한 값을 2로 나누면 1이 나머지로 남는다.
  [v] 배열에서 구한 홀수들을 더하는 변수와 최소 값을 구하기 위해 따로 변수를 담아둔다.
2. 그 홀수를 더한 값을 answer 배열에 담는다.
3. 홀수들 중 가장 작은 값을 찾는다.
  [v] 홀수가 든 배열에서 최소 값을 찾기 위해 최대 값(MAX_SAFE_INTEGER)과 비교를 해서 찾는다.
4. 가장 작은 홀수를 answer 배열에 담는다.
5. answer을 반환한다.
*/

function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  const answer = [];
  const odd = arr.filter((value) => value % 2 === 1);
  const oddSum = odd.reduce((p, c) => p + c);
  answer.push(oddSum); // 모든 홀수의 합
  for (let i = 0; i < odd.length; i++) {
    // 최소 값을 구하는 반복 & 조건문
    if (min > odd[i]) {
      min = odd[i];
    }
  }
  answer.push(min); // 모든 홀수 중 가장 작은 값

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr)); // 결과 : [256, 41]
