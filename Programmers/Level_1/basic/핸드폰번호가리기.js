function solution(s) {
  let answer = s.slice(s.length - 4);
  let hiden = "*".repeat(s.length - 4);
  return hiden + answer;
}
