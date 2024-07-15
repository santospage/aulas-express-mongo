import express from "express";
import page from "../middlewares/page.js";
import UserController from "../controllers/UserController.js";
import authorizeUser from "../middlewares/authorizeUser.js";

const routes = express.Router();

routes.get("/blogging/users", authorizeUser, UserController.listUser, page);
routes.get("/blogging/users/:id", authorizeUser, UserController.listUserById);
routes.post("/blogging/users", authorizeUser, UserController.createUser);
routes.put("/blogging/users/:id", authorizeUser, UserController.updateUser);
routes.delete("/blogging/users/:id", authorizeUser, UserController.deleteUser);

export default routes;
