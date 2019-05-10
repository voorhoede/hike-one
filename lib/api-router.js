require('dotenv').config()
const dataLoader = require('./data-loader')
const express = require('express')
const router = express.Router()

const reloadToken = process.env.RELOAD_TOKEN

router.post('/reload-data/:token', (req, res) => {
  if (reloadToken && reloadToken === req.params.token) {
    dataLoader.reload()
      .then(() => {
        res.json({ status: 'Data reloaded.' })
        console.log('Data reloaded.')
      })
      .catch(error => {
        res.status(500).json({ status: 'Error loading data.', error: error.message })
        console.error('Error reloading data', error)
      })
  } else {
    res.status(401).json({ status: 'Invalid token.' })
  }
})

router.get('/:model', (req, res) => {
  const { model } = req.params
  dataLoader.load(model).then(data => res.json(data))
})

router.get('/:model/:slug', (req, res) => {
  const { model, slug } = req.params
  dataLoader.load(model)
    .then(items => items.find(item => item.slug === slug))
    .then(item => {
      if(!item) {
        return res.status(404).json({ status: 'could not find item' })
      }
      res.json(item)
    })
    .catch(error => {
      return res.status(404).json({ status: 'could not find item', error: error.message })
    })
})

module.exports = router
