# boj2754 학점 계산
from sys import stdin
input = stdin.readline
s = input().rstrip()

grade = {'A' : 4.0, 'B': 3.0, 'C': 2.0,'D':1.0}
oper = {'+' : .3, '-':-.3,'0':.0}
if len(s) == 1 : print(.0)
else: print(grade[s[0]] + oper[s[1]])