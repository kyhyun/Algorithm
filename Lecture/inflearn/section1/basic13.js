// Section 1. 기본문제 풀이 - 대소문자 변환

/*
문제 해결 과정
  1. 문자열을 아스키코드로 변환한다 >> charCodeAt
  2. 변환된 아스키코드에 해당되는 문자를 다음 조건에 따라 비교한다
    [ ] 대문자 조건 (65 ~ 90) 이면, 소문자로 변환 >> toLowerCase 혹은 32만큼 더한다
    [ ] 소문자 조건 (97 ~ 122) 이면, 대문자로 변환 >> toUpperCase 혹은 32만큼 뺀다
  3. 변환된 유니코드에 해당 아스키코드를 다시 문자로 바꾼다 >> String.fromCharCode
  4. 결과를 출력한다
*/
function solution(s) {
  let answer = "";
  for (let x of s) {
    let _case = x.charCodeAt();
    if (_case >= 65 && _case <= 90) {
      answer += String.fromCharCode(_case + 32);
    } else if (_case >= 97 && _case <= 122) {
      answer += String.fromCharCode(_case - 32);
    }
  }
  return answer;
}

console.log(solution("StuDY")); // 결과 : sTUdy
