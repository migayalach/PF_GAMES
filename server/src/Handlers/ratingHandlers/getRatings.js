const {rating} = require('../../DataBase/dataBase');


module.exports = async (req, res) => {
    try {
        const ratings = await rating.findAll();
        res.status(200).json(ratings)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}