// https://www.acmicpc.net/problem/1158
export const josepus = (totalCount: number, start: number) => {
  const circular = []
  const result = []
  for (let i = 1; i <= totalCount; i++) {
    circular.push(i)
  }

  let cnt = 0
  while (circular.length !== 0) {
    if (cnt === 2) {
      const first: number[] = circular.splice(0, 1)
      if (first.length > 0) {
        result.push(first[0])
      } 
      cnt = 0
    } else {
      const first: number[] = circular.splice(0, 1)
      if (first.length > 0) {
        circular.push(first[0])
      }
      cnt ++
    }
  }
  return result
}