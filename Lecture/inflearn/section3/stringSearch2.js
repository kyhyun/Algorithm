// Section 3. 문자열 탐색 - 유효한 팰린드롬

/*
문제 해결 과정
[v] 팰린드롬에 대한 개념 이해하기 - 회문 문자열과 동의어, 대소문자 구문 X
- 반복문을 이용한 방법
[v] 비교는 절반만 해도 되기 때문에 Math.floor(길이 / 2)를 한다.
[v] charCodeAt()을 통해 소문자 아스키 코드의 유효 범위로 좁힌다 (90 ~ 122, a - z)
[v] 맨 앞의 숫자와 맨 뒤의 숫자를 시작해서 비교해가며, 일치하지 않은 경우 NO를 반환
- 메서드를 이용한 방법 (replace 정규 표현식)
[v] 괄호 안에 ^ : 부정, a-z : 소문자, 해당 조건에 부합하는 문자를 '' 공백처리한다.
*/

function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s.split('').reverse().join('') !== s) {
    return 'NO';
  }
  return answer;
}

// function solution(s) {
//   let answer = 'YES';
//   s = s.toLowerCase();
//   const n = s.length;

//   // 알파벳 이외의 문자는 무시한다.
//   for (let i = 0; i < Math.floor(n / 2); i++) {
//     if (s[i].charCodeAt() >= 90 && s[i].charCodeAt() <= 122) {
//       if (s[i] !== s[n - i - 1]) {
//         answer = 'NO';
//         break;
//       }
//     }
//   }
//   return answer;
// }

let str = 'found7, time: study; Yduts; emit, 7Dnuof'; // YES
console.log(solution(str));
