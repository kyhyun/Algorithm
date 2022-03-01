function solution(x) {
  let answer = true;
  const str = x.toString();
  let sum = 0;

  for (let i = 0; i < str.length; i += 1) {
    sum += Number(str[i]);
  }
  return x % sum === 0 ? answer : !answer;
}
