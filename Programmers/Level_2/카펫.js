function solution(brown, yellow) {
  const answer = []
  const CARPET_SIZE = brown + yellow

  // 카펫의 최소 너비, 높이 : 3
  for (let i = 3; i < CARPET_SIZE; i++) {
    let width = CARPET_SIZE / i
    let height = i

    // 카펫은 항상 가로 길이가 세로 길이보다 같거나 크다.(조건에 해당하지 않으면 패스)
    if (width < height) continue

    // yellow의 전체 면적
    if ((width - 2) * (height - 2) === yellow) {
      answer[0] = width
      answer[1] = height
    }
  }

  return answer
}
