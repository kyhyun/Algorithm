# boj1037 약수
import sys
N = int(sys.stdin.readline().rstrip())
_list = list(map(int, input().rstrip().split()))
print(max(_list) * min(_list))