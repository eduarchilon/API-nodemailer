const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`The APP is ready in http://localhost:${port}`)
})

app.use(require('./src/routes'))
