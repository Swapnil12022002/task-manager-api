// const { CustomAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(err.statusCode).json({ msg: err.message });
};

module.exports = errorHandlerMiddleware;
