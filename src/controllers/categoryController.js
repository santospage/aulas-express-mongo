import { category } from '../models/Category.js'

class CategoryController {
  static async listCategories(req, res) {
    try {
      const listCategories = await category.find({})
      res.status(200).json(listCategories)
    } catch (e) {
      res.status(500).json({ message: `${e.message} - Falha na requisição` })
    }
  }

  static async listCategoryById(req, res) {
    try {
      const id = req.params.id
      const categoryFound = await category.findById(id)
      res.status(200).json(categoryFound)
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha na requisição da categoria` })
    }
  }

  static async createCategories(req, res) {
    try {
      const newCategory = await category.create(req.body)
      res.status(201).json({
        message: 'Categoria criada com sucesso',
        category: newCategory,
      })
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha na criação da categoria` })
    }
  }

  static async updateCategory(req, res) {
    try {
      const id = req.params.id
      await category.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: 'Categoria atualizada com sucesso' })
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha na atualização da categoria` })
    }
  }

  static async deleteCategory(req, res) {
    try {
      const id = req.params.id
      await category.findByIdAndDelete(id)
      res.status(200).json({ message: 'Categoria excluída com sucesso' })
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha na exclusão da categoria` })
    }
  }
}

export default CategoryController
