const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  const html = `<span>Only use <strong>/email</strong> route this API</span>`
  res.send(html)
})

const routes = [
  {
    path: 'email',
  },
]

routes.forEach((route) => {
  return router.use(`/${route.path}`, require(`./${route.path}`))
})

module.exports = router
