//Section 1. 기본문제 풀이 - 중복단어제거

/*
문제 해결 과정
  - 중복이 제거된 문자열을 차례로 출력하기
  1.배열을 돌면서, indexOf로 배열을 조회한다
  2.배열의 인덱스와 indexOf의 반환 값이 일치하면 중복되지 않은 문자이므로 결과를 반환한다
  3. 내용을 answer에 담은 후 결과를 반환한다
*/
function solution(s) {
  // const answer = [];
  // for (let i = 0; i < s.length; i++) {
  //   if (s.indexOf(s[i]) === i) {
  //     answer.push(s[i]);
  //   }
  // }
  const answer = s
    .filter((value, index) => index === s.indexOf(value))
    .join(" ");
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str)); // 결과 : good time student
