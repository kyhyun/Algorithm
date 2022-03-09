# boj2953 나는 요리사다
from sys import stdin
input = stdin.readline
N = [list(map(int, input().rstrip().split())) for _ in range(5)]
result = []
# 5 * 4 배열로, 한 행에 더한 값을 result에 전달해준다.
for i in range(len(N)):
    s = 0
    for j in range(len(N)-1):
        s += N[i][j]
    result.append(s)

print(result.index(max(result)) + 1, max(result))
