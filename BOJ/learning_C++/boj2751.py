# boj2751 수 정렬하기2
from sys import stdin
input = stdin.readline
arr = [int(input().rstrip())
       for _ in range(int(input().rstrip()))]
arr.sort()
for i in arr:
    print(i)

# 다른 방식의 풀이 :
# print("\n".join(map(str, sorted(arr))))
