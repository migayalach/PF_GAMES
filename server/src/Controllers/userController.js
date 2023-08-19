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
  const existsData = await userInfo.findOne({ where: { email }, include: [level] });
  if (!existsData) {
    const cantRegister = await userInfo.count();
    if (cantRegister === 0) {
      await userInfo.create({ idLevel: 1, nameUser, email });
      sendWelcomeEmail(email, nameUser);
      const newAdmin = await userInfo.findOne({
        where: { nameUser },
        include: [level]
      });
      return newAdmin;
    }
    await userInfo.create({ idLevel: 2, nameUser, email });
    sendWelcomeEmail(email, nameUser);
    const newUser = await userInfo.findOne({
        where: { nameUser },
        include: [level]
    });
    return newUser;
  }
  return existsData;
};

const getAllUser = async () => {
  const userBDD = await userInfo.findAll({
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
    include: [level],
  });

  if (nameUserBDD.length > 0) {
    return nameUserBDD;
  }

  return "error";
};

const updateUser = async (
  idUser,
  updatedProps
) => {
  const dbUser = await userInfo.findByPk(idUser);
  await dbUser.update(updatedProps);
  const updatedUser = await userInfo.findByPk(idUser, {
    include: [level]
  });
  return updatedUser;
};

const isAdmin = async (idUser) => {
  const dbUser = await userInfo.findByPk(idUser, { include: [level] });
  const dbLevel = await level.findOne({ where: { name: "admin" } });
  await dbUser.setLevel(dbLevel);
  const allUsers = await userInfo.findAll({
    include: [level]
  });
  return allUsers;
}

const delUser = async (idUser) => {
  const dbUser = await userInfo.findByPk(idUser);
  const isBan = !dbUser.ban;
  await dbUser.update({ ban: isBan });
  const allUsers = await userInfo.findAll({
    include: [level]
  });
  return allUsers;
};

module.exports = {
  createUser,
  getAllUser,
  searchUser,
  searchUserName,
  updateUser,
  searchUserEmail,
  isAdmin,
  delUser,
};