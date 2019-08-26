function setImageParams(imageUrl, params) {
  const defaults = '?cs=strip&'
  const querString = Object.keys(params).reduce((acc, item, index, array) => {
    const amp = array.length - 1 === index ? ' ' : '&'
    return `${acc}${item}=${params[item]}${amp}`
  }, '')
  const url = `${imageUrl}${defaults}${querString}`
  return url.trim()
}

export default setImageParams
