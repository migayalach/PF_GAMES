const { Router } = require("express");
const nodemailer = require("nodemailer");
const { MIDDLE_EMAIL, MIDDLE_EMAIL_PASSWORD } = process.env;


const router = Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MIDDLE_EMAIL,
    pass: MIDDLE_EMAIL_PASSWORD,
  },
});

router.post("/:emailType", async (req, res) => {
  const emailType = req.params.emailType;
  let mailOptions;

  try {
    if (emailType === "welcome") {
      mailOptions = {
        from: MIDDLE_EMAIL,
        to: req.body.email,
        subject: "Welcome to Gaming Shop!",
        html:
          `<div id="container" style="width: 100%; font-family: sans-serif; font-weight: normal;">
      <div style="width: 100%; max-width: 700px; margin: auto;">
          <div style="background-color: #0E6655; text-align: center; padding: 0.7rem 0;">
              <h1 style="color: white; font-family: sans-serif; font-weight: normal;">Gaming Shop</h1>
           </div>
  
<div style="text-align: center; padding: 0 0.72rem; padding-top: 2.5rem; background-color:white">
< style="color: #4f5154; margin-bottom: 1.4rem; font-size: 1rem;">&iexcl;
                          Bienvenid@` +
          req.body.nameUser` ` +
          `!
<hr>
<p style="color: #4f5154; margin-bottom: 1.4rem; font-size: 1rem;">Gracias por registrarte en Gaming Shop, tu tienda de videojuegos digital</p>`,
      };
    } else if (emailType === "orderCreated") {
      const { nameUser, Compra } = req.body;
      mailOptions = {
        from: MIDDLE_EMAIL,
        to: req.body.email,
        subject: "Order created",
        html: `<div id="container" style="width: 100%; font-family: sans-serif; font-weight: normal;">
      <div style="width: 100%; max-width: 700px; margin: auto;">
      <div style="background-color: #0E6655; text-align: center; padding: 0.7rem 0;">
      <h1 style="color: white; font-family: sans-serif; font-weight: normal;">Gaming Shop</h1>
      </div>
      <div style="text-align: center; padding: 0 0.72rem; padding-top: 2.5rem; background-color:white">
      <p style="color: #4f5154; margin-bottom: 1.4rem; font-size: 1rem;">&iexcl;
      Hola ${nameUser} !
      <h3>Tu orden fue verificada con éxito </h3>
      Order N° ${Compra.numFac}
      <hr>
             
      <h3>Precio total: ${Compra.amount}</h3>
      <hr>
      <p> Si deseas ver los detalles de tu orden, por favor ingresa a nuestra página!! </p>
      <p>
      Gracias por confiar en nosotr@s</p>
      `,
      };
    } else {
      throw new Error("Email type not recognized");
    }
    // Envío del correo electrónico y manejo de errores
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

module.exports = router;
