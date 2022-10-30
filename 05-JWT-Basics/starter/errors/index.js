const CustomAPIError = require("./custom-error");
const BadRequestError = require("./bad-request");
const UnauthenticatedError = require("./unauthenticated");

// default export since it is present in index.js
module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthenticatedError,
};
