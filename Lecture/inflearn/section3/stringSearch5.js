// Section 3. 문자열 탐색 - 문자열 압축
/* 문제 해결 과정
[v] 문제 이해 하기 - 문자 + 중복되어 나오는 문자 수를 표기하기
[v] 문자를 순회하면서 중복되는 수를 카운트
[v] 다음 문자와 이전 문자가 다르면 카운트 초기화 + 해당 문자 및 숫자를 answer에 담으며 계속 순회
[v] 반복문 종료후 answer를 출력
*/
function solution(s) {
  let answer = '';
  let cnt = 1;
  let prev = s[0];
  for (let i = 1; i <= s.length; i++) {
    if (prev === s[i]) {
      // 이전 단어와 다음 단어가 같은 경우 중복 수 증가
      cnt++;
    } else {
      // 다음 단어와 다른 경우
      if (cnt < 2) {
        // 문자 중복 수가 2개를 넘지 않는다면, cnt 수를 제외하고 answer에 담는다.
        answer += prev;
      } else {
        // 문자 중복 수가 넘는 경우, cnt수를 포함해서 answer에 담는다.
        answer += prev + cnt;
      }
      prev = s[i]; // 이전 문자를 현재 문자로 갱신한다.
      cnt = 1; // 카운트 수를 초기화한다.
    }
  }
  return answer;
}

function solution2(s) {
  let answer = '';
  let count = 1;
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++; // 같으면 중첩 수 증가
    } else {
      // 그렇지 않으면
      answer += s[i]; // 해당 문자를 answer에 넣는다.
      if (count > 1) {
        // 중첩 수가 2 이상이면
        answer += String(count); // answer에 중첩 수도 포함시킨다.
      }
      count = 1; // 카운트를 초기화 시킨다.
    }
  }
  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str)); // K2HS7E
console.log(solution2(str)); // K2H37E
