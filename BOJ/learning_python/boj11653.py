# boj11653 소인수분해 - 내가 푼 방식
n = int(input())
i = 2

# 소수가 2일 때
while n % i == 0:
  print(i)
  n //= i
i = 3  
# 소수가 홀수 일 때
while n != 1:
  if n % i == 0:
    print(i)
    n //= i
  else:
    i += 2

# 다른 사람의 방식을 참조
input = int(input())
for i in range(2, int(n**.5)+1):
  while n % i == 0:
    n //= i
    print(i)
if n > 1:
  print(n)