const app = require("./src/app");
const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto: ${PORT}`);
});
