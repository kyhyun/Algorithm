# boj10156 과자
k, n, m = map(int,input().split())
result = (k*n)-m
print(result if result > 0 else 0)

# 다른 사람 풀이 방식
# import sys
# input = sys.stdin.readline

# arr = list(map(int,input().split()))
# print(max(0,arr[0]*arr[1]-arr[2]))