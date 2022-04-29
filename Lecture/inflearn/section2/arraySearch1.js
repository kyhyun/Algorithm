// Section 2. 기본문제 풀이 - 큰 수 출력하기
/*
문제해결 과정
- N개의 정수를 입력받고, 자신의 바로 앞 수보다 큰 수만 출력하도록 한다 (첫 번째 수는 무조건 출력)
  1. 정답을 출력할 변수 answer 변수 선언
    [v] 처음의 값은 무조건 출력 > 비교 과정이 필요 없기 때문에 변수에 초기값으로 담는다
  2. 배열의 길이가 1 이하라면, 그대로 현재 가지고 있는 초기값(첫 번째 숫자)을 결과로 반환
  3. 인자로 들어오는 배열을 반복문으로 해서 인덱스의 값을 이전 인덱스 값과 비교한다  
    [v] arr[i-1] 보다 크면, answer 변수에 현재 인덱스의 값을 담는다
  4. 반복문이 종료되면 answer 변수를 반환하여 결과를 출력한다
*/
function solution(arr) {
  // let answer = [arr[0]];
  // if (arr.length < 2) return answer;
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] > arr[i - 1]) {
  //     answer.push(arr[i]);
  //   }
  // }

  let answer = [];
  arr.reduce((prev, cur) => {
    if (prev < cur) answer.push(cur);
    return cur;
  }, 0);

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr)); // 결과 : 7 9 6 12
