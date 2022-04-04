// @ts-check
/**
 * 
 * @param {number} width 
 * @returns {string}
 */
export function genSpaces(width) {
  let spaces = ""
  while(spaces.length < width) {
    spaces += " "
  }

  return spaces
}