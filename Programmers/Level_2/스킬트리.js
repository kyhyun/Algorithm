// 프로그래머스 - Lv.2 스킬트리
function solution(skill, skill_trees) {
  let answer = 0;
  let flag;

  const valid_skill = skill_trees.map((trees) => {
    return trees.split('').filter((v) => skill.includes(v));
  });

  for (let i = 0; i < valid_skill.length; i++) {
    flag = true;
    for (let j = 0; j < valid_skill[i].length; j++) {
      if (skill[j] !== valid_skill[i][j]) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}
