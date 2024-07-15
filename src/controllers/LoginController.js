import NotFound from "../errors/NotFound.js";
import users from "./UserController.js";
import validUser from "../utils/validUser.js";
import createJwt from "../utils/createJwt.js"

class LoginController {

  static loginUser = async (req, res, next) => {
    try {
      const { user } = req.body;
      const userFound = await users.findUser(user);
      if (userFound) {
        const userValidate = validUser(req.body.password, userFound);
        if (userValidate) {
          const tokenJwt = createJwt({ name: userFound.name });
          res.status(200).json({
            message: "Usuário autenticado",
            token: tokenJwt,
          });
        } else {
          res.status(204).json({
            message: "Usuário ou senha inválidos"
          });
        }
      } else {
        next(new NotFound("Usuário não localizado"));
      }
    } catch (e) {
      next(e);
    }
  }
}

export default LoginController;
