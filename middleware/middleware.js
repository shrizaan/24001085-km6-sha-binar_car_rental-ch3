const ClientError = require('../exceptions/ClientError');

function errorHandler(err, req, res, next) {
  // console.error(err);

  if (err instanceof Error) {
    if (err instanceof ClientError) {
      const response = {
        error: {
          message: err.message,
          code: err.statusCode,
          type: err.name,
        },
      };
      return res.status(err.statusCode).json(response);
    }

    return res.status(500).json({
      error: {
        message: 'There was a failure on our server',
        code: 500,
        type: 'ServerError',
      },
    });
  }
  next();
}

module.exports = {
  errorHandler,
};
