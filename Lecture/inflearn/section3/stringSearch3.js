// Section 3. 문자열 탐색 - 숫자만 추출

/*
문제 해결 과정
[v] 문제 이해하기 - 문자열에서 숫자만 추출해서 그 순서대로 자연수를 만들고 그것을 합친다.
[v] replace + 정규식으로 숫자를 분해하고 그것을 지우기
[v] Number 함수로 문자열 값을 형변환 시켜서 결과를 출력

- 수학적으로 풀이하는 또 다른 방법
[v] 문자열 안의 문자가 숫자를 isNaN의 부정으로 숫자인 값만 조건으로 처리한다. 
[v] 유효한 값이 들어오는 경우 그 숫자의 자릿수를 올리고, 새로 들어오는 수가 다음 자릿수로 들어온 후 answer에 다시 저장
0 = 0 * 10 + 0 << 처음에 앞에 0이 계속 들어온다고 해도 자릿수가 증가하지 않음
2 = 0 * 10 + 2
20 = 2 * 10 + 0 << 이후에 등장하는 0은 기존의 answer에서 곱해지기 때문에 자릿수가 올라간다.
208 = 20 * 10 + 8
*/

// function solution(str) {
//   const filtered = str.replace(/[^0-9]/g, '');
//   return Number(filtered);
// }

function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return Number(answer);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str)); // 208
