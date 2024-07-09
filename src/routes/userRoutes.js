import express from "express";
import page from "../middlewares/page.js";
import UserController from "../controllers/UserController.js";

const routes = express.Router();

routes.get("/blogging/users", UserController.listUser, page);
routes.get("/blogging/users/:id", UserController.listUserById);
routes.post("/blogging/users", UserController.createUser);
routes.put("/blogging/users/:id", UserController.updateUser);
routes.delete("/blogging/users/:id", UserController.deleteUser);

export default routes;
