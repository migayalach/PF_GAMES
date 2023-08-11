const SUCCESS = 200;
const ERROR = 400;
const {
  createUser,
  getAllUser,
  searchUser,
  searchUserName,
  updateUser,
  delUser,
  searchUserEmail,
} = require("../Controllers/userController");

//ANTES DE AUTH 0
// const postUser = async (request, response) => {
//   const { idLevel, nameUser, email, password, image } = request.body;
//   try {
//     const newUser = await createUser({
//       nameUser,
//       idLevel,
//       email,
//       password,
//       image,
//     });
//     response.status(SUCCESS).json(newUser);
//   } catch (error) {
//     response.status(ERROR).json({ error: error.message });
//   }
// };

// POST AUTH0

const postUser = async (request, response) => {
  const { nameUser, email } = request.body;
  try {
    const newUser = await createUser(nameUser, email);
    response.status(SUCCESS).json(newUser);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getUser = async (request, response) => {
  const { nameUser, email } = request.query;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  try {
    if (regex.test(email)) {
      const result = await searchUserEmail(email);
      result === "error"
        ? (result = await createUser(nameUser, email)) &&
          response.status(SUCCESS).json({ access: result })
        : response.status(SUCCESS).json({ access: result });
    } else {
      const result = nameUser
        ? await searchUserName(nameUser)
        : await getAllUser();
      response.status(SUCCESS).json(result);
    }
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getUserId = async (request, response) => {
  const { idUser } = request.params;
  try {
    const result = await searchUser(idUser);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putUser = async (request, response) => {
  const { idUser, idLevel, nameUser, email, password, image } = request.body;
  try {
    const result = await updateUser(
      idUser,
      idLevel,
      nameUser,
      email,
      password,
      image
    );
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteUser = async (request, response) => {
  const { idUser } = request.params;
  try {
    const result = await delUser(idUser);
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  postUser,
  getUser,
  getUserId,
  putUser,
  deleteUser,
};