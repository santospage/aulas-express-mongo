import { category } from "../models/Category.js"
import post from "../models/Post.js"

class PostController {

  static listPosts = async (req, res, next) => {
    try {
      const listPosts = await post.find({})
      res.status(200).json(listPosts)
    } catch (e) {
      next(e)
    }
  }

  static listPostById = async (req, res, next) => {
    try {
      const id = req.params.id
      const postFound = await post.findById(id)
      res.status(200).json(postFound)
    } catch (e) {
      next(e)
    }
  }

  static listPostsByTitle = async (req, res, next) => {
    const title = req.query.title
    try {
      const postsByTitle = await post.find({ title })
      res.status(200).json(postsByTitle)
    } catch (e) {
      next(e)
    }
  }

  static createPosts = async (req, res, next) => {
    const newPost = req.body
    try {
      const categoryFound = await category.findById(newPost.category)
      const fullPost = { ...newPost, category: { ...categoryFound._doc } }
      const postCreated = await post.create(fullPost)
      res
        .status(201)
        .json({ message: "Post criado com sucesso", post: postCreated })
    } catch (e) {
      next(e)
    }
  }

  static updatePost = async (req, res, next) => {
    try {
      const id = req.params.id
      await post.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: "Post atualizado com sucesso" })
    } catch (e) {
      next(e)
    }
  }

  static deletePost = async (req, res, next) => {
    try {
      const id = req.params.id
      await post.findByIdAndDelete(id)
      res.status(200).json({ message: "Post excluído com sucesso" })
    } catch (e) {
      next(e)
    }
  }
}

export default PostController
