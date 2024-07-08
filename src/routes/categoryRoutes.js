import express from "express";
import CategoryController from "../controllers/categoryController.js";
import page from "../middlewares/page.js";

const routes = express.Router();

routes.get("/blogging/categories", CategoryController.listCategories, page);
routes.get("/blogging/categories/:id", CategoryController.listCategoryById);
routes.post("/blogging/categories", CategoryController.createCategories);
routes.put("/blogging/categories/:id", CategoryController.updateCategory);
routes.delete("/blogging/categories/:id", CategoryController.deleteCategory);

export default routes;
