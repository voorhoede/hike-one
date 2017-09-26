require('dotenv').config()
const promisify = require('util').promisify
const request = require('request')
const postRequest = promisify(request.post)

const confirmUrl = process.env.DATO_URL;

const confirmReload = ({ success }) => {
	return postRequest(confirmUrl, {
		json: {
			status: success ? 'success' : 'error'
		}
	})
}

module.exports = confirmReload
