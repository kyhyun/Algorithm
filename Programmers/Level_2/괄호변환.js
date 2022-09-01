// 프로그래머스 - Lv.2 괄호 변환
/* 용어 정의
- 균형 잡힌 괄호 문자열 : '('와 ')' 만 존재하고, '(', ')' 의 개수가 같은 경우
- 올바른 괄호 문자열 : 균형 잡힌 괄호 문자열을 충족하고, '(' 와 ')' 의 괄호의 짝을 이루는 경우

균형 잡힌 괄호 문자열 -> 올브란 괄호 문자열로 변환하기

입력 값 : 길이가 2 ~ 1000 이하 >> 수행 시간에 대한 고려는 크게 안해도 된다고 판단 => 브루트포스, 재귀 등 사용 가능 
(+) 개수가 항상 같기 때문에 다른 경우에 대한 예외 처리를 해줄 필요가 없음

[v] 입력 받은 문자열 p의 length가 0일 경우 그대로 빈 문자열을 반환
[v] 입력 받은 문자열 p의 '('와 짝을 계산해서 두 가지의 합이 0이 되는(괄호의 짝이 맞는) index를 기준으로 current와 next로 문자열을 나눈다
[v] flag가 true => 균형 잡힌 괄호 문자열, answer에 current와 next의 값을 이어붙이면서 위 과정을 반복한다
[v] flag가 false => 균형 잡히지 않은 괄호 문자열, answer에 next의 값만 반복적으로 들어가고, (맨 앞, 맨뒤를 제외한)cur의 값을 뒤집은 것을 결과 값으로 넣어준다
*/

function solution(p) {
  if (p.length === 0) return p;
  let answer = '';
  let cnt = 0;
  let flag = true;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') cnt++;
    else cnt--;
    if (cnt < 0) {
      flag = false;
    }

    if (cnt === 0) {
      const cur = p.slice(0, i + 1);
      const next = p.slice(i + 1);
      if (flag) {
        answer += cur + solution(next);
      } else {
        answer += `(${solution(next)})`;
        for (let j = 1; j < cur.length - 1; j++) {
          answer += cur[j] === ')' ? '(' : ')';
        }
      }
      break;
    }
  }

  return answer;
}
console.log(solution('(()())()')); // "(()())()"
console.log(solution(')(')); // "()"
