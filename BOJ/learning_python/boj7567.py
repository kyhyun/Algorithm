# boj7567 그릇
s = input()
result = 10

for i in range(1, len(s)):
    if s[i] == s[i-1]:
        result += 5
    else:
        result += 10
print(result)