// 반복문을 이용한 방법
function solution(s) {
  s = s.toUpperCase();
  let cnt_P = 0;
  let cnt_Y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].c === "P") {
      cnt_P++;
    } else if (s[i] === "Y") {
      cnt_Y++;
    }
  }
  return cnt_P === cnt_Y ? true : false;
}

// match를 이용한 정규식 표현 방법
const solution = (s) =>
  (s.match(/p/gi) || []).length == (s.match(/y/gi) || []).length;
