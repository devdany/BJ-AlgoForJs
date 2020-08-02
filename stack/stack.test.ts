import { editor, editorByStack, openAndClose, reverseWords, reverseWords2, rightBigNumber, stick } from '.'

describe('Stack', () => {
  it('단어 뒤집기', () => {
    const result = reverseWords('hello dany wow')
    expect(result).toEqual('olleh ynad wow')
  })

  it('단어뒤집기 2', () => {
    expect(reverseWords2('<ab cd>hello dany<kq tl>')).toEqual('<ab cd>olleh ynad<kq tl>')
  })

  it('올바른 괄호문자열 ()()(())', () => {
    expect(openAndClose('(())((()()))')).toBe(true)
    expect(openAndClose('(())(()())((())')).toBe(false)
  })

  it('에디터 문제', () => {
    expect(editor('hellodany', ['L', 'L', 'P t', 'D', 'B'])).toEqual('hellodaty')
    expect(editorByStack('hellodany', ['L', 'L', 'P t', 'D', 'B'])).toEqual('hellodaty')
  })

  it('쇠 막대기', () => {
    expect(stick('()(((()())(())()))(())')).toBe(17)
    expect(stick('(((()(()()))(())()))(()())')).toBe(24)
  })

  it('오큰수', () => {
    expect(rightBigNumber([3, 5, 2, 7])).toEqual([5, 7, 7, -1])
    expect(rightBigNumber([9, 5, 4, 8])).toEqual([-1, 8, 8, -1])
  })
})