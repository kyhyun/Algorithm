# boj4101 크냐?
while True:
  first, second = map(int, input().split())
  
  if first == second == 0:
    break;
  else:
    if first > second :
      print('Yes')
    else:
      print('No')