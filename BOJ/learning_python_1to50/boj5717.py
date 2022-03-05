# boj5717 상근이의 친구들
from sys import stdin
input = stdin.readline

while True:
  M, F = map(int, input().rstrip().split())
  
  # 종료 조건
  if M == 0 and F == 0:
    break

  print(M + F)
