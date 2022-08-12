// 1. 자연수를 뒤집는다.
// [v] 입력된 배열을 반복문으로 돌린다.
// [v] 각 자연수를 숫자를 10의 자리로 잘라서 문자열로 형변환 후 str 변수에 담는다.
// [v] str 변수의 값을 숫자로 형변환한다.

// 2. 소수인지 판별한다.
// [v] 뒤집은 숫자가 i로 나누어 떨어지는지 확인한다.
// [v] 0으로 나뉘는 경우 소수 X
// [v] 안 나누어지는 경우 소수 O, answer 배열에 담는다.

function isPrime(num) {
  if (num === 1) return;

  let flag = true;
  for (let i = 2; i < num ** 0.5; i++) {
    if (num % i === 0) {
      flag = false;
    }
  }
  return flag;
}

function solution(arr) {
  let answer = [];
  let str;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    str = '';
    while (tmp > 0) {
      str += String(tmp % 10);
      tmp = Math.floor(tmp / 10);
    }
    if (isPrime(Number(str))) {
      answer.push(Number(str));
    }
  }
  return answer.join(' ');
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr)); // 23 2 73 2 3
