function solution(s) {
  return s
    .split("")
    .sort((a, b) => (a < b ? 1 : a == b ? 0 : -1))
    .join("");
}
