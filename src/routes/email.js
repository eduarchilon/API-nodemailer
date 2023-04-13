const express = require('express')
const { postSendEmail, getSendEmail } = require('../controllers/email')
const router = express.Router()

router.post(`/`, postSendEmail)
router.get(`/`, getSendEmail)

module.exports = router
