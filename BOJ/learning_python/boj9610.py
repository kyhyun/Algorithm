# boj9610 사분면
from sys import stdin
input = stdin.readline

point = {'Q1':0, 'Q2':0,'Q3':0,'Q4':0,'AXIS':0}
test_case = int(input().rstrip())

for _ in range(test_case):
  _x, _y = map(int, input().rstrip().split())
  
  if _x == 0 or _y == 0:
    point['AXIS'] += 1
  elif _x > 0 and _y > 0:
    point['Q1'] += 1
  elif _x < 0 and _y > 0:
    point['Q2'] += 1
  elif _x < 0 and _y < 0:
    point['Q3'] += 1
  elif _x > 0 and _y < 0:
    point['Q4'] += 1

print(f"Q1: {point['Q1']}")
print(f"Q2: {point['Q2']}")
print(f"Q3: {point['Q3']}")
print(f"Q4: {point['Q4']}")
print(f"AXIS: {point['AXIS']}")