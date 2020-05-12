const  sgMail = require ('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const msg = {
    to: 'eransevil2@gmail.com',
    from: 'eransevil2@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

const sendWelcomeEmail = (email, name) =>{
  sgMail.send({
    to:email,
    from:'eransevil2@gmail.com',
    subject:'Welcome to the task app',
    text:`welcome to the app, ${name}. let me know how you get along with the app`
  })
}

const sendCancelitonEmail = (email, name)=>{
  sgMail.send({
    to:email,
    from:'eransevil2@gmail.com',
    subject:'Cancel account',
    text:`Goodbye ${name}. your account has been canceld, have a great day`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelitonEmail

}