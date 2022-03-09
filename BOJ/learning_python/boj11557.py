# boj11557 Yangjojang of The Year
from sys import stdin
input = stdin.readline

tc = int(input().rstrip()) # test Case 수
for _ in range(tc):
  school_list = []
  N = int(input().rstrip()) # 참여하는 학교 수
  for _ in range(N):
    name, drink_amount = input().rstrip().split()
    school_list.append((name, int(drink_amount)))
  school_list.sort(reverse=True, key = lambda x: x[1])
  print(school_list[0][0])