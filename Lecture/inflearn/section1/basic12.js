// Section 1. 기본문제 풀이 - 대문자로 통일
/*
  문제 해결 과정
    1. 반복문 + 인덱싱으로 조건에 따라 처리하는 방법과 내장 메소드를 이용하는 방법이 있다
    2. 첫 번째 방법으로 진행
      [v] 결과 값을 담을 배열 초기화
    3. 문자열의 각 인덱스를 charCodeAt 메서드로 아스키 코드 값으로 치환한다
      [v] 대문자 조건(65~90)의 조건이 충족하면 answer에 해당 문자열의 인덱스 값을 push
      [v] 소문자 조건(97~122)의 조건이 충족하면, 아스키 코드 값 차이(32)만큼 뺀고 문자로 치환 후 그 값을 push
    4. answer 배열을 문자열로 만든 결과 값을 반환
*/
function solution(s) {
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    let _case = s[i].charCodeAt();
    if (_case >= 65 && _case <= 90) {
      answer.push(s[i]);
      continue;
    }
    answer.push(String.fromCharCode(_case - 32));
  }
  // return s.toUpperCase();
  return answer.join("");
}

let str = "ItisTimeToStudy";
console.log(solution(str));
