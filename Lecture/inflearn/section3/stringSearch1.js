// Section3. 문자열 탐색 - 회문 문자열

/* 문제 해결 과정
[v] 회문에 대해 이해하기 : 앞으로 읽거나 뒤로 읽거나 같은 문자열 + 대소문자 구분 X
- 회문 검사를 어떻게 할까 ?
[v] 우선 검사하려는 문자열을 대, 소문자 중 통일된 하나의 case로 바꾼다.
[v] 검사 하기 전의 문자열 !== 뒤집어진 문자열(split -> reverse -> join을 써서 그 문자열을 뒤집는다.) 조건으로 비교한다.
[v] 참이면 answer의 값을 'NO'로 바꾸어준후 answer를 반환한다.
[v] 그렇지 않은 경우 두 문자열이 같다고 평가하고, 'YES' 값을 가진 answer를 그대로 반환한다.

- 반복문을 이용한 방법 
[v] 짝수의 경우나 홀수의 경우 모두 문자열 길이 / 2 만큼의 비교가 필요하기 때문에 반복문 비교시 반복 횟수를 길이의 반만큼 수행
[v] s[i] (앞에서 비교하는 비교 군) !== s[n - i - 1] (뒤에서 비교하는 비교 군)이 다른 경우 answer에 'NO'를 저장 후 반환
[v] 그렇지 않으면 기존 answer에 저장되어 있는 'YES' 변수를 반환하여 문자열이 회문 문자열임을 'YES'로 출력하여 알린다.
*/

// function solution(s) {
//   const lowerString = s.toLowerCase();
//   const lowerReverseString = lowerString.split('').reverse().join('');
//   return lowerString === lowerReverseString ? 'YES' : 'NO';
// }
function solution(s) {
  let answer = 'YES';
  const n = s.length;
  s = s.toLowerCase();
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (s[i] !== s[n - i - 1]) {
      answer = 'NO';
      break;
    }
  }
  return answer;
}

let str = 'goooG';
console.log(solution(str));
