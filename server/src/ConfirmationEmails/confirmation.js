const { sendEmail } = require('./utils/email');
const { confirmationEmail } = require('./utils/confirmationEmail');

async function sendConfirmationEmail(user, purchaseDetails) {
    try {
        const { firstName, lastName, email } = user;
        const { brand, model, optionalEquipments, startingDate, endingDate, paymentAmount } = purchaseDetails;

        const emailContent = confirmationEmail(firstName, lastName, brand, model, optionalEquipments, startingDate, endingDate, paymentAmount);

        const mailOptions = {
            from: process.env.MIDDLE_EMAIL,
            to: email,
            subject: 'Purchase Confirmation',
            text: getEmailText(emailContent),
        };

        const emailInfo = await sendEmail(mailOptions);

        console.log('Email sent:', emailInfo.response);
    } catch (error) {
        console.error('Error sending confirmation email:', error);
    }
}

// Función para convertir el contenido del correo electrónico en un formato de texto legible.
function getEmailText(emailContent) {
    return `
        ${emailContent.body.greeting}${emailContent.body.name},
        
        ${emailContent.body.intro.join('\n\n')}
        
        ${emailContent.body.outro}

        ${emailContent.body.signature},
        ${emailContent.body.greeting}Rentals Inc.
    `;
}

// Ejemplo de uso
const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
};

const purchaseDetails = {
    brand: 'Example Brand',
    model: 'Example Model',
    optionalEquipments: [{ name: 'GPS' }, { name: 'Child Seat' }],
    startingDate: '2023-08-15',
    endingDate: '2023-08-20',
    paymentAmount: 5000, // En centavos
};

sendConfirmationEmail(user, purchaseDetails);
