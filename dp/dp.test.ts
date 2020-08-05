import { add1or2or3, add1or2or3Upgrade, buyCard, continueSum, doubleTile, doubleTitle2, longestIncreasingSequence, makeTo1, makeTo1BottomUp, pinaryNumber, stairNumber, sumOfSquareNumber } from "."

describe.skip('dp', () => {
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

  it('카드 구매하기', () => {
    expect(buyCard([1, 5, 6,7])).toEqual(10)
    expect(buyCard([10, 9, 8, 7, 6])).toEqual(50)
    expect(buyCard([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])).toEqual(55)
    expect(buyCard([5, 10, 11, 12, 13, 30, 35, 40, 45, 47])).toEqual(50)
  })

  it('1, 2, 3 으로 표한하기 업그레이드', () => {
    expect(add1or2or3Upgrade(4)).toBe(3)
    expect(add1or2or3Upgrade(7)).toBe(9)
    expect(add1or2or3Upgrade(10)).toBe(27)
  })

  it('계단수', () => {
    expect(stairNumber(2)).toBe(17)
  })

  it('이친수', () => {
    expect(pinaryNumber(3)).toBe(2)
    expect(pinaryNumber(4)).toBe(3)
    expect(pinaryNumber(5)).toBe(5)
  })

  it('증가하는 가장 긴 부분수열', () => {
    expect(longestIncreasingSequence([10, 20, 10, 30, 20, 50]))
  })

  it('연속합', () => {
    expect(continueSum([10, -4, 3, 1, 5, 6, -35, 12, 21, -1])).toBe(33)
  })

  it('제곱수의 합', () => {
    expect(sumOfSquareNumber(7)).toBe(4)
    expect(sumOfSquareNumber(11)).toBe(3)
  })

  // it('합분해', () => {
  //   expect(sumDecomposition(20, 2)).toBe(21)
  // })
})