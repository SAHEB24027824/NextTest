
const express = require('express')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'
const _app = next({ dev })
const handle = _app.getRequestHandler()
const router = require('./router');



_app.prepare().then(() => {
  const server = express()

  server.use(router)
  server.get('/', (req, res) => {
    _app.render(req, res,'/')
  })
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})




