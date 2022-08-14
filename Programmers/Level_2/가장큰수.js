/*
프로그래머스 Lv. 2, 가장 큰 수

문제 이해 : 0 이상의 양의 정수가 이어 붙여 만들 수 있는 수 중에 가장 큰 수를 알아낸다.
>> 1. 모든 조건을 조합하는 방식으로 접근 : X
numbers 의 길이는 1부터 100_000 이며, 시간 복잡도는 : O(!numbers.length) 가 된다.
보통 결과는 1초 안에 반환을 해야하기 때문에 입력 값이 이렇게 큰 경우 모든 조합으로 탐색하는 O(n!)로 문제가 발생
순열을 사용하여 구현하는 방법으로 1시간 정도 고민해봤지만, 
현재 수준으로는 구현이 어렵다고 판단해서 다른 방법을 찾기로 했다.

>> 2.sort를 이용한 방법
 (b + a) - (a + b) => 다음 숫자와 현재 숫자를 문자열로 합치고, 앞의 숫자와 이전 숫자를 조합한 차이를 이용해 조합 정렬을 수행한다.
 예로 6과 10을 비교하는 경우 -> b + a = 106, a + b = 610, 이 두 차이는 음수이므로 자리 변경이 없는 반면
 다음 숫자은 10과 2를 비교하는 경우 -> 2 + 10 = 210, 10 + 2 = 102으로 뒤의 조합된 숫자가 더 크고, 양수이기 때문에 두 자리의 숫자
 위치를 변경하게 된다. 그런 식으로 숫자의 정렬을 수행하고 난 후 배열의 결과를 문자열로 바꿔서 반환한다.
 return에 조건이 있는 것은 모든 원소의 조합이 0이라서, "0000" 같은 조합이 발생할 수 있고, 이런 경우 문자열 0 하나만 반환
 해주어야 하기 때문에 이와 같은 방어 코드를 작성해주어 처리했다.
*/
function solution(numbers) {
  let answer = '';
  // numbers = numbers.map(v => v.toString()).sort((a, b) => (b + a) - (a + b));
  console.log(insertion_sort((a, b) => b + a - (a + b)));
  // return numbers[0] === "0" ? "0" : numbers.join("");
}

function insertion_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let prev = i - 1;

    while (prev >= 0 && arr[prev] > key) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = key;
  }
  return arr;
}
