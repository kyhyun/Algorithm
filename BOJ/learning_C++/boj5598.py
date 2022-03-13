# boj5598 카이사르 암호
s = list(input())
for i in range(len(s)):
    code = ord(s[i]) - 3
    if code < 65:
        code = code + 26
    s[i] = chr(code)
print(''.join(s))
