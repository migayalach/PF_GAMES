const { rating } = require('../../DataBase/dataBase');


const updateR = async (userInfoIdUser, gameIdGame, amountStars, comment) => {
    const [updatedRowsCount, updatedRows] = await rating.update({ amountStars, comment }, { where: { userInfoIdUser, gameIdGame }, returning: true });
    if (updatedRowsCount > 0) {
        return updatedRows[0].idUser;
    } else {
        throw new Error(`No se encontró ningún usuario con el ID ${idUser}.`);
    }
}


module.exports = async (req, res) => {
    try {
        const { userInfoIdUser, gameIdGame, amountStars, comment } = req.body;
        const updatedRating = await updateR(userInfoIdUser, gameIdGame, amountStars, comment);
        res.status(200).json(updatedRating);
        console.log("CREO QUE SE CAMBIÓ CON ÉXITO XD");
    } catch (error) {
        console.log("error", error.message);
        res.status(500).send(error.message)
    }
}