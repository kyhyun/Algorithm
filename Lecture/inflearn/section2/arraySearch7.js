// Section 2. 1,2차원 배열 탐색 - 봉우리
/*
문제 해결 과정 ( 4 방향 탐색 )
- 자신의 위치에서 상, 하, 좌, 우 숫자 보다 큰 지점이 몇 곳인지 찾기
  1. 결과 값을 담을 변수를 선언, [상,하,좌,우] 값을 담을 x축과 y축 변수를 선언
  2. 이중 for 문을 돌면서 4방향을 탐색하기 위한 새로운 for문을 생성한다.
  3. 진행할 방향 + 현재 방향을 더해서 다음의 방향인 nx, ny를 변수에 담는다.
  4. 조건 > 가장자리에 위치한 값의 경우 탐색 범위를 벗어나기 때문에 조건 처리한다.
  5. arr[nx][ny](탐색할 방향 = 상,하,좌,우)이 현재 비교할 위치 arr[i][j]보다 크거나 같으면 봉우리가 아니므로 flag를 0으로 처리한다.
  6. 해당 조건에 해당하지 않는 것만 봉우리로 인정하며 그 결과를 k 반복문 이후에 조건으로 하여 answer의 값을 증가시킨다.
  7. answer의 결과를 반화한다.
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
