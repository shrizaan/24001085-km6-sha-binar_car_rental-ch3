const cars = require('./cars.json');
const { v4: uuid } = require('uuid');

class Car {
  static records = cars;

  // Untuk Validasi data Request
  static requiredProperties = [
    'plate',
    'manufacture',
    'model',
    'image',
    'rentPerDay',
    'capacity',
    'description',
    'availableAt',
    'transmission',
    'available',
    'type',
    'year',
    'options',
    'specs',
  ];

  // Untuk validaasi data request
  static propertiesTypes = {
    plate: 'string',
    manufacture: 'string',
    model: 'string',
    image: 'string',
    rentPerDay: 'number',
    capacity: 'number',
    description: 'string',
    availableAt: 'string',
    transmission: 'string',
    available: 'boolean',
    type: 'string',
    year: 'number',
    options: 'object',
    specs: 'object',
  };

  constructor(params) {
    this.id = uuid();
    this.plate = params.title;
    this.manufacture = params.manufacture;
    this.model = params.model;
    this.image = params.image;
    this.rentPerDay = params.rentPerDay;
    this.capacity = params.capacity;
    this.description = params.description;
    this.availableAt = new Date(params.availableAt);
    this.transmission = params.transmission;
    this.available = params.available;
    this.type = params.type;
    this.year = params.year;
    this.options = params.options;
    this.specs = params.specs;
  }
}

module.exports = Car;
