import post from '../models/Posts.js'

class PostController {
  static async listPosts(req, res) {
    try {
      const listPosts = await post.find({})
      res.status(200).json(listPosts)
    } catch (e) {
      res.status(500).json({ message: `${e.message} - falha na requisição` })
    }
  }

  static async listPostById(req, res) {
    try {
      const id = req.params.id
      const postFound = await post.findById(id)
      res.status(200).json(postFound)
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - falha na requisição do livro` })
    }
  }

  static async createPosts(req, res) {
    try {
      const newPost = await post.create(req.body)
      res
        .status(201)
        .json({ message: 'Post criado com sucesso', post: newPost })
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - falha na criação do post` })
    }
  }

  static async updatePost(req, res) {
    try {
      const id = req.params.id
      await post.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: 'Post atualizado com sucesso' })
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - falha na atualização do post` })
    }
  }

  static async deletePost(req, res) {
    try {
      const id = req.params.id
      await post.findByIdAndDelete(id)
      res.status(200).json({ message: 'Post excluído com sucesso' })
    } catch (e) {
      res
        .status(500)
        .json({ message: `${e.message} - falha na exclusão do post` })
    }
  }
}

export default PostController
