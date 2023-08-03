const { sale } = require("../DataBase/dataBase");
const { Op } = require("sequelize");
const axios = require("axios");

const createSale = async ({ idUser, numVoucher }) => {
  const date = new Date();
  const newSale = await sale.findOne({ where: { numVoucher } });
  if (!newSale) {
    return await sale.create({ idUser, numVoucher, dataSale: date });
  }
  throw Error(`El numero de Voucher: ${numVoucher}, ya existe`);
};

const getAllSale = async () => {
  const saleBDD = await sale.findAll();
  return saleBDD;
};

const searchSale = async (idSale) => {
  const responseSale = await sale.findAll({
    where: {
      idSale,
    },
  });
  if (responseSale.length > 0) {
    return responseSale;
  }
  throw Error(`No se pudo encontrar el id: ${idSale}`);
};

const searchSaleName = async (numVoucher) => {
  const saleBDD = await sale.findAll({
    where: {
      numVoucher: {
        [Op.iLike]: `%${numVoucher}%`,
      },
    },
  });
  if (saleBDD.length > 0) {
    return saleBDD;
  }
  throw Error(`No se pudo encontrar el numero de voucher`);
};

const updateSale = async (idSale, idUser, numVoucher) => {
  const [updatedRowsCount, updatedRows] = await sale.update(
    { idUser, numVoucher },
    { where: { idSale }, returning: true }
  );

  if (updatedRowsCount > 0) {
    return "Se modificaron los datos con exito";
  } else {
    throw new Error(
      `No se encontró ningúna venta registrada con el ID ${idSale}.`
    );
  }
};

const delSale = async (idSale) => {
  const responseSale = await sale.findOne({
    where: {
      idSale,
    },
  });
  if (!responseSale) {
    throw Error`La venta no se encuentra registrada`;
  }
  await sale.destroy({
    where: {
      idSale,
    },
  });
  return `La venta se elimino correctamente`;
};

module.exports = {
  createSale,
  getAllSale,
  searchSale,
  searchSaleName,
  updateSale,
  delSale,
};

