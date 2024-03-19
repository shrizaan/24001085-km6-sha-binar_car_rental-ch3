const NotFoundError = require('../../exceptions/NotFoundError');
const Car = require('./Car');

const getCars = (driverType, selectDate, selectTime, totalPassanger) => {
  return Car.records.filter((car) => {
    if (!car.available) {
      return false;
    }

    if (car.capacity < totalPassanger) {
      return false;
    }

    if (selectDate && new Date(car.availableAt) > new Date(selectDate)) {
      return false;
    }

    return true;
  });
};

const getCarById = (id) => {
  const car = Car.records.find((car) => car.id === id);

  if (!car) {
    throw new NotFoundError('Car not found.');
  }

  return car;
};

const postCar = (payload) => {
  const car = new Car(payload);

  Car.records.push(car);

  return Car.records;
};

const putCarById = (id, payload) => {
  const idx = Car.records.findIndex((i) => i.id === id);

  if (idx === -1) {
    throw new NotFoundError('Car not found.');
  }

  Car.records[idx] = {
    id: id,
    ...payload,
  };

  return Car.records[idx];
};

const deleteCarById = (id) => {
  const idx = Car.records.findIndex((i) => i.id === id);

  if (idx === -1) {
    throw new NotFoundError('Car not found.');
  }

  const result = Car.records.splice(idx, 1);

  return result[0];
};

module.exports = {
  getCars,
  getCarById,
  postCar,
  putCarById,
  deleteCarById,
};
