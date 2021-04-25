import { isNumeric } from '../src'

describe('isNumber()', () => {
  it('does NOT handle comma', async () => {
    await expect(isNumeric('33,538')).toBe(false)
  })
  it('handle stringified int', async () => {
    await expect(isNumeric('392384928')).toBe(true)
  })
  it('handle stringified float', async () => {
    await expect(isNumeric('33.538')).toBe(true)
  })
  it('handle empty string', async () => {
    await expect(isNumeric('')).toBe(false)
  })
  it('handle whitespace', async () => {
    await expect(isNumeric(' \t')).toBe(false)
  })
  it('handle words', async () => {
    await expect(isNumeric('hello word')).toBe(false)
  })
  it('handle array', async () => {
    await expect(isNumeric([])).toBe(false)
  })
  it('handle object', async () => {
    await expect(isNumeric({})).toBe(false)
  })
  it('handle bool', async () => {
    await expect(isNumeric(true)).toBe(false)
  })
})
