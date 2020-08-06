import { callBus1, callBus2, callBus3, compress, isStraightLine, miso1, miso2, release } from "."

describe('test', () => {
  it('miso1', () => {
    expect(miso1(2147483647, 2147483647)).toBe(4294967294)
  })

  it('miso2', () => {
    expect(miso2('오백이십삼억삼십이만오','오십')).toBe('오백이십삼억삼십이만오십오')
    expect(miso2('육십사억삼천십팔만칠천육백구','사십삼')).toBe('육십사억삼천십팔만칠천육백오십이')
    expect(miso2('구백육십조칠천억팔천백삼십이만칠천일','사십삼조오천이백억육천구백십만일')).toBe('천사조이천이백일억오천사십이만칠천이')
    expect(miso2('이천구백육십조천오백칠십만삼천구백구십','삼천사백오십조일억이천만육백사십삼')).toBe('육천사백십조일억삼천오백칠십만사천육백삼십삼')
    expect(miso2('사십오억삼천육십만오백구십','칠십억천이백삼십오만칠천구십이')).toBe('백십오억사천이백구십오만칠천육백팔십이')
    expect(miso2('천백십일','구천오백구십구')).toBe('만칠백십')
    expect(miso2('오억사천','백십일')).toBe('오억사천백십일')
    expect(miso2('만오천사백삼십','십구만삼천오백')).toBe('이십만팔천구백삼십')
    expect(miso2('일조','삼')).toBe('일조삼')
    expect(miso2('일억','만')).toBe('일억일만')
  })

  it('callbus1', () => {
    expect(callBus1(2)).toBe(4)
    expect(callBus1(3)).toBe(8)
    expect(callBus1(4)).toBe(16)
  })

  it('callbus2', () => {
    expect(callBus2(1, 4)).toBe(false)
    expect(callBus2(3, 3)).toBe(true)
    expect(callBus2(6, 23)).toBe(false)
    expect(callBus2(0, 23)).toBe(true)
    expect(callBus2(0, 3)).toBe(false)
  })

  it('callbus3', () => {
    expect(callBus3(6, 4)).toBe(undefined)
  })

  it('callbus4', () => {
    expect(compress('ZZZAAAABBCCQ')).toEqual('3Z4A2B2C1Q')
    expect(release('3Z4A2B2C1Q')).toEqual('ZZZAAAABBCCQ')
  })

  it('callbus5', () => {
    expect(isStraightLine(0,0,1,1,2,2)).toBe(true)
    expect(isStraightLine(-2,-1,2,1,4,2)).toBe(true)
    expect(isStraightLine(-2,-1,2,1,5,2)).toBe(false)
    
  })
})
