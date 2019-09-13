function setImageParams(imageUrl, params) {
  const defaults = '?cs=strip&auto=format&q=75&'
  const queryString = Object.keys(params).reduce((acc, item, index, array) => {
    const amp = array.length - 1 === index ? ' ' : '&'
    return `${acc}${item}=${params[item]}${amp}`
  }, '')
  const url = `${imageUrl}${defaults}${queryString}`
  return url.trim()
}

export default setImageParams
