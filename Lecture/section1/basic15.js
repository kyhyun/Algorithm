//Section 1. 기본문제 풀이 - 가운데 문자 출력
/*
  문제 해결 과정
  1. 입력 받은 문자의 길이를 구한다
  2. 길이를 조건으로 
   [v] 문자열의 길이가 홀수라면, (전체 문자열의 길이 / 2)
   [v] 짝수라면, (전체 문자열의 길이 / 2) - 1, (전체 문자열의 길이 / 2)
  4. 결과를 반환한다 
*/
function solution(s) {
  const halfStrLen = parseInt(s.length / 2);
  if (s.length % 2 === 1) {
    return s[halfStrLen];
  }
  return s[halfStrLen - 1] + s[halfStrLen];
}
console.log(solution("study")); // 결과 : u
console.log(solution("good")); // 결과 : oo
