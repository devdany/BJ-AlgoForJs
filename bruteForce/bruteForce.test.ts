import { UnitType, brokenRemoteController, candyGame, connectNumber, factorial, sevenShort, weiredDate } from "."

describe('Brute force', () => {
  it('일곱난쟁이', () => {
    const result = sevenShort([20, 7, 23, 19, 10, 15, 25, 8, 13])
    expect(result.reduce((a, b) => a + b, 0)).toBe(100)
  })

  it('사탕게임', () => {
    const board: UnitType[][] = []
    board[0] = [UnitType.yellow, UnitType.red, UnitType.blue, UnitType.green, UnitType.yellow]
    board[1] = [UnitType.red, UnitType.yellow, UnitType.green, UnitType.green, UnitType.blue]
    board[2] = [UnitType.red, UnitType.red, UnitType.blue, UnitType.blue, UnitType.blue]
    board[3] = [UnitType.yellow, UnitType.red, UnitType.yellow, UnitType.green, UnitType.red]
    board[4] = [UnitType.red, UnitType.blue, UnitType.blue, UnitType.green, UnitType.green]
    expect(candyGame(board)).toBe(4)
  })

  it ('날짜계산', () => {
    expect(weiredDate([1, 16, 16])).toBe(16)
    expect(weiredDate([1, 1, 1])).toBe(1)
    expect(weiredDate([1, 2, 3])).toBe(5266)
    expect(weiredDate([15, 28, 19])).toBe(7980)
  })

  it('고장난 리모컨', () => {
    expect(brokenRemoteController(5457, [6, 7, 8])).toBe(6)
    expect(brokenRemoteController(100, [0, 1, 2, 3, 4])).toBe(0)
    expect(brokenRemoteController(500000, [0, 2, 3, 4, 6, 7, 8, 9])).toBe(11117)
  })

  it('수 이어 쓰기', () => {
    expect(connectNumber(10)).toBe(11)
    expect(connectNumber(99)).toBe(189)
    expect(connectNumber(120)).toBe(252)
  })

  it('팩토리얼', () => {
    factorial(4, 2)
  })  
})