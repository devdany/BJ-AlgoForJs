// 인접 리스트 dfs
export const makeDfs = (graph: number[][]) => {
  const check: boolean[] = []
  const dfs = (x: number) => {
    check[x] = true
    console.log(x + ' 도착!')
    for (let i = 0; i < graph[x].length; i++) {
      const v = graph[x][i]
      if (!check[v]) {
        console.log('go to '+ v)
        dfs(v)
      }
    }
  }
  console.log('1에서 출발!')
  dfs(1)
}

// 인접 리스트 bfs
export const makeBfs = (graph: number[][]) => {
  const check: boolean[] = []
  const queue: number[] = []
  check[1] = true
  queue.push(1)
  const frontPop = (arr: number[]) => {
    return arr.splice(0, 1)[0]
  }
  while (queue.length !== 0) {
    const v = frontPop(queue)
    console.log(v+ '와 연결되어 있는곳 찾는다.')
    for (let i = 0; i < graph[v].length; i++) {
      const connected = graph[v][i]
      console.log(connected +'가 연결되어 있었다.')
      if (!check[connected]) {
        console.log(connected+'는 방문한 적이 없다. => 방문 체크')
        check[connected] = true
        queue.push(connected)
      } else {
        console.log(connected+'는 이미 방문했다..')
      }
    }
  }
}

// 이분그래프
// https://www.acmicpc.net/problem/1707
export const divideGraph = (graph: number[][]) => {
  // 0: 방문안함, 1: 번그룹 방문,
  const check: number[] = []
  const dfs = (x: number, group: number) => {
    check[x] = group
    for (let i = 0; i < graph[x].length; i++) {
      const next = graph[x][i]
      if (check[next] === 0) {
        dfs(next, 3-group)
      }
    }
  }
  let isOk = true
  for (let i = 1; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      const v = graph[i][j]
      if (check[i] === check[j]) {
        isOk = false
      }
    }
  }
  return isOk
}

// https://www.acmicpc.net/problem/2667
export const houseGroup = (map: number[][]) => {
  const d: number[][] = []
  let cnt = 0
  for (let i = 0; i< map.length; i++) {
    d[i] = []
    for (let j = 0; j < map.length; j++) {
      d[i][j] = 0
    }
  }

  type Coordinate = {
    i: number,
    j: number
  }

  const bfs = (i: number, j: number, cnt: number) => {
    const queue: Coordinate[] = []
    queue.push({ i, j })
    d[i][j] = cnt
    const frontPop = (arr: Coordinate[]) => {
      return arr.splice(0, 1)[0]
    }
    while(queue.length !== 0) {
      const target = frontPop(queue)
      if (target.i > 0 && d[target.i - 1][target.j] === 0 && map[target.i-1][target.j] === 1) {
        d[target.i-1][target.j] = cnt
        queue.push({
          i: target.i-1,
          j: target.j
        })
      }

      if (target.j > 0 && d[target.i][target.j-1] === 0 && map[target.i][target.j-1] === 1) {
        d[target.i][target.j-1] = cnt
        queue.push({
          i: target.i,
          j: target.j-1
        })
      }

      if (target.i < map.length-1 && d[target.i+1][target.j] === 0 && map[target.i+1][target.j] === 1) {
        d[target.i+1][target.j] = cnt
        queue.push({
          i: target.i+1,
          j: target.j,
        })
      }

      if (target.j < map.length-1 && d[target.i][target.j+1] === 0 && map[target.i][target.j+1] === 1) {
        d[target.i][target.j+1] = cnt
        queue.push({
          i: target.i,
          j: target.j+1
        })
      }
    }
  }

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (map[i][j] === 1 && d[i][j] === 0) {
        bfs(i, j, ++cnt)
      }
    }
  }

  const result: number[] = []
  for (let i = 0; i < d.length; i++) {
    for (let j = 0; j < d[i].length; j++) {
      const danji = d[i][j]
      if (danji !== 0) {
        if (result[danji]) {
          result[danji] = result[danji] + 1
        } else {
          result[danji] = 1
        }
      }
    }
  }
  result.splice(0, 1)
  return result
}