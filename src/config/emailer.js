const nodemailer = require('nodemailer')

const createTrans = (appemail, apppass) => {
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      // user: process.env.EMAIL_USER,
      // pass: process.env.EMAIL_PASS,
      user: appemail,
      pass: apppass,
    },
  })
  return transport
}

const sendEmail = async (data, appemail, apppass) => {
  const transporter = createTrans(appemail, apppass)
  // const transporter = createTrans() with .env
  const { name, email, subject, html } = data
  const info = await transporter.sendMail({
    from: `${name + ' - ' + email} ${email}`,
    to: appemail,
    subject: subject,
    html: html,
  })

  console.log('Message send: %s', info.messageId)
  return
}

module.exports = { sendEmail }