# boj10103 주사위 게임
from sys import stdin
input = stdin.readline

N = int(input().rstrip())
score = [100, 100]

# 각 라운드 수 만큼 반복한다.
for _ in range(N):
  # 각 라운드에 대한 데이터를 담는다.
  data = list(map(int, input().rstrip().split()))

  if data[0] == data[1]: # 무승부
    continue
  elif data[0] > data[1]: # 창영이 승
    score[1] -= data[0]
  elif data[0] < data[1]: # 상덕이 승
    score[0] -= data[1]

print(score[0])
print(score[1])