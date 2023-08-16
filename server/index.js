const app = require("./src/app");
const { sequelize } = require("./src/DataBase/dataBase");
require('dotenv').config();

app.listen(process.env.PORT, () => {
  sequelize.sync({ alter: true });
  console.log(`Servidor levantado en el puerto: ${process.env.PORT}`);
});
