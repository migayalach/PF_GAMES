const SUCCESS = 200;
const ERROR = 400;
const {
  createPlatformsBDD,
  getAllPlatforms,
  searchPlatforms,
  updatePlatforms,
  deletePlatformsBDD,
} = require("../Controllers/platformsController");

const postPlatforms = async (request, response) => {
  const { namePlatforms } = request.body;
  try {
    const newPlatforms = await createPlatformsBDD({ namePlatforms });
    response.status(SUCCESS).json(newPlatforms);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getPlatforms = async (request, response) => {
  const { namePlatforms } = request.query;
  try {
    const result = namePlatforms
      ? await searchPlatforms(namePlatforms)
      : await getAllPlatforms();
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getPlatformsId = async (request, response) => {
  const { idPlatforms } = request.params;
  try {
    const result = await searchPlatforms(idPlatforms);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putPlatforms = async (request, response) => {
  const { idPlatforms, namePlatforms } = request.body;
  try {
    const result = await updatePlatforms(idPlatforms, namePlatforms);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deletePlatforms = async (request, response) => {
  const { idPlatforms } = request.params;
  try {
    const result = await deletePlatformsBDD(idPlatforms);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  getPlatforms,
  getPlatformsId,
  postPlatforms,
  putPlatforms,
  deletePlatforms,
};

