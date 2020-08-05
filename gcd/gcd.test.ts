import { gcd } from "."

describe.skip('gcd & lcm', () => {
  it('gcd', () => {
    expect(gcd(16, 24)).toBe(8)
  })

  it('lcm', () => {
    const a = 16
    const b = 24
    const gcdVal = gcd(a, b)
    const lcm = a * b / gcdVal

    expect(lcm).toBe(48)
  })
})
