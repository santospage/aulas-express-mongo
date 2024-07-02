import mongoose from "mongoose"
import { category } from "../models/Category.js"

class CategoryController {

  static listCategories = async (req, res) => {
    try {
      const listCategories = await category.find({})
      res.status(200).json(listCategories)
    } catch (e) {
      res.status(500).json({ message: `${e.message} - Falha na requisição` })
    }
  }

  static listCategoryById = async (req, res) => {
    try {
      const id = req.params.id
      const categoryFound = await category.findById(id)

      if (categoryFound) {
        res.status(200).json(categoryFound)
      } else {
        res.status(404).send({ message: "Id da Categoria não localizada" })
      }
    } catch (e) {
      if (e instanceof mongoose.Error.CastError) {
        res
          .status(400)
          .json({ message: "Um ou mais dados fornecidos estão incorretos" })
      } else {
        res
          .status(500)
          .json({ message: `${e.message} - Erro interno do servidor` })
      }
    }
  }

  static createCategories = async (req, res) => {
    try {
      const newCategory = await category.create(req.body)
      res.status(201).json({
        message: "Categoria criada com sucesso",
        category: newCategory,
      })
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha na criação da categoria` })
    }
  }

  static updateCategory = async (req, res) => {
    try {
      const id = req.params.id
      await category.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: "Categoria atualizada com sucesso" })
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha na atualização da categoria` })
    }
  }

  static deleteCategory = async (req, res) => {
    try {
      const id = req.params.id
      await category.findByIdAndDelete(id)
      res.status(200).json({ message: "Categoria excluída com sucesso" })
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - Falha na exclusão da categoria` })
    }
  }
}

export default CategoryController
