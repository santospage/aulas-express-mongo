import express from "express";
import LoginController from "../controllers/LoginController.js";

const routes = express.Router();

routes.post("/blogging/login", LoginController.loginUser);

export default routes;
