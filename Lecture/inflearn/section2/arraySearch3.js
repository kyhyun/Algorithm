// Section 2. 1,2차원 배열 탐색 - 가위 바위 보

/*
문제 해결 과정
  - 가위 : 1, 바위 : 2, 보 : 3, N 만큼 진행해 각 승자를 A, B 그리고 무승부 D로 반영해서 출력한다
  1. 결과를 출력할 변수를 선언한다
  2. 정해져 있는 판이기 때문에, 나올 수 있는 경우는 5가지로 반복문을 1개로 각 배열들의 인덱스를 비교한다
    [v] a가 가위인 경우
      - b : 가위(1) > 'D'
      - b : 바위(2) > 'B'
      - b : 보(3) > 'A'
    [v] a가 바위인 경우
      - b : 가위 > 'A'
      - b : 바위 > 'D'
      - b : 보 > 'B'
    [v] a가 보인 경우
      - b : 가위 > 'B'
      - b : 바위 > 'A'
      - b : 보 > 'D'
    [v] 같은 조건의 경우, 'D'를 answer에 할당
    [v] 나머지는 조건 분기처리로 경우에 따라 'A' 혹은 'B'를 answer에 할당
    3. answer의 결과를 반환한다
    */
function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      answer += "D";
    } else if (
      // A가 승리하는 모든 조건
      (a[i] === 1 && b[i] === 3) ||
      (a[i] === 2 && b[i] === 1) ||
      (a[i] === 3 && b[i] === 2)
    ) {
      answer += "A";
    } else {
      answer += "B";
    }
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b)); // 결과 : ABABD
