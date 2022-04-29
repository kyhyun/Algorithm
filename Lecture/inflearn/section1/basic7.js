/* 
Section 1. 기본문제풀이 - 10부제
날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 
위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.

1. 날짜의 일자가 자동차 번호 끝 자리 수와 같은지 비교한다.
  [v] 두 자리 숫자를 일의 자리 숫자만 남긴다. 10 % x => 나머지로 나오는 값이 일의 자리 숫자 
  - 특정 숫자를 10으로 나누면 나오는 나머지는 항상 일의 자리 숫자, 몫은 일의 자리를 제외한 남은 자리들의 숫자가 된다.
  [v] 나머지로 나오는 값과 날짜의 일자와 같은지 비교한다.
2. 같은 값에 대해서 자동차의 대수(answer)를 1씩 증가 시킨다.
3. answer를 반환한다.
*/
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) {
      answer++;
    }
  }
  // let answer = arr.filter((value) => value % 10 === day).length;
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr)); // 결과 : 3

/* Test Code
arr = [12, 20, 54, 30, 87, 91, 30]; 
console.log(solution(0, arr)); // 결과 : 3
*/
