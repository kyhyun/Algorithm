# boj101062 전자레인지
from sys import stdin
input = stdin.readline

T = int(input().rstrip())

# 5분, 1분, 10초 각 버튼마다 초 시간 할당
_5m, _1m, _10s = 300, 60, 10
result = [0, 0, 0]

while True:
  # T가 양의 정수인 경우, 각 조건에 맞는 시간에 해당되면 그만큼 감산
  # 조건이 될 때마다 해당하는 리스트의 인덱스에는 1씩 증감해준다.
  if T-_5m >= 0:
    T -= _5m
    result[0] += 1
  elif T-_1m >= 0:
    T -= _1m
    result[1] += 1
  elif T-_10s >= 0:
    T -= _10s
    result[2] += 1
  elif T < 10:
    print(-1)
    break;
    
  if T == 0:
    print(*result)
    break