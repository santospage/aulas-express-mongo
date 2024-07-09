import express from "express";
import page from "../middlewares/page.js";
import ClassController from "../controllers/ClassController.js";

const routes = express.Router();

routes.get("/blogging/classes", ClassController.listClasses, page);
routes.get("/blogging/classes/search", ClassController.listClassByFilter, page);
routes.get("/blogging/classes/:id", ClassController.listClassById);
routes.post("/blogging/classes", ClassController.createClass);
routes.put("/blogging/classes/:id", ClassController.updateClass);
routes.delete("/blogging/classes/:id", ClassController.deleteClass);

export default routes;
