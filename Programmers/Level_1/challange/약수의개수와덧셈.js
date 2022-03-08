// 내가 풀이한 코드
function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    let cnt = 1;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    if (cnt % 2 === 0) {
      result += i;
    } else {
      result -= i;
    }
  }
  return result;
}

// 다른 사람이 푼 코드
// 주요 포인트 : 제곱근이 정수면, 약수의 개수는 홀수가 된다.
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
