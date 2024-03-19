const express = require('express');
const router = express.Router();

const carController = require('../controllers/car');

router
  .route('/')
  .get(carController.getCarsHandler)
  .post(carController.postCarHandler);

router
  .route('/:id')
  .get(carController.getCarByIdHandler)
  .put(carController.putCarByIdHandler)
  .delete(carController.deleteCarByIdHandler);

module.exports = router;
