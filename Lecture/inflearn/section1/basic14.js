//Section 1. 기본문제 풀이 - 가장 긴 문자열
/*
문제 해결 과정
  1. 최대 값을 담는 변수, 정답 문자열을 받을 변수를 선언한다
  2. 배열을 반복문으로 돌면서 길이가 가장 긴 값의 조건일 때를 찾는다
    [v] 현재 요소의 길이가 이전 최대 길이보다 크다면, 최대 값을 교체한다
    [v] 정답을 담는 변수에는 해당 조건일 때의 인덱스 안의 문자열을 교체한다
  3. answer 결과를 반환한다
*/
function solution(s) {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    let len = x.length;
    if (len > max) {
      max = len;
      answer = x;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str)); // 결과 : beautiful
