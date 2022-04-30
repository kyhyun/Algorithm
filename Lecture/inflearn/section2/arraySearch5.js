// Section 2. 1,2차원 배열 탐색 - 등수 구하기

/*
문제 해결 과정
- 입력된 순서대로 등수 출력하기 (동일 점수 = 동일 등수)
  1. 등수에 대한 결과 값을 담을 answer 변수와 등수를 매길 cnt 변수를 선언 
  2. 각 인덱스 간의 비교가 필요하므로 이중 반복문을 통해서 등수를 구한다
    [ ] 첫 번째 반복문 - 현재 학생의 점수, arr[i] / cnt 변수를 1로 초기화해서 등수 리셋
    [ ] 두 번째 반복문 - 다음 학생의 점수, arr[j]
  3. 두 번째 반복문에서 조건문 (arr[j] > arr[i])의 조건을 충족하면,
    [ ] cnt 변수의 값을 1씩 증가시킨다
  4. 내부의 반복문이 끝난 후, answer 값에 cnt 값을 할당한다
  5. answer를 결과 값으로 반환한다
*/

function solution(arr) {
  // const answer = [];
  // let cnt;
  // for (let i = 0; i < arr.length; i++) {
  //   cnt = 1;
  //   for (let j = 0; j < arr.length; j++) {
  //     if (arr[j] > arr[i]) cnt++;
  //   }
  //   answer.push(cnt);
  // }

  /* 배열 리스트를 초기화 해서 사용하는 방법 */
  // 1. Array(길이).fill(값)
  // 2. Array.from({길이 값이 담긴 유사 배열}, 콜백함수);
  // const answer = Array(arr.length).fill(1);
  const answer = Array.from({ length: 5 }, () => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr)); // 결과 : 4 3 2 1 5
