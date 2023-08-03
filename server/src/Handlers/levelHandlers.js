const SUCCESS = 200;
const ERROR = 400;
const {
  createLevel,
  getAllLevel,
  searchLevel,
  searchLevelName,
  updateLevel,
  delLevel,
} = require("../Controllers/levelController");

const postLevel = async (request, response) => {
  const { nameLevel } = request.body;
  try {
    const newLevel = await createLevel({ nameLevel });
    response.status(SUCCESS).json(newLevel);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getLevel = async (request, response) => {
  const { nameLevel } = request.query;
  try {
    const result = nameLevel
      ? await searchLevelName(nameLevel)
      : await getAllLevel();
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getLevelId = async (request, response) => {
  const { idLevel } = request.params;
  try {
    const result = await searchLevel(idLevel);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putLevel = async (request, response) => {
  const { idLevel, nameLevel } = request.body;
  try {
    const result = await updateLevel(idLevel, nameLevel);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteLevel = async (request, response) => {
  const { idLevel } = request.params;
  try {
    const result = await delLevel(idLevel);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postLevel,
  getLevel,
  getLevelId,
  putLevel,
  deleteLevel,
};

