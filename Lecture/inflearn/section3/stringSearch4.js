// Section 3. 문자열 탐색 - 가장 짧은 문자 거리
// 문자에 도달하면 왼쪽을 탐색하고, 오른쪽에 e가 있는지 탐색해서 가장 가까운 t의 거리를 자신의 거리로 삼는다.

function solution(s, t) {
  let answer = [];
  const len = s.length;

  // 오른쪽 탐색
  let p = 1000;
  for (let i = 0; i < len; i++) {
    if (s[i] !== t) {
      p++;
    } else {
      p = 0;
    }
    answer.push(p);
  }

  // 왼쪽 탐색
  p = 1000;
  for (let i = len - 1; i >= 0; i--) {
    if (s[i] !== t) {
      p++;
      answer[i] = Math.min(answer[i], p);
    } else {
      p = 0;
    }
  }

  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e')); // 1 0 1 2 1 0 1 2 2 1 0
