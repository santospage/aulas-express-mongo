import NotFound from "../errors/NotFound.js";
import user from "../models/User.js";

class UserController {

  static listUser = async (req, res, next) => {
    try {
      const listUser = user.find();
      req.result = listUser;
      next();
    } catch (e) {
      next(e);
    }
  }

  static listUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const userFound = await user.findById(id);
      if (userFound) {
        res.status(200).json(userFound);
      } else {
        next(new NotFound("Id do usuário não localizado"));
      }
    } catch (e) {
      next(e);
    }
  }

  static createUser = async (req, res, next) => {
    try {
      const newUser = await user.create(req.body);
      res.status(201).json({
        message: "Usuário criado com sucesso",
        user: newUser,
      })
    } catch (e) {
      next(e);
    }
  }

  static updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const userFound = await user.findByIdAndUpdate(id, req.body, { new: true });
      if (userFound) {
        res.status(200).json({ message: "Usuário atualizado com sucesso", user: userFound });
      } else {
        next(new NotFound("Id do usuário não localizado"));
      }
    } catch (e) {
      next(e);
    }
  }

  static deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const userFound = await user.findByIdAndDelete(id);
      if (userFound) {
        res.status(200).json({ message: "Usuário excluído com sucesso" });
      } else {
        next(new NotFound("Id da usuário não localizado"));
      }
    } catch (e) {
      next(e);
    }
  }
}

export default UserController;
