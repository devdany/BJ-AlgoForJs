import { fibonachMemo, fibonachi, fibonachiBottomToTop } from "."

describe.skip('fibonachi', () => {
  it('recursive fibonachi', () => {
    expect(fibonachi(10)).toBe(55)
  })

  it('momorization fibonachi', () => {
    expect(fibonachMemo(10)).toBe(55)
  })

  it('bottomToTop fibonachi', () => {
    expect(fibonachiBottomToTop(10)).toBe(55)
  })
})