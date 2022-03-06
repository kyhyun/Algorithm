function solution(arr, divisor) {
  const list = arr.filter((e) => e % divisor === 0).sort((a, b) => a - b);
  return list.length ? list : [-1];
}
