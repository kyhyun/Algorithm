// Section 4. 완전 탐색 (브루트 포스) - 멘토링
function solution(test) {
  let answer = 0;
  const m = test.length;
  const n = test[0].length;

  // 시험의 총 경우의 수 4 * 4 = 16가지
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // 멘토와 멘티가 정해지고 나면, cnt 초기화
      let cnt = 0;

      // test를 2차원 배열로 돌면서 멘토의 순위와 멘티의 순위를 담는다.
      for (let k = 0; k < m; k++) {
        let mentor_rank = 0;
        let menthe_rank = 0;
        // test[k][s] == 학생 번호, i, j == 등수
        for (let s = 1; s <= n; s++) {
          if (test[k][s] === i) mentor_rank = s;
          if (test[k][s] === j) menthe_rank = s;
        }
        // 멘토 순위가 더 높은 경우 cnt 증가
        if (mentor_rank < menthe_rank) cnt++;
      }
      // 총 시험 수에서 멘토가 멘티보다 높은 등수였던 테스트 수가 일치하면 answer 증가
      if (cnt === m) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr)); // 3
