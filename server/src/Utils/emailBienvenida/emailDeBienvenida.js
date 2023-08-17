const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'shopgaming231@gmail.com',
    pass: 'gefdanlwnuhhetng'
  }
});

const sendWelcomeEmail = async (email, nameUser) => {
  const mailOptions = {
    from: 'hernanvazquez722@gmail.com',
    to: email, 
    subject: '¡Welcome to GAMING-SHOP!',
    html: `
      <div id="container" style="width: 100%; font-family: sans-serif; font-weight: normal; background-color: #f0f0f0;">
        <div style="width: 100%; max-width: 700px; margin: auto;">
          <div style="background-color: #2b5363; text-align: center; padding: 0.7rem 0;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasNwHPRcEkUf5LzGdoo1hdFc-lrFjNkAuMA&usqp=CAU" alt="Gaming Shop Logo" style="max-width: 100px;">
            <h1 style="color:  #e4cd03; font-family: sans-serif; font-weight: normal;">¡Welcome to GAMING-SHOP!</h1>
          </div>
          <div style="text-align: center; padding: 0 0.72rem; padding-top: 0.5rem; background-color: #2b5363;">
            <style="color: #2b5363; margin-bottom: 1.4rem; font-size: 1rem; ">&iexcl;
            <h3 style="color: white;">Hello ${nameUser}! </h3>
            <h3 style="color: white;">Thanks so much for joining GAMING SHOP — we're thrilled to have you! </h3>
            <p style="color: white;">Visit our shop:</p>
            <a href="https://pf-games.vercel.app/videogames" style="display: inline-block; padding: 10px 20px; background-color: #e4cd03; color: black; text-decoration: none; border-radius: 15px; ">SHOP</a>
            <hr style="background-color: #e4cd03; height: 2px;"">
            <hr style="background-color: #e4cd03; height: 2px; padding-bottom: 1rem; ">
          </div>
        </div>
      </div>
    `,
  };
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
};

module.exports = { sendWelcomeEmail };
