# boj2010 플러그
from sys import stdin
input = stdin.readline
sum = 0
for _ in range(int(input())):
    N = int(input().rstrip()) - 1
    sum += N
print(sum + 1)
