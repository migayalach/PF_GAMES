const { genders } = require("../DataBase/dataBase");
const { Op } = require("sequelize");
const axios = require("axios");

const createGenders = async ({ nameGenders }) => {
  const existsData = await genders.findOne({ where: { nameGenders } });
  if (!existsData) {
    return await genders.create({ nameGenders });
  }
  throw Error(`El genero: ${nameGenders}, ya existe`);
};

const getAllGenders = async () => {
  const gendersBDD = await genders.findAll();
  return gendersBDD;
};

const searchGenders = async (idGenders) => {
  const nameGenders = await genders.findAll({
    where: {
      idGenders,
    },
  });

  if (nameGenders.length > 0) {
    return nameGenders;
  }

  throw Error(`No se pudo encontrar el genero buscado`);
};

const searchGenderName = async (nameGenders) => {
    const nameGender = await genders.findAll({
      where: {
        nameGenders,
      },
    });
  
    if (nameGender.length > 0) {
      return nameGender;
    }
  
    throw Error(`No se pudo encontrar el genero buscado`);
  };

const updateGenders = async (idGenders, nameGenders) => {
  const [updatedRowsCount, updatedRows] = await genders.update(
    { nameGenders },
    { where: { idGenders }, returning: true }
  );

  if (updatedRowsCount > 0) {
    return updatedRows[0].nameGenders;
  } else {
    throw new Error(`No se encontró ningún registro con el ID ${idGenders}.`);
  }
};

const deleteGenders = async (idGenders) => {
  const nameGenders = await genders.findOne({
    where: {
      idGenders,
    },
  });

  if (!nameGenders) {
    throw Error`El genero no se encuentra registrado`;
  }

  await genders.destroy({
    where: {
      idGenders,
    },
  });

  return `Se elimino correctamente el genero`;
};

module.exports = {
  createGenders,
  getAllGenders,
  searchGenders,
  searchGenderName,
  updateGenders,
  deleteGenders,
};

