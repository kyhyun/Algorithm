# boj10214 Baseball
from sys import stdin
input = stdin.readline

# 테스트 케이스를 입력 받는다.
N = int(input().rstrip())
for _ in range(N):
  score = [0, 0]
  for _ in range(9):
    data = list(map(int, input().rstrip().split()))
    score[0] += data[0]
    score[1] += data[1]

  if score[0] > score[1]:
    print('Yonsei')
  elif score[0] < score[1]:
    print('Korea')
  elif score[0] == score[1]:
    print('Draw')