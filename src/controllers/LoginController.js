import NotFound from "../errors/NotFound.js";
import users from "./UserController.js";
import validUser from "../utils/validUser.js";

class LoginController {

  static loginUser = async (req, res, next) => {
    try {
      const { user } = req.body;
      const userFound = await users.findUser(user);
      if (userFound) {
        const userValidate = validUser(req.body.password, userFound);
        if (userValidate) {
          res.status(200).json({
            message: "Usuário encontrado",
            user: userFound,
          });
        } else {
          res.status(200).json({
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
