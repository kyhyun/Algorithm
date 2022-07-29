// 핸드폰 번호 가리기
/*
문제 해결 과정
[v] 문제 이해하기 - 전화번호 뒤에 4자리를 제외하고 나머지를 ' * ' 로 가린 문자열을 구한다.
[v] 문자열의 전체 길이를 구한다.
[v] 반복문을 순회하면서 i가 전체 길이의 - 4(시작 지점 ~ 끝 지점 되기까지 4개 만큼의 길이)일 때 ' * ' 을 넣는다.
[v] 끝 지점의 4자리만 본래 문자열의 자릿 수를 넣고 결과를 반환한다.
*/

function solution(phone_number) {
  let str = '';
  let len = phone_number.length;
  for (let i = 0; i < len; i++) {
    if (i < len - 4) {
      str += '*';
      continue;
    }
    str += phone_number[i];
  }
  return str;
}
