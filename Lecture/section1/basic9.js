//Section 1. 기본문제풀이 - A를 #으로

/*
문제 해결 과정
- 배열의 인덱스에 값을 할당해서 문자열의 값을 바꾸는 방법
1. BANANA -> 문자열을 각 인덱스로 접근하기 위해 배열로 바꾼다
2. 해당 인덱스 안의 값이 A와 같다면 인덱스의 위치에 #의 값을 할당한다
3. 값을 담은 배열을 다시 문자열로 만들어 결과를 반환한다

- 문자열의 replace 함수로 문제를 해결하는 방법
1. 문자열에 해당하는 정규식 혹은 문자열 패턴을 첫 인자로 전달한다
2. 대체할 문자열을 두 번째 인자로 전달한다
*/
function solution(s) {
  // const answer = s
  //   .split("")
  //   .map((value) => {
  //     if (value === "A") {
  //       return "#";
  //     }
  //     return value;
  //   })
  //   .join("");
  // return answer;

  const answer = s.replace(/[.]?A+/g, "#");
  return answer;
}

let str = "BANANA";
console.log(solution(str)); // 결과 : B#N#N#
