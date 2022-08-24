// Section 5. 효율성 (투 포인터, 슬라이딩윈도우, 해시) - 두 배열 합치기

// 내장 함수를 이용한 방법
function solution(arr1, arr2) {
  return arr1
    .concat(arr2)
    .sort((a, b) => a - b)
    .join(' ');
}

// 투포인터를 적용한 방법
// sort 함수의 시간 복잡도 nlogn, 투 포인터를 쓴다면 log(n)
// "정렬된 상태의 배열"을 높은 효율성으로 하나의 배열로 만들기 위해 사용한다.

function solution2(arr1, arr2) {
  const answer = [];

  // 2개의 포인터 지점을 0으로 초기화 한다.
  let p1 = 0;
  let p2 = 0;

  // 두 배열의 길이가 포인터에 해당되는 동안 동작하기 위한 반복문
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  // 두 배열 중 현재 포인터 위치에서 남은 길이가 있는 배열의 남은 길이를 모두 담는다.
  while (p1 < arr1.length) answer.push(arr1[p1++]);
  while (p2 < arr2.length) answer.push(arr2[p2++]);

  return answer;
}

// 배열 길이를 변수로 담아서 가독성 향상 - 리팩토링
function solution3(arr1, arr2) {
  const answer = [];

  let p1 = 0;
  let p2 = 0;

  let n = arr1.length;
  let m = arr2.length;

  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b)); // 1 2 3 3 5 6 7 9
console.log(solution2(a, b)); // 1 2 3 3 5 6 7 9
console.log(solution3(a, b)); // 1 2 3 3 5 6 7 9
