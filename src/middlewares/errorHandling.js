import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import RequestError from "../errors/RequestError.js";
import ValidationError from "../errors/ValidationError.js";

// eslint-disable-next-line no-unused-vars
function errorHandling(e, req, res, next) {
  if (e instanceof mongoose.Error.CastError) {
    new RequestError().sendResponse(res);
  } else if (e instanceof mongoose.Error.ValidationError) {
    new ValidationError(e).sendResponse(res);
  } else if (e instanceof BaseError) {
    e.sendResponse(res);
  } else {
    new BaseError().sendResponse(res);
  }
}

export default errorHandling;
