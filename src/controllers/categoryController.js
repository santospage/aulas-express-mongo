import { category } from "../models/Category.js"

class CategoryController {

  static listCategories = async (req, res, next) => {
    try {
      const listCategories = await category.find({})
      res.status(200).json(listCategories)
    } catch (e) {
      next(e)
    }
  }

  static listCategoryById = async (req, res, next) => {
    try {
      const id = req.params.id
      const categoryFound = await category.findById(id)

      if (categoryFound) {
        res.status(200).json(categoryFound)
      } else {
        res.status(404).send({ message: "Id da Categoria não localizada" })
      }
    } catch (e) {
      next(e)
    }
  }

  static createCategories = async (req, res, next) => {
    try {
      const newCategory = await category.create(req.body)
      res.status(201).json({
        message: "Categoria criada com sucesso",
        category: newCategory,
      })
    } catch (e) {
      next(e)
    }
  }

  static updateCategory = async (req, res, next) => {
    try {
      const id = req.params.id
      await category.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: "Categoria atualizada com sucesso" })
    } catch (e) {
      next(e)
    }
  }

  static deleteCategory = async (req, res, next) => {
    try {
      const id = req.params.id
      await category.findByIdAndDelete(id)
      res.status(200).json({ message: "Categoria excluída com sucesso" })
    } catch (e) {
      next(e)
    }
  }
}

export default CategoryController
