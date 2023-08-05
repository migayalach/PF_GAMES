const { platForms } = require("../DataBase/dataBase");
const { Op } = require("sequelize");
const axios = require("axios");

const createPlatformsBDD = async ({ namePlatforms }) => {
  const existsData = await platForms.findOne({ where: { namePlatforms } });
  if (!existsData) {
    return await platForms.create({ namePlatforms });
  }
  throw Error(`La plataforma: ${namePlatforms}, ya existe`);
};

const getAllPlatforms = async () => {
  const platformsBDD = await platForms.findAll();
  return platformsBDD;
};

// // TRAE EL NOMBRE
// const searchPlatforms = async (idPlatforms) => {
//   console.log(idPlatforms);
//   const [namePlatformsBDD] = await platForms.findAll({
//     where: {
//       idPlatforms,
//     },
//   });

//   console.log(namePlatformsBDD.namePlatforms);
//   if (namePlatformsBDD) {
//     return namePlatformsBDD.namePlatforms;
//   }

//   throw Error(
//     `No se pudo encontrar la plataforma: ${namePlatformsBDD.namePlatforms}`
//   );
// };
const searchPlatforms = async (idPlatforms) => {
  console.log(idPlatforms);
  const namePlatformsBDD = await platForms.findAll({
    where: {
      idPlatforms,
    },
  });

  if (namePlatformsBDD.length > 0) {
    return namePlatformsBDD;
  }

  throw Error(`No se pudo encontrar la plataforma buscada`);
};

const updatePlatforms = async (idPlatforms, namePlatforms) => {
  const [updatedRowsCount, updatedRows] = await platForms.update(
    { namePlatforms },
    { where: { idPlatforms }, returning: true }
  );

  if (updatedRowsCount > 0) {
    return updatedRows[0].namePlatforms;
  } else {
    throw new Error(`No se encontró ningún registro con el ID ${idPlatforms}.`);
  }
};

const deletePlatformsBDD = async (idPlatforms) => {
  const namePlatforms = await platForms.findOne({
    where: {
      idPlatforms,
    },
  });

  if (!namePlatforms) {
    throw Error`La plataforma no se encuentra registrada`;
  }

  await platForms.destroy({
    where: {
      idPlatforms,
    },
  });

  return `Se elimino correctamente la plataforma`;
};

module.exports = {
  createPlatformsBDD,
  getAllPlatforms,
  searchPlatforms,
  updatePlatforms,
  deletePlatformsBDD,
};

