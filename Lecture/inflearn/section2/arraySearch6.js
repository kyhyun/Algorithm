// Section 2. 1,2차원 배열 탐색 - 격자판 최대합
/*
문제 해결 과정
- 각 행의 합, 열의 합, 두 대각선의 합 중 가장 큰 수를 출력한다
1. 최대 값을 담을 변수, 합의 값을 담을 변수를 선언
2.  이중 for 문에서 각 행의 합과 열의 합을 구한다
  [v] 바깥 쪽 반복문이 한 차례 마치면, 합을 구한 변수 0으로 초기화
  [v] 각 행의 합 = arr[i][j]
  [v] 각 열의 합 = arr[j][i]
3. answer에 각 결과 값을 max 함수를 이용해서 최대 값을 구한다
4. 합을 구한 변수를 다시 0으로 초기화
5. 또 다른 for문을 이용해서 정대각선, 역대각선의 합을 구한다
  [v] 정대각선의 합 = arr[i][i]
  [v] 역대각선의 합 = arr[i][n - i - 1]
5. 마찬가지로 answer에 각 결과 값을 max 함수를 이용해서 최대 값을 구한다
6. answer을 결과 값으로 반환한다
*/
function solution(arr) {
  let answer = "";
  const n = arr.length;
  let sum1, sum2;
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; // 각 행의 합
      sum2 += arr[j][i]; // 각 열의 합
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i]; // 정대각선의 합
    sum2 += arr[i][n - i - 1]; // 역대각선의 합
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr)); // 결과 : 155
