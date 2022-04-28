//Section 1. 기본문제 풀이 - 중복문자제거
/*
  문제 해결 과정
   0. 결과를 담을 answer 배열을 선언
   1. set을 이용해서 중복 문자를 제거
   2. set을 다시 배열로 만든다
   3. answer 결과를 반환한다

   또 다른 방법
    1. 정답을 담을 변수를 선언
    2. 해당 문자열을 반복문으로 돌면서 indexOf로 문자의 인덱스를 찾는다
    3. indexOf()의 반환 값과 인덱스의 값이 일치하지 않는 경우, 중복된 문자로 판단
    4. 해당 조건에 해당되면 answer 변수에 해당 인덱스 값을 더해준다
    5. answer 결과를 반환한다
*/

function solution(s) {
  // let answer = new Set(s);
  // answer = [...answer];
  // return answer.join("");

  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      answer += s[i];
    }
  }
  return answer;
}
console.log(solution("ksekkset")); // 결과 : kset
