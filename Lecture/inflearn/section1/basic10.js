// Section 1. 기본문제 풀이 - 문자 찾기

/* 
문제 해결 과정
  1. 입력 받은 문자를 찾은 수를 구하기 위한 변수를 만든다
  2. s의 문자열을 배열로 변환한다
  3. s의 길이만큼 반복문을 수행한다
  4. 입력 받은 문자열과 해당 인덱스의 값이 일치하면 cnt를 증가시킨다
  5. cnt를 결과 값으로 반환한다
*/

function solution(s, t) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t) continue;
    cnt++;
  }
  return cnt;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R")); // 결과 : 3

/*
문제 해결 과정
  1. 또 다른 풀이 방법으로 문자열을 배열로 만든 후 filter 메서드 이용했다
  2. 일치하는 value가 아니라면, 그대로 반환하고 일치하는 경우에만 값을 반환해서 문자열 길이를 출력한다
  - 강의에서는 split을 받은 문자 기준으로 자른 후 length - 1 을 처리해서 구하는 방법을 알려줬다
  ( 맨 끝의 문자 부분을 자르더라도 그 뒤에 공백이 한 개 생기기 때문에 문제 없이 처리할 수 있음 )
*/

function solution2(s, t) {
  const answer = s.split("").filter((value) => {
    if (value !== t) return;
    return value;
  }).length;
  // let answer = s.split(t).length-1;
  return answer;
}

let str2 = "COMPUTERPROGRAMMING";
console.log(solution2(str, "R"));
