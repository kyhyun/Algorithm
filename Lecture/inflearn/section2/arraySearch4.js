// Section 2. 1,2차원 배열 탐색 - 점수 계산
/*
문제 해결 과정
- 맞으면 1, 틀리면 0 일 때, 연속 정답은 1점씩 누적 가산, 틀리면 누적 가산 초기화
  1. 결과를 담을 answer 변수와 누적 값을 담을 변수 cnt 선언
  2. 반복문을 수행하면서 맞는 조건(arr[i] === 1)의 경우와 틀리는 경우를 분기 처리
    [v] 맞는다면 누적 값을 1 증감하고 answer 변수에 cnt 값 할당
    [v] 틀린다면 0으로 초기화
  3. 반복문이 종료되면 answer를 반환한다
*/
function solution(arr) {
  let answer = 0;
  let cnt = 0;
  for (let i = 0; i < arr.length; i += 1) {
    // 맞으면 수행하는 조건
    if (arr[i] === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr)); // 결과 : 10
