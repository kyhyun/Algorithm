// 해시함수를 이용한 방법

function solution(participant, completion) {
  const _map = new Map()
  let answer = ""

  for (const p of participant) {
    if (_map.get(p)) {
      _map.set(p, _map.get(p) + 1)
    } else {
      _map.set(p, 1)
    }
  }

  for (const c of completion) {
    if (_map.get(c)) {
      _map.set(c, _map.get(c) - 1)
    }
  }

  for (const x of participant) {
    if (_map.get(x) > 0) answer = x
  }

  return answer
}

/* 배열, 반복문을 이용한 방법

function solution(participant, completion) {
  const answer = "";
  participant.sort();
  completion.sort();
  for(let i = 0; i < participant.length; i++){
      if(participant[i] === completion[i]) {
        answer = participant[i];
        break;
      }
  }
  return answer;
}

*/
