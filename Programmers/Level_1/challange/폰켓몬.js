function solution(nums) {
  let max = nums.length / 2
  let setArr = [...new Set(nums)]

  // 중복 제거한 선택 개수 > 폰켓몬 최대 선택 개수
  if (setArr.length > max) return max

  return setArr.length
}
