const { userInfo, level } = require("../DataBase/dataBase");
const { Op } = require("sequelize");
const axios = require("axios");
const { sendWelcomeEmail } = require("../Utils/emailBienvenida/emailDeBienvenida");

//ANTES DE AUTH0
// const createUser = async ({ idLevel, nameUser, email, password, image }) => {
// const existsData = await userInfo.findOne({ where: { email } });
// if (!existsData) {
//   return await userInfo.create({ idLevel, nameUser, email, password, image });
// }
// throw Error(`El email: ${email}, ya existe`);
// };

//CON AUTH0
const createUser = async (nameUser, email) => {
  const existsData = await userInfo.findOne({ where: { email } });
  if (!existsData) {
    const cantRegister = await userInfo.count();
    if (cantRegister === 0) {
      await userInfo.create({ idLevel: 1, nameUser, email });
      sendWelcomeEmail(email, nameUser);
      return { level: "admin" };
    }
    await userInfo.create({ idLevel: 2, nameUser, email });
    sendWelcomeEmail(email, nameUser);
    return { level: "standar" };
  }
  throw Error(`El email: ${email}, ya existe`);
};

const getAllUser = async () => {
  const userBDD = await userInfo.findAll({
    where: { ban: false },
    include: [level]
  });
  //const userBDD = await userInfo.findAll();
  return userBDD;
};

const searchUser = async (idUser) => {
  const nameUser = await userInfo.findByPk(idUser, {
    include: [level]
  })
  return nameUser;
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

const clearArray = (arr) => arr.map(({ level }) => level.nameLevel);

const searchUserEmail = async (email) => {
  const nameUserBDD = await userInfo.findAll({
    where: {
      email,
    },
    include: {
      model: level,
      attributes: ["nameLevel"],
    },
  });

  if (nameUserBDD.length > 0) {
    return clearArray(nameUserBDD)[0];
  }

  return "error";
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
  searchUserEmail,
};