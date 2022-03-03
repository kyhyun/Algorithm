# boj3009 네 번째 점
import sys
input = sys.stdin.readline
_x = []
_y = []

for _ in range(3):
  x, y = map(int, input().split())
  _x.append(x)
  _y.append(y)

for i in range(3):
  if _x.count(_x[i]) == 1:
    result_x = _x[i]
  if _y.count(_y[i]) == 1:
    result_y = _y[i]
print(f"{result_x} {result_y}")