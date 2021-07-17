export function genSpaces(width: number) {
  let spaces = ''
  while(spaces.length < width) {
    spaces += ' '
  }

  return spaces
}