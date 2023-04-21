/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  while(value.some(Array.isArray)) {
    value = [].concat(...value)
  }

  return value
}

//OR RECURSIVE SOLUTION USING REDUCE

/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  return value.reduce((acc, curr) =>
    acc.concat(Array.isArray(curr) ? flatten(curr) : curr),[])
}