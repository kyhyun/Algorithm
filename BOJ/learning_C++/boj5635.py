# boj5653 생일
from sys import stdin
input = stdin.readline
students = []
test_case = int(input().rstrip())

# 입력 받은 테스트 케이스 수 만큼 입력 받음
for _ in range(test_case):
    student = input().rstrip().split()
    # 생일 정보인 dd mm yyyy 의 값을 정수형으로 변환해준다.
    student[1:] = map(int, student[1:])
    students.append(student)

# 연, 월, 일 순으로 오름차순 정렬한다.
students.sort(key=lambda student: (student[3], student[2], student[1]))

print(students[-1][0])  # 가장 나이가 작은 사람의 이름 = 리스트에서 맨 뒤에 있는 요소 중 0번째 인덱스
print(students[0][0])  # 가장 나이가 많은 사람의 이름 = 리스트 맨 앞에 있는 요소 중 0번째 인덱스
