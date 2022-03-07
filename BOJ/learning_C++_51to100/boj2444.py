# boj2444 별 찍기 - 7
N = int(input())
for i in range(1, N * 2):
  if i <= N :
    print(' ' * (N - i) + '*' * (2 * i - 1))
  else:
    print(' ' * (i - N) + '*' * (((N * 2 - i) * 2)- 1))