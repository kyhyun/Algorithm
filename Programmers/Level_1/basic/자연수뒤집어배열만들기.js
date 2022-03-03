function solution(n) {
  // 숫자 풀이 방식
  const arr = [];
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return arr;
}

function solution2(n) {
  // 문자 풀이 방식
  return (n + "")
    .split("")
    .reverse()
    .map((e) => +e);
}
