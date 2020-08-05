// https://www.acmicpc.net/problem/2309
export const sevenShort = (inputs: number[]) => {
  const sum = inputs.reduce((a, b) => a + b, 0)
  let not: number[] = []
  for (let i = 0; i < inputs.length; i++) {
    let isFound = false
    for (let j = 0; j < inputs.length; j++) {
      if (i === j) {
        continue
      }
      if (sum - (inputs[i] + inputs[j]) === 100) {
        not = [i, j]
        isFound = true
        break
      }
    }

    if (isFound) {
      break
    }
  }

  return inputs.filter((_, index) => !not.includes(index))
}

// https://www.acmicpc.net/problem/3085
export enum UnitType {
  red = 'C',
  blue = 'P',
  green = 'Z',
  yellow = 'Y'
}

const getMaxCandies = (board: UnitType[][], x: number, y: number) => {
  // 행 확인
  let cnt: number = 0
  let results: number[] = []
  let latestCandy: UnitType | null = null
  for (let i = 0; i < board.length; i++) {
    if (latestCandy === board[y][i]) {
      cnt ++
    } else {
      results.push(cnt)
      cnt = 1
      latestCandy = board[y][i]
    }
  }

  // 열 확인
  cnt = 0
  results = []
  latestCandy = null

  for (let i = 0; i < board.length; i++) {
    if (latestCandy === board[i][x]) {
      cnt ++
    } else {
      results.push(cnt)
      cnt = 1
      latestCandy = board[i][x]
    }
  }

  const result = Math.max(...results)
  return result
}

const swap = (board: UnitType[][], first: number[], second: number[]) => {
  const temp = board[first[1]][first[0]]
  board[first[1]][first[0]] = board[second[1]][second[0]]
  board[second[1]][second[0]] = temp
}

export const candyGame = (board: UnitType[][]) => {
  let currentMaxCount = 0 
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // change to right
      let rightEatCandies = 0
      let bottomEatCandies = 0
      if (j < board.length - 1) {
        swap(board, [j, i], [j+1, i])
        rightEatCandies = getMaxCandies(board, j, i)
        swap(board, [j+1, i], [j, i])
      }

      // change to Bottom
      if (i < board.length - 1) { 
        swap(board, [i, j], [i+1, j])
        bottomEatCandies = getMaxCandies(board, j, i)
        swap(board, [i+1, j], [i, j])
      }

      const currentCount = Math.max(rightEatCandies, bottomEatCandies)

      if (currentMaxCount < currentCount) {
        currentMaxCount = currentCount
      }
    }
  }
  return currentMaxCount
}

//https://www.acmicpc.net/problem/1476
export const weiredDate = (dateFormat: number[]) => {
  const [E, S, M] = dateFormat

  let current = [1, 1, 1]
  let currentYear = 1
  while (current[0] !== E || current[1] !== S || current[2] !== M) {
    currentYear ++
    if (current[0] === 15) {
      current[0] = 1
    } else {
      current[0] = current[0] + 1
    }

    if (current[1] === 28) {
      current[1] = 1
    } else {
      current[1] = current[1] + 1
    }

    if (current[2] === 19) {
      current[2] = 1
    } else {
      current[2] = current[2] + 1
    }
  }
  return currentYear
}

const possible = (target: number, brokenButtons: number[]) => {
  const splited = target.toString().split('')
  let isPossible = true
  for (let i = 0; i < splited.length; i++) {
    if (brokenButtons.includes(Number(splited[i]))) {
      isPossible = false
      break
    }
  }
  return isPossible
}

export const brokenRemoteController = (targetChanel: number, brokenButtons: number[]) => {
  const currentChannel = 100
  // const d: number[] = [] // d[n]: n으로 이동해서 targetChanel로 가려고 할때 버튼을 눌러야 하는 수

  if (currentChannel === targetChanel) {
    return 0
  }

  let minimum = targetChanel * 2
  for (let i = 0; i <= targetChanel * 2; i++) {
    let cnt = 0
    if(!possible(i, brokenButtons)) {
      cnt = targetChanel > currentChannel ? targetChanel - currentChannel : currentChannel - targetChanel
    } else {
      cnt = targetChanel > i ? targetChanel - i + i.toString().length : i - targetChanel + i.toString().length
    }

    if (cnt < minimum ) {
      minimum = cnt
    }
  }

  return minimum
}

export const connectNumber = (n: number) => {
  let result
  // 만약 n = 1000
  // d[n] 을 n까지 나열해서 쓴 길이
  // d[n] = (1*9) + (2* 10 ~ 99) + (3 * 100 ~ 999) + (4* 1000 ~ 1000)
  const splited = n.toString().split('')
  let totalLen = 0
  for (let i = 1; i <= splited.length; i++) {
    let startCnt = 0
    for (let j = 0; j <= i-1; j++ ) {
      if (startCnt === 0) {
        startCnt = 1
      } else {
        startCnt = startCnt * 10
      }
    }

    let lastCnt = 1

    if (i === splited.length) {
      lastCnt = n + 1
    } else {
      for (let j = 1; j <= i; j++) {
        lastCnt = lastCnt * 10
      }
    }

    const len = lastCnt - startCnt
    totalLen += (len * i)    
  }

  return totalLen
}
// https://www.acmicpc.net/problem/15649
export const factorial = (n: number, m: number) => {
  const used: boolean[] = []
  const result: number[] = []
  const go = (index: number, n: number, m: number) => {
    if (index === m) {
      console.log(result)
      return
    }

    for (let i = 1; i <= n; i++) {
      if (used[i]) {
        continue
      }

      used[i] = true
      result[index] = i
      go(index + 1, n, m)
      used[i] = false
    }
  }
  go(0, n, m)
}
