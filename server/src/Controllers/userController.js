const { userInfo } = require("../DataBase/dataBase");
const { Op } = require("sequelize");
const axios = require("axios");

const createUser = async ({ idLevel, nameUser, email, password, image }) => {
  console.log(idLevel, nameUser, email, password, image);
  const existsData = await userInfo.findOne({ where: { email } });
  if (!existsData) {
    return await userInfo.create({ idLevel, nameUser, email, password, image });
  }
  throw Error(`El email: ${email}, ya existe`);
};

const getAllUser = async () => {
  const userBDD = await userInfo.findAll();
  return userBDD;
};

const searchUser = async (idUser) => {
  const nameUser = await userInfo.findAll({
    where: {
      idUser,
    },
  });

  if (nameUser.length > 0) {
    return nameUser;
  }

  throw Error(`No se pudo encontrar el usuario buscado`);
};

const searchUserName = async (nameUser) => {
  const nameUserBDD = await userInfo.findAll({
    where: {
      nameUser: {
        [Op.iLike]: `%${nameUser}%`,
      },
    },
  });

  if (nameUserBDD.length > 0) {
    return nameUserBDD;
  }

  throw Error(`No se pudo encontrar el usuario buscado`);
};

const updateUser = async (
  idUser,
  idLevel,
  nameUser,
  email,
  password,
  image
) => {
  console.log(idUser, idLevel, nameUser, email, password, image);
  const [updatedRowsCount, updatedRows] = await userInfo.update(
    { idLevel, nameUser, email, password, image },
    { where: { idUser }, returning: true }
  );

  // devolver un obj nuevo;
  if (updatedRowsCount > 0) {
    return updatedRows[0].nameUser;
  } else {
    throw new Error(`No se encontró ningún usuario con el ID ${idUser}.`);
  }
};

const delUser = async (idUser) => {
  const nameUser = await userInfo.findOne({
    where: {
      idUser,
    },
  });

  if (!nameUser) {
    throw Error`El usuario no se encuentra registrado`;
  }

  await userInfo.destroy({
    where: {
      idUser,
    },
  });

  return `Se elimino correctamente el usuario`;
};

module.exports = {
  createUser,
  getAllUser,
  searchUser,
  searchUserName,
  updateUser,
  delUser,
};
