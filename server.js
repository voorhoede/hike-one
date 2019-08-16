const apiRouter = require('./lib/api-router')
const dataLoader = require('./lib/data-loader')
const getSitemap = require('./lib/sitemap')
const datoRedirect = require('./lib/dato-redirect')

const auth = require('express-basic-auth')
const express = require('express')
const next = require('next')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')

const dev = process.env.NODE_ENV !== 'production'
const isDevelopment = process.env.ENVIRONMENT === 'development'
// const isStaging = process.env.ENVIRONMENT === 'staging'
const isStaging = true
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()

const startServer = () => {
  const app = server.listen(isDevelopment ? 3000 : 0)
  // eslint-disable-next-line no-console
  console.info(`Server listening on http://localhost:${app.address().port}`)
}

function checkAuth(user, secret) {
  return auth.safeCompare(user, process.env.STAGING_USER) && auth.safeCompare(secret, process.env.STAGING_SECRET)
}

const userAuth = auth({
  authorizer: checkAuth,
  challenge: true,
})

server.use(compression())
server.use(helmet())
server.use('/sitemap.xml', getSitemap)
server.use(express.static('./static/root'))
if (!isDevelopment) {
  // load redirection middleware if not in local development
  server.use(require('./lib/www-redirect'))
}
server.use(datoRedirect)
server.use(cookieParser())
server.use('/api/', apiRouter)
server.get('/case/:slug', (req, res) => app.render(req, res, '/case', { slug: req.params.slug }))
server.get('/service/:slug', (req, res) => app.render(req, res, '/service', { slug: req.params.slug }))
server.get('/team/', (req, res) => app.render(req, res, '/team', { slug: 'culture' }))
server.get('/team/:slug', (req, res) => app.render(req, res, '/team', { slug: req.params.slug }))
server.get('/update/:slug', (req, res) => app.render(req, res, '/update', { slug: req.params.slug }))
server.get('/topic/:slug', (req, res) => app.render(req, res, '/topic', { slug: req.params.slug }))

if (isStaging) {
  server.get('*', userAuth, (req, res) => handle(req, res))
} else {
  server.get('*', (req, res) => handle(req, res))
}

Promise.all([
  app.prepare(),
  dataLoader.load(),
])
.then(startServer)
