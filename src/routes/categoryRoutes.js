import express from "express";
import CategoryController from "../controllers/CategoryController.js";
import page from "../middlewares/page.js";

const routes = express.Router();

routes.get("/blogging/categories", CategoryController.listCategory, page);
routes.get("/blogging/categories/:id", CategoryController.listCategoryById);
routes.post("/blogging/categories", CategoryController.createCategory);
routes.put("/blogging/categories/:id", CategoryController.updateCategory);
routes.delete("/blogging/categories/:id", CategoryController.deleteCategory);

export default routes;
