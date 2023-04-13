const { sendEmail } = require('../config/emailer')

const postSendEmail = async (req, res) => {
  try {
    await sendEmail(req.body)
    res.send({ message: 'EMAIL_SENDED', request: req.body })
  } catch (e) {
    console.log(e)
  }
}

const getSendEmail = async (req, res) => {
  try {
    const html = `<strong>Only send email (POST) in this API</strong>`
    res.send(html)
  } catch (e) {
    console.log(e)
  }
}

module.exports = { postSendEmail, getSendEmail }
