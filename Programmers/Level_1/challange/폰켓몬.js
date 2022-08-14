// 프로그래머스 Lv.1 폰켓몬 (해시)

// 해시 문제 => Map, Set 같은 딕셔너리를 이용해서 문제를 처리하는 것을 보는 문제
// [v] 최대 값 : nums / 2 , 항상 값이 짝수로 주어지므로 소수점 처리 필요 X
// [v] Map을 이용해서 원소가 없으면 해당 원소를 키로 하고, 값을 1로 할당해서 값을 생성한다.
// [v] 이미 존재하는 키라면, 해당 키가 가진 값 + 1을 해서 1씩 증가시킨다.
// [v] map의 키 갯수가 최대 값보다 크거나 같으면 max를 반환하고, 작으면 키 갯수를 반환한다.

// 몇 달 전에 풀었던 코드
function solution(nums) {
  // [3, 1, 2, 3]
  let answer = nums.length / 2; // 2
  let setNums = new Set(nums); // Set { 3, 1, 2 }

  if (answer > setNums.size) {
    // 2 > 3, false
    // 왜 있는지 모를 연산 수행 (...)
    let diff = answer - setNums.size;
    answer -= diff;
  }
  return answer; // 그대로 2 반환
}

// Map 을 이용한 방법
function solution2(nums) {
  const max = nums.length / 2;
  const _map = new Map();
  for (const x of nums) {
    if (_map.has(x)) {
      _map.set(x, _map.get(x) + 1);
    } else {
      _map.set(x, 1);
    }
  }
  return max < _map.size ? max : _map.size;
}
