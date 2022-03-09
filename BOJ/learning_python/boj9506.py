# boj9506 약수들의 합
import math
from sys import stdin
input = stdin.readline
div = [1]
while True:
  n = int(input().rstrip())
  # 종료 조건 -1 충족하면 입력 종료
  if n == -1:
    break
  for i in range(2,math.ceil((n+1)/2)):
    if n % i == 0:
      div.append(i)

  if sum(div) == n:
    print(f"{n} =", end=" ")
    print(*div, sep=' + ')
  else:
    print(f"{n} is NOT perfect.")
  div = [1]