// Section 2. 1,2차원 배열 탐색 - 보이는 학생

/*
문제 해결 과정
  - 일렬로 서 있는 학생의 키가 앞에 순서부터 주어지는 경우, 선생님 볼 수 있는 학생 수 구하기  
  1. 앞에 있는 사람의 키 상태를 비교 조건에서 항상 알 수 있어야하므로
    이 값을 담을 변수 prev와 해당 학생들의 리스트들을 담을 answer 변수 선언
    [v] prev에는 학생 리스트의 첫 인덱스(0번 인덱스)로 초기화 (맨 앞 학생은 앞에 가리는 사람이 없으므로 ..)
    [v] answer 변수에도 첫 인덱스 값을 배열로 넣어 초기화한다
  2. 배열의 길이가 1이하라면 그대로 answer 결과를 반환한다 
  3. 배열-반복문을 순회하면서 prev 값과 현재 인덱스의 값 보다 큰지 비교한다
    [v] 조건이 참이면, answer에 현재 인덱스의 값을 담는다
    [v] prev 값에는 현재 인덱스를 할당한다
  5. 반복문이 종료되면 answer에 배열의 길이(length)를 구해서 결과를 반환한다
*/

function solution(arr) {
  // let answer = [arr[0]];
  // let prev = arr[0];

  // if (arr.length < 2) return answer;
  // for (let i = 1; i < arr.length; i++) {
  //   if (prev < arr[i]) {
  //     answer.push(arr[i]);
  //     prev = arr[i];
  //   }
  // }

  let answer = [arr[0]];
  let max = arr[0];

  arr.reduce((prev, cur) => {
    if (max < cur) {
      answer.push(cur);
      max = cur;
    }
    return cur;
  }, 0);
  return answer.length;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr)); // 결과 : 5
