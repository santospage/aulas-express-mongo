import NotFound from "../errors/NotFound.js";
import { category } from "../models/Category.js";

class CategoryController {

  static listCategories = async (req, res, next) => {
    try {
      const listCategories = await category.find({});
      res.status(200).json(listCategories);
    } catch (e) {
      next(e);
    }
  }

  static listCategoryById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const categoryFound = await category.findById(id);
      if (categoryFound) {
        res.status(200).json(categoryFound);
      } else {
        next(new NotFound("Id da Categoria não localizado"));
      }
    } catch (e) {
      next(e);
    }
  }

  static createCategories = async (req, res, next) => {
    try {
      const newCategory = await category.create(req.body);
      res.status(201).json({
        message: "Categoria criada com sucesso",
        category: newCategory,
      })
    } catch (e) {
      next(e);
    }
  }

  static updateCategory = async (req, res, next) => {
    try {
      const { id } = req.params;
      const categoryFound = await category.findByIdAndUpdate(id, req.body, { new: true });
      if (categoryFound) {
        res.status(200).json({ message: "Categoria atualizada com sucesso", category: categoryFound });
      } else {
        next(new NotFound("Id da Categoria não localizado"));
      }
    } catch (e) {
      next(e);
    }
  }

  static deleteCategory = async (req, res, next) => {
    try {
      const { id } = req.params;
      const categoryFound = await category.findByIdAndDelete(id);
      if (categoryFound) {
        res.status(200).json({ message: "Categoria excluída com sucesso" });
      } else {
        next(new NotFound("Id da Categoria não localizado"));
      }
    } catch (e) {
      next(e);
    }
  }
}

export default CategoryController;
