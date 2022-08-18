/* 문제 해결 과정
[v] 주어진 문자열에서 가장 작은 값, 가장 큰 값을 출력한다.
[v] 문자열을 배열로 돌려서, 해당 값이 최댓 값인 경우와 최솟 값인 경우를 확인해서 할당한다.
[v] 시간을 소모했던 부분 -> 문자열을 숫자로 형변환 하는 과정을 미쳐 생각하지 못하고 문자 비교로 계속 처리하고 있었음
// 비교 수행 시에 해당 값이 원하는 타입으로 잘 들어오는지 꼼꼼히 확인하자.
*/
function solution(s) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  s.split(' ')
    .map((char) => Number(char))
    .forEach((number) => {
      if (max < number) {
        max = number;
      }
      if (min > number) {
        min = number;
      }
    });
  return `${min} ${max}`;
}

// 또 다른 풀이
// 이 경우 min과 max는 문자 값에 대해서도 비교를 잘 수행해낸다.
function solution(s) {
  s = s.split(' ');
  return `${Math.min(...s)} ${Math.max(...s)}`;
}
