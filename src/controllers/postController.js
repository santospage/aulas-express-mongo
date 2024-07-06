import NotFound from "../errors/NotFound.js";
import { category } from "../models/Category.js";
import post from "../models/Post.js";

class PostController {

  static listPosts = async (req, res, next) => {
    try {
      const listPosts = await post.find({});
      res.status(200).json(listPosts);
    } catch (e) {
      next(e);
    }
  }

  static listPostById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const postFound = await post.findById(id);
      if (postFound) {
        res.status(200).json(postFound);
      } else {
        next(new NotFound("Id do Post não localizado"));
      }
    } catch (e) {
      next(e);
    }
  }

  static listPostsByFilter = async (req, res, next) => {
    try {
      const search = await processSearch(req.query);
      if (search) {
        const postsResult = await post
          .find(search)
          .populate("category");
        res.status(200).send(postsResult);
      } else {
        res.status(200).send([]);
      }
    } catch (e) {
      next(e);
    }
  }

  static createPosts = async (req, res, next) => {
    const newPost = req.body;
    try {
      const categoryFound = await category.findById(newPost.category);
      if (categoryFound) {
        const fullPost = { ...newPost, category: { ...categoryFound._doc } };
        const postCreated = await post.create(fullPost);
        res.status(201).json({ message: "Post criado com sucesso", post: postCreated });
      } else {
        next(new NotFound("Id da Categoria não localizada"));
      }
    } catch (e) {
      next(e);
    }
  }

  static updatePost = async (req, res, next) => {
    try {
      const { id } = req.params;
      const postFound = await post.findByIdAndUpdate(id, req.body, { new: true });
      if (postFound) {
        res.status(200).json({ message: "Post atualizado com sucesso", post: postFound });
      } else {
        next(new NotFound("Id do Post não localizado"));
      }
    } catch (e) {
      next(e);
    }
  }

  static deletePost = async (req, res, next) => {
    try {
      const { id } = req.params;
      const postFound = await post.findByIdAndDelete(id);
      if (postFound) {
        res.status(200).json({ message: "Post excluído com sucesso" });
      } else {
        next(new NotFound("Id do Post não localizado"));
      }
    } catch (e) {
      next(e);
    }
  }
}

async function processSearch(params) {
  const { title, detail, resume, nameCategory } = params;
  let search = {};

  if (title) search.title = new RegExp(title, "i");
  if (detail) search.detail = new RegExp(detail, "i");
  if (resume) search.resume = new RegExp(resume, "i");
  if (nameCategory) {
    const categoryResult = await category.findOne({ name: nameCategory });
    if (categoryResult) {
      search.category = categoryResult._id;
    } else {
      search == null;
    }
  }
  return search;
}

export default PostController;
