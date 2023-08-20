const { Compra } = require('../../DataBase/dataBase')

module.exports = async (req, res) => {
    try {
        const boughts = await Compra.findAll()      
        res.status(200).json(boughts)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}