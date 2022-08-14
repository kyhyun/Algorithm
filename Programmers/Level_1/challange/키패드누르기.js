function solution(numbers, hand) {
  const left_p = [1, 4, 7, 10];
  const right_p = [3, 6, 9, 12];
  const middle_p = [2, 5, 8, 0];

  let left_d = 10; // 왼손 위치 : *
  let right_d = 12; // 오른손 위치 :#

  let answer = '';

  for (let i = 0; i < numbers.length; i++) {
    if (left_p.includes(numbers[i])) {
      // 왼쪽
      answer += 'L';
      left_d = numbers[i];
    } else if (right_p.includes(numbers[i])) {
      // 오른쪽
      answer += 'R';
      right_d = numbers[i];
    } else if (middle_p.includes(numbers[i])) {
      // 가운데
      if (numbers[i] === 0) numbers[i] = 11;

      let left = 0; // 현재 왼손의 거리 값
      let right = 0; // 현재 오른손의 거리 값

      // 왼손이 left 패드에 위치한 경우
      if (left_p.includes(left_d)) {
        left = Math.abs((numbers[i] - (left_d + 1)) / 3) + 1;
      } else {
        // 왼손이 가운데 패드에 위치한 경우
        left = Math.abs((numbers[i] - left_d) / 3);
      }

      // 오른손이 right 패드에 위치한 경우
      if (right_p.includes(right_d)) {
        right = Math.abs((numbers[i] - (right_d - 1)) / 3) + 1;
      } else {
        // 오른 손이 가운데 패드에 위치한 경우
        right = Math.abs((numbers[i] - right_d) / 3);
      }

      if (left === right) {
        // 현재 이동하려는 위치에서 왼손과 오른손의 거리가 같다면.
        if (hand === 'right') {
          // 오른손 잡이
          answer += 'R';
          right_d = numbers[i];
        } else if (hand === 'left') {
          answer += 'L';
          left_d = numbers[i];
        }
      } else if (left < right) {
        // 왼손의 거리가 더 가까운 경우
        answer += 'L';
        left_d = numbers[i];
      } else if (left > right) {
        // 오른손의 거리가 더 가까운 경우
        answer += 'R';
        right_d = numbers[i];
      }
    }
  }

  return answer;
}
