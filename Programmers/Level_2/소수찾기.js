function solution(numbers) {
  let nums = numbers.split("")
  let setNum = new Set()

  getPermutation(setNum, nums, "")

  return setNum.size
}

function getPermutation(setNum, arr, nextString) {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      let newNextString = Number(nextString + arr[i])
      let copyArr = [...arr]
      copyArr.splice(i, 1)

      if (isPrime(newNextString)) {
        setNum.add(newNextString)
      }

      getPermutation(setNum, copyArr, newNextString)
    }
  }
}

function isPrime(num) {
  if (num < 2) return false

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }

  return true
}
/*
문제 해결 과정 (요약)

1. 주어진 숫자 카드로 나올 수 있는 숫자의 조합 구하기 ( 재귀 함수 이용 )
2. 소수가 아닌 수 제거하기 ( set을 이용해서 중복되는 숫자 제거 )
3. 소수 여부 판별하기 ( 에라토스테네스의 체 or 반복문 )
*/
