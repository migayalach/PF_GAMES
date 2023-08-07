const newObj = (recipe) => {
  let obj = {};
  for (let i in recipe) {
    obj = {
      idsGenders: recipe.genero,
      nameGame: recipe.nombre,
      image: recipe.imagen,
      cost: recipe.costo,
      description: recipe.descripcion,
    };
  }
  return obj;
};

module.exports = {
  newObj,
};
