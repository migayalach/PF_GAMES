const {rating, userInfo, game} = require('../../DataBase/dataBase');

module.exports = async (req, res ) => {
    try {
        const {idUser, idGame, amountStars, comment } = req.body;
        if(!idUser || !idGame) return res.status(404).send("No se detectó el ID")
        const user = await userInfo.findByPk(idUser);
        const videoGame = await game.findByPk(idGame);
        if (!user) return res.status(400).json({ error: "Usuario no encontrado" })
        if (!videoGame) return res.status(400).json({ error: "Videojuego no encontrado" })
        const objRating = await rating.create({
            userInfoIdUser: idUser,
            gameIdGame: idGame,
            amountStars,
            comment
        })
        res.status(200).json(objRating);
    } catch (error) {
        console.log("error", error.message);
        //res.status(500).send(error.message)
        res.status(500).send(error.message)
    }
}
