/*
프로그래머스 Lv.1 로또의 최고 순위와 최저 순위
문제 이해
- 구매한 로또 번호 중 1등 번호와 대조해서 맞춘 번호와 알아볼 수 없는 번호를 구한 다음 그것을 이용해서
최고 순위의 번호와 최저 순위의 번호를 결과로 반환한다.
*/
function solution(lottos, win_nums) {
  // 1. 맞춘 숫자와 알아 볼 수 없는 숫자 구한다.
  const correct_nums = [];
  const blind_nums = [];

  lottos.forEach((num) => {
    if (win_nums.includes(num)) correct_nums.push(num);
    else if (num === 0) blind_nums.push(num);
  });

  // 2. 결과를 이용해서 최고 순위와 최저 순위를 구한다.
  // 최고 순위 번호: 두 배열의 같은 번호 개수 (맞춘 개수) + 알아볼 수 없는 번호 개수
  // 최저 순위 번호: 두 배열의 같은 번호 개수 (맞춘 개수)
  // 순위 산정 : 1등 => 6개, 2등 => 5개, ... , 6등 => 1개 혹은 0개

  // 최저 순위 : 맞춘 개수가 6개를 넘어가면 6등, 아니면 (7 - 맞춘 개수)를 등수로 반환
  const min_rank = 7 - correct_nums.length > 6 ? 6 : 7 - correct_nums.length;
  // 최고 순위 : 최저 순위(1~6)상태의 결과와 알아볼 수 없는 개수(0~6)의 차 => 알아 볼 수 없는 개수로 인해 맞춘다는 가정으로 순위가 올라감(숫자 상으로는 내려감)
  // 그 차이가 1이하 (모든 번호를 못맞추었지만 알아볼 수 없는 그 숫자가 맞춘 숫자의 경우) 1등, 아니면 그 차이를 등수 결과로 반환한다.
  const max_rank = min_rank - blind_nums.length < 1 ? 1 : min_rank - blind_nums.length;

  return [max_rank, min_rank];
}
