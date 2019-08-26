require('dotenv').config()
const promisify = require('util').promisify
const request = require('request')
const postRequest = promisify(request.post)

const confirmUrl = process.env.DATO_URL

const confirmReload = ({ success }) => {
  return postRequest(confirmUrl, {
    timeout: 5000,
    json: {
      status: success ? 'success' : 'error'
    }
  })
  .then(response => {
    const { statusCode } = response
    if (statusCode >= 200 && statusCode < 300) {
      return Promise.resolve(response)
    }
    return Promise.reject(response)
  })
}

module.exports = confirmReload
