function generateEmailContent(firstName, lastName, brand, model, optionalEquipments, startingDate, endingDate, paymentAmount) {
    const optionals = optionalEquipments.map(el => `a ${el.name}`);
    let formatOptional = "";

    if (optionals.length > 1) {
        optionals.splice(optionals.length - 1, 1, ` and ${optionals[optionals.length - 1]}`);
    } else if (optionals.length === 1) {
        optionals[0] = `--${optionals[0]}`;
    }

    optionals.forEach((el, k) => {
        if (k !== optionals.length - 1) {
            formatOptional += `, ${el}`;
        } else {
            formatOptional += el;
        }
    });

    const emailContent = {
        body: {
            name: `${firstName} ${lastName}`,
            intro: [
                `We have successfully processed your payment of $${paymentAmount / 100} USD.`,
                `Today, you rented our ${brand} ${model}, from ${startingDate} to ${endingDate}.`,
                `${optionals.length ? `You added ${formatOptional.slice(2)}` : "You didn't add any optional equipment"} to your reservation.`
            ],
            signature: "Sincerely",
            greeting: "Greetings ",
            outro: 'We thank you for trusting in our services.'
        }
    };

    return emailContent;
}

module.exports = {
    generateEmailContent,
};
