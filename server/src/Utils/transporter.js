const nodemailer = require("nodemailer");
const { MIDDLE_EMAIL, MIDDLE_EMAIL_PASS } = process.env;


// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: MIDDLE_EMAIL,
    pass: MIDDLE_EMAIL_PASS,
  },
});

transporter.verify().then( () => {
  console.log('Listo para Enviar correos.');
})

module.exports = { transporter };