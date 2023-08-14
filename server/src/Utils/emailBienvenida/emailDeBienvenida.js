const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: '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', 
    },
  })
);

const sendWelcomeEmail = (recipientEmail) => {
  transporter.sendMail({
    to: recipientEmail,
    from: 'hernanvazquez772@gmail.com',
    subject: '¡Bienvenido a GAMING SHOP!',
    html: '<p>Gracias por registrarte en nuestra aplicación. ¡Bienvenido!</p>',
  });
};

module.exports = { sendWelcomeEmail };
