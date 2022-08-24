// Section 5. 효율성 (투 포인터, 슬라이딩윈도우, 해시) - 공통원소 구하기

// 내장 함수를 이용한 풀이
function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((v) => {
    if (arr2.includes(v)) answer.push(v);
  });
  return answer.sort();
}

// 투 포인터를 이용한 풀이 ( 시간 복잡도 : nlogn )
function solution2(arr1, arr2) {
  let answer = [];

  // 두 배열을 정렬한다.
  // 두 자리 수 이상 정렬하는 경우 정렬의 기준을 콜백에 명시해주어야 사전 순 정렬을 수행하지 않는다.
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  // 포인터 변수를 선언
  let p1 = 0;
  let p2 = 0;

  // 두 배열의 길이를 변수로 저장
  const n = arr1.length;
  const m = arr2.length;

  // 두 포인터는 각자 자신의 배열 길이까지 반복
  while (p1 < n && p2 < m) {
    // 두 포인터가 가리키는 값이 같다면 해당 원소의 값을 answer에 담고 두 포인터 숫자를 같이 증가시킨다.
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
      // 같지 않은 경우, 두 포인터가 가리키는 배열 원소가 작은 값인 포인터를 증가시켜서 다음 숫자와 비교할 수 있도록 한다.
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b)); // 2 3 5
console.log(solution2(a, b)); // 2 3 5
