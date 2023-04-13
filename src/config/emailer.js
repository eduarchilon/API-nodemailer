const nodemailer = require('nodemailer')

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
  return transport
}

const sendEmail = async (data) => {
  const transporter = createTrans()
  const { name, email, subject, html } = data
  const info = await transporter.sendMail({
    from: `${name} ${email}`,
    to: process.env.EMAIL_USER,
    subject: subject,
    html: html,
  })

  console.log('Message send: %s', info.messageId)
  return;
}

module.exports = { sendEmail }
