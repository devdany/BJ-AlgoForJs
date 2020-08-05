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

// https://www.acmicpc.net/problem/11052
export const buyCard = (packs: number[]) => {
  // 배열 인덱스를 편하게 보기위해 0 추가
  const d: number[] = [0, ...packs.map(() => 0)] // d[n] 은 n개의 카드를 얻기위해 지불해야 하는 금액의 최대값, 초기화를 0으로.
  const p: number[] = [0, ...packs]
  // p[n] 은 n개의 카드가 든 카드팩의 가격
  // 1 <= i <= n
  // d[n] = d[n-i] + p[i]
  for (let i = 1; i <= packs.length; i++) {
    for (let j = 1; j <= i; j++) {
      d[i] = Math.max(d[i], d[i-j] + p[j])
    }
    // console.log(d[i])
  }
  return d[packs.length]
}

// https://www.acmicpc.net/problem/15990
export const add1or2or3Upgrade = (n: number) => {
  /*
    d[1][1] = 1
    d[2][1] d[2][2] = 2 11
    d[3] = 12 21 3
    d[4] = 121 31 13
  */
  const d: number[][] = [] //d[n][k] = n을 1, 2, 3조합으로 만드는데, 마지막에 쓴 수가 k인 경우의 수
  
  // array init
  for (let i = 0; i <= n; i++) {
    d.push([0, 0, 0, 0])
  }
  
  d[1][1] = 1 // 1을 만드는데 마지막이 1
  d[1][2] = 0 // 1을 만드는데 마지막이 2인 경우는 있을수 없음.
  d[3][3] = 0 // 1을 만드는데 마지막에 3인 경우도 있을 수 없음.

  d[2][1] = 0 // 2를만드는데 마지막이 1인경우는 중복이 생길수 밖에 없기 때문에, 있을 수 없음.
  d[2][2] = 1 // 이하 계속 같은 원리
  d[2][3] = 0
  
  d[3][1] = 1
  d[3][2] = 1
  d[3][3] = 1
  

  for (let i = 4; i <= n; i++) {
    for (let j = 1; j<= 3; j++) {
      if (j === 1) {
        d[i][j] = d[i-1][2] + d[i-1][3]
      } else if (j === 2) {
        d[i][j] = d[i-2][1] + d[i-2][3]
      } else {
        d[i][j] = d[i-3][1] + d[i-3][2]
      }
    }
  }

  return d[n].reduce((a, b) => a+b, 0)
}

// https://www.acmicpc.net/problem/10844
export const stairNumber = (n: number) => {
  const d: number[][] = []
  for (let i = 1; i < 9; i++) {
    d.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  }
  
  // d[n][k] = n자리의 계단수인데, 마지막에 사용한 숫자가 k인 경우의수

  //초기화
  for (let i = 0; i <=9; i++) {
    d[1][i] = 1
  }
  d[1][0] = 0

  for (let i = 2; i <= n; i++) {
    for (let k = 0; k <= 9; k++) {
      d[i][k] = 0
      if (k > 0) {
        d[i][k] += d[i-1][k-1]
      }
      if (k < 9) {
        d[i][k] += d[i-1][k+1]
      }
    }
  }

  return d[n].reduce((a, b) => a+b, 0)
}

// https://www.acmicpc.net/problem/2193
export const pinaryNumber = (n: number) => {
  // d[n][k]: n자리의 이친수의 개수인데 마지막 숫자가 k
  // k = 0 or 1
  const d: number[][] = []

  // 초기화
  for (let i = 0; i <= n; i++) {
    d[i] = [0, 0]
  }

  d[1][0] = 0
  d[1][1] = 1

  // d[n][0] = d[n-1][0] + d[n-1][1]
  // d[n][1] = d[n-1][0]
  for (let i = 2; i <= n; i++) {
    d[i][0] = d[i-1][0] + d[i-1][1]
    d[i][1] = d[i-1][0]
  }

  return d[n].reduce((a, b) => a+b, 0)
}

// https://www.acmicpc.net/problem/11053
export const longestIncreasingSequence = (seq: number[]) => {
  // d[n] : n으로 끝나는 가장긴 부분수열
  const d: number[] = []
  d[0] = 1
  for (let i = 1; i < seq.length; i++) {
    d[i] = 1
    
    const avaiableSequenceDistance = []
    for (let j = 0; j< i; j++) {
      if (seq[j] < seq[i]) {
        avaiableSequenceDistance.push(d[j])
      }
    }

    if (avaiableSequenceDistance.length > 0) {
      d[i] = Math.max(...avaiableSequenceDistance) + 1
    }
    
  }

  return Math.max(...d)
}

// https://www.acmicpc.net/problem/1912
export const continueSum = (seq: number[]) => {
  // d[n]: n으로 끝나는 연속합중 가장 큰 것
  d[0] = seq[0]
  for (let i = 1; i < seq.length; i++) {
    d[i] = Math.max(d[i-1] + seq[i], seq[i])
  }

  return Math.max(...d)
}

// https://www.acmicpc.net/problem/1699
export const sumOfSquareNumber = (n : number) => {
  // d[n]: 자연수n을 제곱수로 나타낸 것중 항의 개수가 제일 작은것
  const d = []
  d[0] = 0

  for (let i = 1; i <= n; i++) {
    // 초기화 1의 제곱으로만 만든것
    d[i] = i

    if (i < 4) {
      continue 
    }

    const possible = []
    for (let j = 1; j * j <= i; j++) {
      possible.push(d[i - (j * j)] + 1)
    }

    d[i] = Math.min(...possible)
  }
  return d[n]
}

// 포기
// export const sumDecomposition = (n: number, k: number) => {
//   // d[k][n]: 0부터 n까지의 정수중, k개를 사용해서 만들 수 있는 경우의 수
//   const d: number[][] = []

//   for (let i = 0; i <= n; i++) {
//     d[i] = []
//     for (let j = 0; j <= k; j++) {
//       d[i][j] = 0
//     }
//   }

//   for (let i = 0; i <=k; i++) {
//     d[i][1] = i
//   }

//   for (let i = 1; i <= k; i++) {
//     for (let j = 0; j <= n; j++) {
//       for (let l = 0; l <= j; l++) {
//         d[i][j] = d[i][j] + d[i-1][j-l]
//       }
//     }
//   }

//   console.log(d)

//   return d[k][n]
// }