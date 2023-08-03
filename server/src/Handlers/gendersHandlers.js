const SUCCESS = 200;
const ERROR = 400;
const {
  createGenders,
  getAllGenders,
  searchGenders,
  searchGenderName,
  updateGenders,
  deleteGenders,
} = require("../Controllers/gendersController");

const postGenders = async (request, response) => {
  const { nameGenders } = request.body;
  try {
    const newGenders = await createGenders({ nameGenders });
    response.status(SUCCESS).json(newGenders);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getGenders = async (request, response) => {
  const { nameGenders } = request.query;
  try {
    const result = nameGenders
      ? await searchGenderName(nameGenders)
      : await getAllGenders();
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getGendersId = async (request, response) => {
  const { idGenders } = request.params;
  try {
    const result = await searchGenders(idGenders);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putGenders = async (request, response) => {
  const { idGenders, nameGenders } = request.body;
  try {
    const result = await updateGenders(idGenders, nameGenders);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteGender = async (request, response) => {
  const { idGenders } = request.params;
  try {
    const result = await deleteGenders(idGenders);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postGenders,
  getGenders,
  getGendersId,
  putGenders,
  deleteGender,
};
