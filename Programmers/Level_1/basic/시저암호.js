function solution(s, n) {
  let str = s.split("");
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      // space 처리
      answer += " ";
      continue;
    }
    let code = str[i].charCodeAt();
    if (code >= 65 && code <= 90) {
      // A-Z
      answer +=
        code + n > 90
          ? String.fromCharCode(code + n - 26)
          : String.fromCharCode(code + n);
    }
    if (code >= 97 && code <= 122) {
      // a-z
      answer +=
        code + n > 122
          ? String.fromCharCode(code + n - 26)
          : String.fromCharCode(code + n);
    }
  }

  return answer;
}
