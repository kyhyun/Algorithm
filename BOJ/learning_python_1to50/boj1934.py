# boj1934 최소공배수
def gcd(a,b):
  return a if b == 0 else gcd(b, a % b)

def lcm(a,b):
  return a * b // gcd(a,b)

test_case = int(input())

for _ in range(test_case):
  a, b = map(int,input().split())
  print(lcm(a,b))
