// 완전탐색 - 최소 직사각형
// (가장 큰 가로 길이 * 가장 큰 세로 길이)를 하면 가장 큰 지갑의 크기가 된다.
// 하지만, 그러면 공간의 낭비가 되기 때문에 다른 크기에서 가로와 세로 중 큰 값을 반전시켜서
// 공간을 낭비 하지 않는 선에서 가장 큰 크기의 직사각형을 만들 수 있다.

function solution(sizes) {
  let answer = 0;
  // 한 배열 요소에 가로, 세로 중 가장 큰 것을 너비에 담고, 가장 작은 것을 높이에 담는다.
  const width = [];
  const height = [];

  sizes.forEach((v, i) => {
    if (sizes[i][0] >= sizes[i][1]) {
      // 너비 >= 세로
      width[i] = sizes[i][0]; // 너비[i] 번째 공간에 그 값이 든 i 행의 너비 값을 할당
      height[i] = sizes[i][1]; // 높이[i] 번째 공간에 그 값이 든 i 행의 높이 값을 할당
    } else {
      // 너비 < 세로
      width[i] = sizes[i][1]; // 반대로 너비[i] 번째 공간에 작은 값인 i 행의 높이 값을 할당
      height[i] = sizes[i][0]; // 반대로 너비[i] 번째 공간에 큰 값인 i 행의 너비 값을 할당
    }
  });
  answer = Math.max(...width) * Math.max(...height); // 가장 큰 너비 * 작은 것을 고려한 것중 가장 큰 높이
  return answer;
}

// 또 다른 풀이
function solution2(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}

console.log(
  solution2([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
console.log(
  solution2([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120
