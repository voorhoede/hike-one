const fs = require('fs')
const globby = require('globby')
const path = require('path')
const promisify = require('util').promisify
const readFileAsync = promisify(fs.readFile)

const dataDir = path.join(__dirname, '..', '..', 'data', 'current')

const loadData = () => globby(`*.json`, { cwd: dataDir })
	.then(filenames => filenames.map(filename => path.basename(filename, '.json')))
	.then(models => {
		return Promise.all(
			models.map(model => {
				return readFileAsync(path.join(dataDir, `${model}.json`), 'utf8')
				.then(contents => JSON.parse(contents))
			})
		).then(data => {
			return models.reduce((all, model, index) => Object.assign(all, { [model]: data[index] }), {})
		})
	})


module.exports = loadData
