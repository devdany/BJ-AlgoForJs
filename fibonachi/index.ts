export const fibonachi = (n: number): number => {
  if (n <= 1) {
    return n
  }

  return fibonachi(n-1) + fibonachi(n-2)
}

export const fibonachMemo = (n: number): number => {
  const memo: number[] = []
  if (n <= 1) {
    return n
  }

  if (memo[n]) {
    return memo[n]
  }

  memo[n] = fibonachMemo(n-1) + fibonachMemo(n-2)
  return memo[n]
}

export const fibonachiBottomToTop = (n: number) => {
  const d = []
  d[0] = 0
  d[1] = 1

  for (let i = 2; i < 100; i++) {
    d[i] = d[i-1] + d[i-2]
  }
  return d[n]
}