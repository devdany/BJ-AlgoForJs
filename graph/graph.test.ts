import { houseGroup, makeBfs, makeDfs } from "."

describe('Graph', () => {
  it('인접리스트 dfs', () => {
    const graph: number[][] = []
    graph[0] = [0]
    graph[1] = [2, 5]
    graph[2] = [1, 3, 4, 5]
    graph[3] = [2, 4]
    graph[4] = [3, 5, 2, 6]
    graph[5] = [1, 2, 4]
    graph[6] = [4]
    makeDfs(graph)
    expect(1).toBe(1)
  })

  it('인접리스트 bfs', () => {
    const graph: number[][] = []
    graph[0] = [0]
    graph[1] = [2, 5]
    graph[2] = [1, 3, 4, 5]
    graph[3] = [2, 4]
    graph[4] = [3, 5, 2, 6]
    graph[5] = [1, 2, 4]
    graph[6] = [4]
    makeBfs(graph)
    expect(1).toBe(1)
  })

  it.only('단지번호 붙이기', () => {
    const map: number[][] = []
    map[0] = [0, 1, 1, 0, 1, 0, 0]
    map[1] = [0, 1, 1, 0 ,1, 0, 1]
    map[2] = [1, 1, 1, 0, 1, 0, 1]
    map[3] = [0, 0, 0, 0, 1, 1, 1]
    map[4] = [0, 1, 0, 0, 0, 0, 0]
    map[5] = [0, 1, 1, 1, 1, 1, 0]
    map[6] = [0, 1, 1, 1, 0, 0, 0]
    
    expect(houseGroup(map)).toEqual([7, 8, 9])
  })
})