# boj2747 피보나치 수
arr = [0, 1]
def fibo(n):
  global arr
  if len(arr) <= n:
    arr.append(fibo(n-1) + fibo(n-2)) 
  return arr[n]
  
N = int(input())
print(fibo(N))