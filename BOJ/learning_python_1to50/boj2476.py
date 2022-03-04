# boj2476 주사위 게임
N = int(input())
winner = []
for _ in range(N):
  users = list(map(int, input().split()))
  if users[0] == users[1] == users[2]:
    winner.append(10000 + (users[0] * 1000))
  elif users[0] == users[1] or users[0] == users[2]:
    winner.append(1000 + (users[0] * 100))
  elif users[1] == users[2]:
    winner.append(1000 + (users[1] * 100))
  else : winner.append(max(users) * 100)

print(max(winner))