# boj10872 팩토리얼
N = int(input())
fact = N
for i in range(N-1, 0, -1):
    fact *= i
print(fact) if fact else print(1)
