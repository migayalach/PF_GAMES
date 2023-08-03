const SUCCESS = 200;
const ERROR = 400;
const {
  createSale,
  getAllSale,
  searchSale,
  searchSaleName,
  updateSale,
  delSale,
} = require("../Controllers/saleController");

const postSale = async (request, response) => {
  const { idUser, numVoucher } = request.body;
  try {
    const newSale = await createSale({
      idUser,
      numVoucher,
    });
    response.status(SUCCESS).json(newSale);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getSale = async (request, response) => {
    const { numVoucher } = request.query;
    try {
      const result = numVoucher
        ? await searchSaleName(numVoucher)
        : await getAllSale();
      response.status(SUCCESS).json(result);
    } catch (error) {
      response.status(ERROR).json({ error: error.message });
    }
};

const getSaleId = async (request, response) => {
  const { idSale } = request.params;
  try {
    const result = await searchSale(idSale);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putSale = async (request, response) => {
  const { idSale, idUser, numVoucher } = request.body;
  try {
    const result = await updateSale(idSale, idUser, numVoucher);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteSale = async (request, response) => {
  const { idSale } = request.params;
  try {
    const result = await delSale(idSale);
    response.status(SUCCESS).send(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postSale,
  getSale,
  getSaleId,
  putSale,
  deleteSale,
};
