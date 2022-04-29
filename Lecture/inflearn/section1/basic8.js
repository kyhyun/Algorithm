//Section 1. 기본문제풀이 - 일곱 난쟁이 (정올 문제)

/*
  문제 해결 과정
  1. 배열에 속하는 모든 난쟁이들의 키를 합해서, 제외되는 난쟁이들의 키를 빼서 100이 되는 조건을 찾는다
    [v] 합을 담을 수 있는 sum 변수를 선언
    [v] 배열에 있는 모든 난쟁이들의 키를 더해서 sum에 할당한다
  2. 조건을 찾기 위한 방법으로 이중 반복문을 사용한다
    [v] 첫 번째 반복문은 0부터 마지막 인덱스 - 1 까지 >> i
    [v] 두 번째 반복문은 1부터 마지막 인덱스까지 >> j
  3. 100이 되는 조건에 해당되는 인덱스를 dwarfs 배열에서 splice로 제거한다
    [v] splice는 원본을 변경하므로, 가장 끝에 있는 j를 우선적으로 처리한다 
    [v] 반복문을 나와서 결과를 반환한다
*/

function solution(arr) {
  const dwarfs = [...arr];
  let sum = arr.reduce((p, c) => p + c, 0);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        dwarfs.splice(j, 1);
        dwarfs.splice(i, 1);
        break;
      }
    }
  }
  return dwarfs.join(" ");
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr)); // 결과 : 20 7 23 19 10 8 13
