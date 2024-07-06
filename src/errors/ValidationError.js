import RequestError from "./RequestError.js";

class ValidationError extends RequestError {
  constructor(e) {
    const errorMensage = Object.values(e.errors)
      .map(e => e.message)
      .join("; ");

    super(`Os seguintes erros foram encontrados: ${errorMensage}`)
  }
}

export default ValidationError;
