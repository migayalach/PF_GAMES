const nodemailer = require('nodemailer');
require('dotenv').config();

const { MIDDLE_EMAIL, MIDDLE_EMAIL_PASS } = process.env;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: MIDDLE_EMAIL,
        pass: MIDDLE_EMAIL_PASS,
    },
});

function sendEmail(mailOptions) {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
}

module.exports = {
    sendEmail,
};
