import { containsUnicode } from './unicode'

describe('isUnicodeCharacter()', () => {
  it('recognizes English to be false', () => {
    expect(containsUnicode('hello')).toBe(false)
  })
  it('recognizes Chinese', () => {
    expect(containsUnicode('卡文杯超级联赛 拳皇98个人赛')).toBe(true)
    expect(containsUnicode('love立诚')).toBe(true)
  })
  it('recognizes Japanese', () => {
    // TODO
  })
})
