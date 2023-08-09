const { userInfo, game, Compra } = require('../../DataBase/dataBase')

module.exports = async (req, res) => {
    const {idUser} = req.query;
    try {
        if (!idUser || idUser ==='') return res.status(400).send("No se encontró el parametro: idUser")
        const boughts = await Compra.findAll({where:{userInfoIdUser:idUser}})
        const obj = {boughts}        
        res.status(200).json(obj)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}