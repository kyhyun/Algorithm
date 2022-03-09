# boj10102 개표
N = int(input())
votes = list(input())

if votes.count('A') > votes.count('B'):
  print('A')
elif votes.count('A') < votes.count('B'):
  print('B')
else :
  print('Tie')