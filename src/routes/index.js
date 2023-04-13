const express = require('express')
const router = express.Router()

const routes = [
  {
    path: 'email',
  },
]

routes.forEach((route) => {
  return router.use(`/${route.path}`, require(`./${route.path}`))
})

router.get('/', async (req, res) => {
  const html = `<span>Only use <strong>/email</strong> route this API</span>`
  res.send(html)
})

module.exports = router
