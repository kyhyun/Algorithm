// Section 2. 1,2차원 배열 탐색 - 봉우리
/*
문제 해결 과정
- 자신의 위치에서 상, 하, 좌, 우 숫자 보다 큰 지점이 몇 곳인지 찾기
  1. 결과 값을 담을 변수를 선언, [상,하,좌,우] 값을 담을 x축과 y축 변수를 선언
  2. 이중 for 문을 돌면서 각 봉우리의 위치의 조건일 때 answer를 1씩 증가시킨다
  3. 조건 > 가장자리에 위치한 값의 경우, (index 범위가 0보다 작은 경우) 가운데 값 보다 작도록 처리
  4. answer의 결과를 반화한다
*/
function solution(arr) {
  // let answer = 0;
  // const n = arr.length;
  // const dx = [0, 0, 1, -1];
  // const dy = [-1, 1, 0, 0];
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     let flag = 1;
  //     for (let k = 0; k < dx.length; k++) {
  //       let nx = i + dx[k];
  //       let ny = j + dy[k];
  //       if (
  //         nx >= 0 &&
  //         nx < n &&
  //         ny >= 0 &&
  //         ny < n &&
  //         arr[nx][ny] >= arr[i][j]
  //       ) {
  //         flag = 0;
  //         break;
  //       }
  //     }
  //     if (flag) answer++;
  //   }
  // }

  let answer = 0;
  const n = arr.length;
  let u = (r = d = l = c = 0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      c = arr[i][j]; // 현재 위치 값
      u = i - 1 < 0 ? 0 : arr[i - 1][j]; // 위
      r = j + 1 >= n ? 0 : arr[i][j + 1]; // 오른쪽
      d = i + 1 >= n ? 0 : arr[i + 1][j]; // 아래
      l = j - 1 < 0 ? 0 : arr[i][j - 1]; // 왼쪽
      if (c > u && c > r && c > d && c > l) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr)); // 결과 : 10
