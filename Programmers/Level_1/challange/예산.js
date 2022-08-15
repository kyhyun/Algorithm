/*
프로그래머스 Lv.1 - 예산
[v] 문제 이해하기
- d : 각 부서에서 신청한 금액
- budget : 예산 금액
지원 금액을 초과한 예산액으로 타 부서를 지원해줄 수 없다.
최대한 많은 부서를 지원해주기 위해서는 가장 낮은 예산을 편성한 금액 (오름차순)으로 예산을 사용하도록 하고
예산에서 더 이상 다른 부서에서 편성된 금액으로 지원 해줄 수 없으면 해당 인원의 결과를 반환해서 결과로 출력한다.

[v] 예산의 숫자를 오름차순으로 정렬한다.
[v] 기존 부서의 예산을 정렬된 예산으로 저장한다.
[v] 부서의 예산만큼 순회를 돌면서 예산과 현재 부서의 차감 금액이 현재 예산을 초과하는 경우 해당 루프를 중지한다.
[v] 그렇지 않은 경우라면 예산을 해당 부서의 편성된 금액만큼 차감하면서 answer배열을 1씩 증가시켜 지원할 수 있는 부서를 카운트한다.
[v] 루프를 종료하면 결과를 반환한다.
*/

function solution(d, budget) {
  let answer = 0;
  d = bubble_sort(d);

  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] < 0) break;
    budget -= d[i];
    answer++;
  }

  return answer;
}

// 개선된 버블 정렬 -> 오름 차순
function bubble_sort(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = true;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = false;
      }
    }
    if (flag) break;
  }
  return arr;
}
