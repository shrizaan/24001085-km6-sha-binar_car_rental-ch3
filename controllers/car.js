const InvariantError = require('../exceptions/InvariantError');
const Car = require('../repository/car/Car');
const carUseCase = require('../usecases/car/car');

const getCarsHandler = (req, res) => {
  const { driverType, selectDate, selectTime, totalPassanger } = req.query;

  const result = carUseCase.getCars(
    driverType,
    selectDate,
    selectTime,
    totalPassanger
  );

  res.status(200).send({
    status: 'success',
    data: result,
  });
};

const getCarByIdHandler = (req, res, next) => {
  const { id } = req.params;

  const result = carUseCase.getCarById(id);

  res.status(200).json({
    status: 'success',
    data: result,
  });
};

const postCarHandler = (req, res) => {
  /* Melakukan filter pada array requiredFields yang merupakan array dari properti properti yang ada pada Car, 
  method filter memiliki kondisi jika ketika mengakses request body dengan key yang ada pada elemen requiredProperties adalah
  undefined alias request body tidak memiliki properti yang diperlukan maka akan di negasi dengan operator ! sehingga menjadi truthy. 
  Hasilnya elemen key akan menjadi elemen pada array missingFields */
  const missingFields = Car.requiredProperties.filter(
    (key) => req.body[key] === undefined
  );

  /* Melakukan filter pada array requiredProperties untuk memeriksa apakah 
  tipe data dari req.body[key] tidak sama dengan propertiesTypes[key]. Jika tipe data tidak sama, 
  maka elemen tersebut akan disimpan dalam array baru yang dihasilkan oleh filter(). */
  const invalidFields = Car.requiredProperties.filter(
    (key) => typeof req.body[key] !== Car.propertiesTypes[key]
  );

  if (missingFields.length > 0 || invalidFields.length > 0) {
    throw new InvariantError('Invalid or missing required fields.');
  }

  const result = carUseCase.postCar(req.body);

  res.status(201).json({
    status: 'success',
    data: result,
  });
};

const putCarByIdHandler = (req, res) => {
  const { id } = req.params;

  /* Melakukan filter pada array requiredFields yang merupakan array dari properti properti yang ada pada Car, 
  method filter memiliki kondisi jika ketika mengakses request body dengan key yang ada pada elemen requiredProperties adalah
  undefined alias request body tidak memiliki properti yang diperlukan maka akan di negasi dengan operator ! sehingga menjadi truthy. 
  Hasilnya elemen key akan menjadi elemen pada array missingFields */
  const missingFields = Car.requiredProperties.filter(
    (key) => req.body[key] === undefined
  );

  /* Melakukan filter pada array requiredProperties untuk memeriksa apakah 
  tipe data dari req.body[key] tidak sama dengan propertiesTypes[key]. Jika tipe data tidak sama, 
  maka elemen tersebut akan disimpan dalam array baru yang dihasilkan oleh filter(). */
  const invalidFields = Car.requiredProperties.filter(
    (key) => typeof req.body[key] !== Car.propertiesTypes[key]
  );

  if (missingFields.length > 0 || invalidFields.length > 0) {
    throw new InvariantError('Invalid or missing required fields.');
  }

  const result = carUseCase.putCarById(id, req.body);

  return res.status(200).json({
    status: 'success',
    data: result,
  });
};

const deleteCarByIdHandler = (req, res) => {
  const { id } = req.params;

  const result = carUseCase.deleteCarById(id);

  return res.status(200).json({
    status: 'success',
    data: result,
  });
};

module.exports = {
  getCarsHandler,
  getCarByIdHandler,
  postCarHandler,
  putCarByIdHandler,
  deleteCarByIdHandler,
};
