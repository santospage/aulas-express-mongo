import jwt from "jsonwebtoken";

function authorizeUser(req, res, next) {
  let tokenJwt = req.headers.authorization;

  if (tokenJwt) {
    tokenJwt = (tokenJwt.replace("Bearer", "")).trim();
    return jwt.verify(tokenJwt, process.env.SECURITY_JWT, function (e) {
      if (e) {
        return res.status(401).send({
          auth: false,
          message: e
        });
      } else {
        next();
      }
    });


  }
  return res.status(401).json({
    auth: false,
    message: "Token não enviado"
  });
}

export default authorizeUser;
