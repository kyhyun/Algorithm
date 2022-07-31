// Section 4. 완전 탐색 (브루트 포스) - 뒤집은 소수
/* 
문제 풀이 과정
[v] 이해 - 숫자를 뒤집어서 소수면 answer 배열에 담아서 출력한다. ( 단, 앞 자리에 연속된 0에 대해서는 무시한다. )
- 숫자 뒤집기
[v] 사본을 담는 값과 문자열을 합치기 위한 변수 선언
[v] 숫자를 뒤집고, 그것을 문자로 바꾼 후, 그 문자 전체를 숫자로 바꿔준다.

- 소수 판별하기
[v] 소수 판별하는 함수를 조건으로 해서 소수의 경우 answer 배열에 push한다.
[v] answer 배열에 join 함수로 문자열을 넣어서 처리한다.
*/

// 에스토라테네스의 체
const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= num ** 0.5; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function solution(arr) {
  let answer = [];
  let sum;
  for (const x of arr) {
    let temp = x;
    sum = '';
    while (temp) {
      sum += String(temp % 10);
      temp = Math.floor(temp / 10);
    }
    sum = Number(sum);
    if (isPrime(sum)) {
      answer.push(sum);
    }
  }
  return answer.join(' ');
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr)); // 23 2 73 2 3
