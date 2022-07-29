// 하샤드의 수
/*
문제 해결 과정
[v] 하샤드의 수 이해하기 - x가 각자 자릿수를 더해 합쳐진 수로 나누어져야 한다. 예) 18 => 1 + 8 = 9 >> 18은 9로 나누어진다.
[v] 나누어 떨어진다는 조건은 x 가 합쳐진 수와 나눌 때 0의 값이 되어야 한다는 조건을 의미
[v] 숫자를 문자로 바꾼 후 각 자릿수를 모두 더한다. ( 더하기 위해서 sum 변수 시용 )
[v] x와 그 합친 수를 나누어서 0이 된다면 true를 반환하고 그렇지 않으면 false를 반환한다.
*/

function solution(x) {
  const str = x.toString();
  let sum = 0;
  for (const e of str) sum += Number(e);
  return x % sum === 0 ? true : false;
}
