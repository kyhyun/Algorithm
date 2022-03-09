# boj10797 10부제
from sys import stdin
input = stdin.readline

N: int = int(input().rstrip())
arr: list = list(map(int, input().rstrip().split()))

print(arr.count(N))