# 10886 0 = not cute / 1 = cute
from sys import stdin
input = stdin.readline

test_case = int(input().rstrip())
vote_data = {'0':0, '1':0}
for _ in range(test_case):
  vote = input().rstrip()
  vote_data[vote] += 1

if vote_data['0'] > vote_data['1'] :
  print('Junhee is not cute!')
else :
  print('Junhee is cute!')