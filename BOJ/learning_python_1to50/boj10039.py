# boj10039 평균점수
a = int(input())
b = int(input())
c = int(input())
d = int(input())
e = int(input())

grade = [a, b, c, d, e]
sum = 0
for i in grade:
  if i < 40: 
    i = 40
  sum += i
print(sum//len(grade))
