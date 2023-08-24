const validateAdmin = (data) => {
  const errors = {};

  // NOMBRE
  const maxLength = 25;
  const minLength = 10;
  if (data.nameGame.length === 0 || data.nameGame.length < minLength) {
    if (data.nameGame.length === 0) {
      errors.nameGame = "Por favor introduce un nombre, no puede estar vacio";
    } else {
      errors.nameGame = "Por favor introduce un nombre mas descriptivo";
    }
  } else if (!/^[A-Za-záéíóúñÁÉÍÓÚÑ\s0-9-]{1,50}$/.test(data.nameGame)) {
    errors.nameGame = "No se permiten el uso de caracteres especiales";
  }

  if (data.nameGame.length > maxLength) {
    errors.nameGame = `El nombre no puede tener mas de ${maxLength} letras`;
  }

  //DESCRIPCION
  const maxLengthRes = 500;
  const minLengthRes = 150;
  if (data.description.length === 0 || data.description.length < minLengthRes) {
    if (data.description.length === 0) {
      errors.description =
        "Por favor introduce una descripcion, no puede estar vacio";
    } else {
      errors.description = "Por favor introduce un descripcion mas descriptiva";
    }
  }
  if (data.description.length > maxLengthRes) {
    errors.description = `La descripcion no puede tener mas de ${maxLengthRes} letras`;
  }

  // IMAGE
  if (!data.imagen) {
    errors.imagen = `Se necesita una imagen`;
  }

  if (!/^(?!0*(\.0+)?$)(?!-)[0-9]+(\.[0-9]{1,2})?$/.test(data.cost)) {
    errors.cost = "El precio debe ser mayor a 0";
  }
  if (!/^\d+(\.\d{1,2})?$/.test(data.cost)) {
    errors.cost = "Por favor introduzca el precio";
  }

  return errors;
};

export default validateAdmin;