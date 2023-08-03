const { level } = require("../DataBase/dataBase");
const { Op } = require("sequelize");
const axios = require("axios");

const createLevel = async ({ nameLevel }) => {
  const existsData = await level.findOne({ where: { nameLevel } });
  if (!existsData) {
    return await level.create({ nameLevel });
  }
  throw Error(`El nivel: ${nameLevel}, ya existe`);
};

const getAllLevel = async () => {
  const levelBDD = await level.findAll();
  return levelBDD;
};

const searchLevel = async (idLevel) => {
  const nameLevel = await level.findAll({
    where: {
      idLevel,
    },
  });

  if (nameLevel.length > 0) {
    return nameLevel;
  }

  throw Error(`No se pudo encontrar el nivel buscado`);
};

const searchLevelName = async (nameLevel) => {
  const nameLevelBDD = await level.findAll({
    where: {
      nameLevel,
    },
  });

  if (nameLevelBDD.length > 0) {
    return nameLevelBDD;
  }

  throw Error(`No se pudo encontrar el nivel buscado`);
};

const updateLevel = async (idLevel, nameLevel) => {
  const [updatedRowsCount, updatedRows] = await level.update(
    { nameLevel },
    { where: { idLevel }, returning: true }
  );

  if (updatedRowsCount > 0) {
    return updatedRows[0].nameLevel;
  } else {
    throw new Error(`No se encontró ningún nivel con el ID ${idLevel}.`);
  }
};

const delLevel = async (idLevel) => {
  const nameLevel = await level.findOne({
    where: {
      idLevel,
    },
  });

  if (!nameLevel) {
    throw Error`El nivel no se encuentra registrado`;
  }

  await level.destroy({
    where: {
      idLevel,
    },
  });

  return `Se elimino correctamente el nivel`;
};

module.exports = {
  createLevel,
  getAllLevel,
  searchLevel,
  searchLevelName,
  updateLevel,
  delLevel,
};
