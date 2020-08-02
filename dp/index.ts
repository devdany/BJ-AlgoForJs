// https://www.acmicpc.net/problem/1463
const d: number[] = [] // n을 1로 만드는 연산 횟수 
export const makeTo1 = (n: number): number => {
  if (n === 1) {
    return 0
  }

  if (d[n]) {
    return d[n]
  }
  
  const possible = [makeTo1(n-1) + 1]

  if (n % 3 === 0) {
    possible.push(makeTo1(n/3) + 1)
  }

  if (n % 2 === 0) {
    possible.push(makeTo1(n/2) + 1)
  }
  d[n] = Math.min(...possible)
  return d[n]  
}

export const makeTo1BottomUp = (n: number) => {
  const d: number[] = []
  d[1] = 0
  for (let i = 2; i <= n; i++) {
    const possible = [d[i-1] + 1]
    if (i % 3 === 0) {
      possible.push(d[i/3] + 1)
    }

    if (i % 2 === 0) {
      possible.push(d[i/2] + 1)
    }

    d[i] = Math.min(...possible)
  }
  return d[n]
}

// https://www.acmicpc.net/problem/11726
export const doubleTile = (n: number) => {
  const d: number[] = []
  d[1] = 1
  d[2] = 2

  for (let i = 3; i <= n; i++) {
    d[i] = d[i-1] + d[i-2]
  }

  return d[n]
}

// https://www.acmicpc.net/problem/11727
export const doubleTitle2 = (n: number) => {
  const d: number[] = []
  d[1] = 1
  d[2] = 3
  for (let i = 3; i <= n; i++) {
    d[i] = d[i-1] + d[i-2] + d[i-2]
  }
  return d[n]
}

// https://www.acmicpc.net/problem/9095
export const add1or2or3 = (n: number) => {
  const d: number[] = [] //n을 1 & 2 & 3의 조합으로 만드는 방법의 수
  d[1] = 1
  d[2] = 2
  d[3] = 4

  for(let i = 4; i <= n; i++) {
    d[i] = d[i-1] + d[i-2] + d[i-3]
  }

  return d[n]
}
