/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 배열을 순회하면서, 두 수의 합이 target이 되는 index를 찾는 문제로
// 브루트포스를 이용해서 두 반복문으로 구현했다.

//  시간 복잡도는 최악의 경우 n의 제곱, 최상의 경우 n의 상태에 풀리게 된다.
// 또 다른 방법으로는 Memorization, 해쉬맵을 이용한 기존의 값을 기억해서 푸는 방법이 있다.
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return null;
};
