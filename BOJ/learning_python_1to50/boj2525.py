# boj2525 오븐 시계
h, m = map(int, input().split())
r = int(input())
m += r 

if m > 59:
  h += m // 60
  m = m % 60
if h > 23:
  h = h % 24

print(h,m)