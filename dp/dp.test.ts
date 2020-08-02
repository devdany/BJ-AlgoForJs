import { add1or2or3, doubleTile, doubleTitle2, makeTo1, makeTo1BottomUp } from "."

describe('dp', () => {
  it('makeTo1', () => {
    expect(makeTo1(10)).toBe(3)
    expect(makeTo1BottomUp(10)).toBe(3)
  })

  it('n * 2 타일링', () => {
    expect(doubleTile(9)).toBe(55)
  })

  it('n * 2 타일링 2', () => {
    expect(doubleTitle2(8)).toBe(171)
    expect(doubleTitle2(12)).toBe(2731)
  })

  it('1, 2, 3으로 표현하기', () => {
    expect(add1or2or3(4)).toBe(7)
    expect(add1or2or3(7)).toBe(44)
    expect(add1or2or3(10)).toBe(274)
  })
})