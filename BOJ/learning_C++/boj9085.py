# boj9085 더하기
# 10보다 작거나 같은 자연수 N개를 주면 합을 구하는 프로그램
from sys import stdin
input = stdin.readline
T = int(input().rstrip())

for _ in range(T):
    N = int(input().rstrip())
    sum_list = list(map(int, input().rstrip().split()))
    print(sum(sum_list))
