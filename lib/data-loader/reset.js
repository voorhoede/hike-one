require('dotenv').config()
const axios = require('axios');
const retry = require('./retry')
const confirm = require('./confirm-reload');
const R = require('ramda');

const { DATO_API_TOKEN, ENVIRONMENT:environment } = process.env
const requestOpts = {
	headers: {
		'Accept': 'application/json',
		'Authorization': `Bearer ${DATO_API_TOKEN}`,
		'X-Api-Version': '2'
	},
	responseType: 'json'
}
const url = 'https://site-api.datocms.com/deployment-environments'

const checkPendingDeployment = environment => axios.get(url, requestOpts)
	.then(({ data: { data:environments } }) => {
		const deploymentEnv = environments.find(({ attributes: { name } }) => name.toLowerCase() === environment)
		return deploymentEnv.attributes
	})
	.then(({ deploy_status:status, last_deploy_at:time }) => {
		if (status === 'pending') {
			const parsedTime = new Date(time);
			const offsetMinutes = Math.floor((Date.now() - parsedTime) / 1000 / 60);
			if (offsetMinutes > 1) {
				return confirm({ success: true })
			}
		} else {
			return Promise.resolve()
		}
	})
	.catch(err => console.error(err.message))

module.exports = () => {
	return retry(() => checkPendingDeployment(environment), { action: 'check to reset deployment status', attempts: 20 })
}
