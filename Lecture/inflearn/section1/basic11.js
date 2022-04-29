// Section 1. 기본문제 풀이 - 대문자 찾기
/*
  문제 해결 과정
    1. 생각났던 두 가지 방법 -> 정규식 or 반복문 + 인덱싱
    2. 반복문 + 인덱싱 방법으로 진행 
    3. 대문자 범위에 있는지 아스키 코드 값을 조건으로 해서 cnt 변수를 증가시킨다
    4. 이 외에도 toUpperCase 메소드를 사용해서 처리할 수도 있다
*/

function solution(s) {
  let cnt = 0;
  for (let x of s) {
    let _case = x.charCodeAt();
    if (_case >= 65 && _case <= 90) cnt++;
    // if(x === x.toUpperCase()) cnt ++;
  }
  return cnt;
}

let str = "KoreaTimeGood";
console.log(solution(str)); // 결과 : 3
