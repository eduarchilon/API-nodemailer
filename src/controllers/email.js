const { sendEmail } = require('../config/emailer')

const postSendEmail = async (req, res) => {
  const appemail = req.query.email // "mail@gmail.com"
  const apppass = req.query.apppass // "adshsaffsfbjs88advad"
  try {
    await sendEmail(req.body, appemail, apppass)
    // await sendEmail(req.body) with .env and without appemail, apppass
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
