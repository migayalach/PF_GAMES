const { userInfo, game, Compra } = require('../../DataBase/dataBase')

module.exports = async (req, res) => {
    try {
        const {
            idUser,
            idGame, amount
        } = req.body;
        const user = await userInfo.findByPk(idUser)
        const videoGame = await game.findByPk(idGame)
        if (!user) return res.status(400).json({ error: "Usuario no encontrado" })
        if (!videoGame) return res.status(400).json({ error: "Videojuego no encontrado" })
        await Compra.create({
            userInfoIdUser: idUser,
            gameIdGame: idGame,
            amount
        });
        return res.send('Compra guardada')
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
}