// source https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number/175787#175787
export const isNumeric = (input: any) => {
  if (typeof input == 'number') return true
  if (typeof input != 'string') return false // we only process strings!
  // @ts-ignore
  return !isNaN(input) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(input)) // ...and ensure strings of whitespace fail
}
