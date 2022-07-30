// 에스토라테네스의 체 + 완전 탐색 ( 3중 for문을 이용해서 해결 )
// 3개를 받아 반복하여 순회하며, 중복으로 탐색하는 과정을 최소화 하기 위해
// 각 for문 사이클의 최대 길이를 다음 순회하는 사이클의 수 만큼 뺀다.

const isPrime = (prime_number) => {
  for (let i = 2; i <= prime_number ** 0.5; i++) {
    if (prime_number % i === 0) return false;
  }
  return true;
};

function solution(nums) {
  let answer = 0;
  const len = nums.length;
  let prime;
  // 숫자 배열 안의 숫자 조합 탐색
  for (let i = 0; i < len - 2; i++) {
    prime = 0; // prime 초기화
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        prime = nums[i] + nums[j] + nums[k];
        if (isPrime(prime)) answer++; // 소수 판별하는 함수로 소수 카운트
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4
