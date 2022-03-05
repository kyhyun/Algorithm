# boj5063 TGN
from sys import stdin
input = stdin.readline
test_case = int(input().rstrip())
for _ in range(test_case):
  r, e, c = map(int, input().rstrip().split())
  if r < e-c : 
    print('advertise')
  elif r == e-c : 
    print('does not matter')
  elif r > e-c:
    print('do not advertise')