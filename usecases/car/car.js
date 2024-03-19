const carRepo = require('../../repository/car');

const getCars = (driverType, selectDate, selectTime, totalPassanger) => {
  return carRepo.getCars(driverType, selectDate, selectTime, totalPassanger);
};

const getCarById = (id) => {
  return carRepo.getCarById(id);
};

const postCar = (payload) => {
  return carRepo.postCar(payload);
};

const putCarById = (id, payload) => {
  return carRepo.putCarById(id, payload);
};

const deleteCarById = (id) => {
  return carRepo.deleteCarById(id);
};

module.exports = {
  getCars,
  getCarById,
  postCar,
  putCarById,
  deleteCarById,
};
