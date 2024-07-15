import express from "express";
import page from "../middlewares/page.js";
import ClassController from "../controllers/ClassController.js";
import authorizeUser from "../middlewares/authorizeUser.js";

const routes = express.Router();

routes.get("/blogging/classes", ClassController.listClasses, page);
routes.get("/blogging/classes/managerial", authorizeUser, ClassController.listClassesManagerial, page);
routes.get("/blogging/classes/search", ClassController.listClassByFilter, page);
routes.get("/blogging/classes/:id", ClassController.listClassById);
routes.post("/blogging/classes", authorizeUser, ClassController.createClass);
routes.put("/blogging/classes/:id", authorizeUser, ClassController.updateClass);
routes.delete("/blogging/classes/:id", authorizeUser, ClassController.deleteClass);

export default routes;
