const validation = (data) => {
  const errors = {};

  // NOMBRE
  const maxLength = 25;
  const minLength = 10;
  if (data.nombre.length === 0 || data.nombre.length < minLength) {
    if (data.nombre.length === 0) {
      errors.nombre = "Por favor introduce un nombre, no puede estar vacio";
    } else {
      errors.nombre = "Por favor introduce un nombre mas descriptivo";
    }
  } else if (!/^[A-Za-záéíóúñÁÉÍÓÚÑ\s0-9-]{1,50}$/.test(data.nombre)) {
    errors.nombre = "No se permiten el uso de caracteres especiales";
  }

  if (data.nombre.length > maxLength) {
    errors.nombre = `El nombre no puede tener mas de ${maxLength} letras`;
  }

  //DESCRIPCION
  const maxLengthRes = 500;
  const minLengthRes = 150;
  if (data.descripcion.length === 0 || data.descripcion.length < minLengthRes) {
    if (data.descripcion.length === 0) {
      errors.descripcion =
        "Por favor introduce una descripcion, no puede estar vacio";
    } else {
      errors.descripcion = "Por favor introduce un descripcion mas descriptiva";
    }
  }
  if (data.descripcion.length > maxLengthRes) {
    errors.descripcion = `La descripcion no puede tener mas de ${maxLengthRes} letras`;
  }

  // LINK
  // if (data.imagen.length === 0) {
  //   errors.imagen = `Por favor ingrese una direccion URL para poder guardar la referencia`;
  // } else if (!/^(https?:\/\/)?[\w\-]+(\.[\w\-]+)/.test(data.imagen)) {
  //   errors.imagen = `El enlace no cumple los requirimientos solicitados, por favor verifique lo introducido`;
  // }

  if (!/^(?!0*(\.0+)?$)(?!-)[0-9]+(\.[0-9]{1,2})?$/.test(data.costo)) {
    errors.costo = "El precio debe ser mayor a 0";
  }
  if (!/^\d+(\.\d{1,2})?$/.test(data.costo)) {
    errors.costo = "Por favor introduzca el precio";
  }

  return errors;
};

export default validation;
