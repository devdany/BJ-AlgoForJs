export const isPrime = (n: number) => {
  if (n < 2) {
    return false
  }

  for (let i = 2; i < n-1; i++) {
    if (n % i === 0) {
      return false
    } 
  }

  return true
}