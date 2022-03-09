# boj5355 화성수학
def hwasung_calc(operator, number):
  if operator == "@":
    number *= 3
  elif operator == "%":
    number += 5
  elif operator == "#":
    number -= 7
  return number

for _ in range(int(input())):
  number, *oper_list = input().split()
  number = float(number)

  for oper in oper_list:
    number = hwasung_calc(oper, number)

  print(f'{number:.2f}')