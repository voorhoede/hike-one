require('dotenv').config()
const axios = require('axios')
const retry = require('../retry')
const confirm = require('./confirm-reload')

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

const confirmDeploymentResult = (environment, success) => axios.get(url, requestOpts)
  .then(({ data: { data: environments } }) => {
    // From Dato, get deployment status for the environment that we're in
    const { attributes: { deploy_status:status } } = environments.find(({ attributes: { name = '' } }) => name.toLowerCase() === environment)
    if (status === 'pending') {
      // Send http call to confirm deployment result if status is pending
      return confirm({ success })
        // Reject to signal that this operation should be re-tried
        .then(() => Promise.reject(new Error('deployment is pending')))
    } else {
      // If deployment status is not pending, resolve
      return Promise.resolve()
    }
  })

module.exports = success => {
  /*
    This function takes the result of the dato dump script and will try
    reporting it back to datoCMS to conclude the deployment process.
    Will resolve when dato reports a non-pending deployment status for the
    current deployment environment. Will reject if the maximum amount of
    retries is exceeded.
  */
  return retry(() => confirmDeploymentResult(environment, success), { action: 'confirm deployment status to datocms' })
}
