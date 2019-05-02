// from https://24ways.org/2010/calculating-color-contrast/
// calculates if color constrast is black or white
function getContrastYIQ(hexcolor) {
  const hex = hexcolor[0] === '#' ? hexcolor.substring(1) : hexcolor
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return (yiq >= 128) ? 'black' : 'white'
}

export default getContrastYIQ
