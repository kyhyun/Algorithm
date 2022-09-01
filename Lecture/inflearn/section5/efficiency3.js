// Section 5. 효율성 (투 포인터, 슬라이딩윈도우, 해시) - 연속 부분수열 1
// 연속 부분수열의 합에 특정 숫자가 나오도록 처리한다.
// 그 경우의 수를 answer에 담는다
function solution(m, arr) {
  const [N, M] = m.split(' ').map((v) => Number(v));
  let sum = 0;
  let answer = 0;
  // 숫자 M이 되는 연속 부분 수열의 경우의 수를 구한다.
  for (let i = 0; i < N; i++) {
    sum = 0;
    for (let j = i; j < N; j++) {
      sum += a[j];
      if (sum > M) {
        // 수열의 합이 특정 값(M)을 넘는 경우, answer 카운트 X, out-loop 이동
        break;
      } else if (sum === M) {
        // 수열의 합이 특정 값(M)과 같다면 answer 증가 시키고 out-loop로 이동
        answer++;
        break;
      }
    }
  }
  return answer;
}

// 투 포인터를 이용한 알고리즘
function solution2(m, arr) {
  let sum = 0;
  let lt = 0;
  let answer = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) {
      answer++;
    }
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution('8 6', a)); // 3
console.log(solution2(6, a)); // 3
