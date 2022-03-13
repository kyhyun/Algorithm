# boj5598 카이사르 암호
s = list(input())
answer = []
for i in range(len(s)):
    code = ord(s[i]) + 3
    if code >= 90:
        answer[i] = chr(code - 26)
    else:
        answer[i] = chr(code)
print(answer)
