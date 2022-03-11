# boj2506 점수계산
N = int(input())
num_list = list(map(int, input().split()))
sum, bonus = 0, 0
for i in range(N):
    if num_list[i] == 1:
        sum += bonus + 1
        bonus += 1
    else:
        bonus = 0

print(sum)
