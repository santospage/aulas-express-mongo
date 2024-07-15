import express from "express";
import CategoryController from "../controllers/CategoryController.js";
import page from "../middlewares/page.js";
import authorizeUser from "../middlewares/authorizeUser.js";

const routes = express.Router();

routes.get("/blogging/categories", CategoryController.listCategory, page);
routes.get("/blogging/categories/:id", CategoryController.listCategoryById);
routes.post("/blogging/categories", authorizeUser, CategoryController.createCategory);
routes.put("/blogging/categories/:id", authorizeUser, CategoryController.updateCategory);
routes.delete("/blogging/categories/:id", authorizeUser, CategoryController.deleteCategory);

export default routes;
