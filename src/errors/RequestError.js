import BaseError from "./BaseError.js";

class RequestError extends BaseError {
  constructor(message = "Dados fornecidos estão incorretos") {
    super(message, 400);
  }
}

export default RequestError;
