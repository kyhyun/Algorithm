// Section 4. 완전 탐색 (브루트 포스) - 졸업 선물
// 문제 해결 과정
// [v] 문제 이해 : 현재 예산으로 최대 몇명의 학생에게 선물을 사줄 수 있는지 구하기
// [v] 상품 하나를 50% 할인해서 살 수 있다. => 들어온 상품 중에 가장 "비싼" 상품에 할인을 적용
// [v] 각 상품과 배송비를 합친 후 오름 차순 정렬
// [v] 정렬된 리스트에서 예산이 될 때마다 감산 적용하고, 안된다면 그대로 stop -> cnt 반환

function solution(m, product) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  // 가장 비싼 상품 찾아서 50% 할인 적용하기
  for (let i = 0; i < product.length - 1; i++) {
    for (let j = 0; j < product[i].length; j++) {
      if (product[i + 1][0] > max) {
        max = product[i + 1][0];
      }
    }
  }

  for (let i = 0; i < product.length; i++) {
    if (product[i][product[i].indexOf(max)]) {
      product[i][product[i].indexOf(max)] /= 2;
    }
  }

  // 각 상품과 배송비를 합쳐서 정렬한다.
  const sum_arr = quick_sort(
    product.map((value) => {
      return value[0] + value[1];
    })
  );

  // 정렬된 리스트에서 예산이 될 때마다 감산 적용하고, 안된다면 그대로 stop -> cnt 반환
  sum_arr.map((value) => {
    if (m - value < 0) return;
    m -= value;
    answer++;
  });

  return answer;
}

function quick_sort(arr) {
  if (arr.length < 2) return arr;

  const left = [];
  const right = [];
  const middle = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i]);
    } else if (arr[i] > middle) {
      right.push(arr[i]);
    } else {
      middle.push(arr[i]);
    }
  }
  return quick_sort(left).concat(middle, quick_sort(right));
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr)); // 4
