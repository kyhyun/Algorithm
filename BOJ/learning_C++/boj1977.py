# boj1977 완전제곱수
M = int(input())
N = int(input())

result = []
for x in range(M, N+1): # M부터 N+1까지
  if x % (x ** .5) == 0.0: # 완전제곱수
    result.append(x)

if len(result) == 0:
  print(-1)
else :
  print(sum(result))
  print(min(result))
