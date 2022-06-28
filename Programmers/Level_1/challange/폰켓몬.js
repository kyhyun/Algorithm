function solution(nums) {
  let answer = nums.length / 2
  let setNums = new Set(nums)

  if (answer > setNums.size) {
    let diff = answer - setNums.size
    answer -= diff
  }

  return answer
}
