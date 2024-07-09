import NotFound from "../errors/NotFound.js";
import { category } from "../models/Category.js";
import classes from "../models/Class.js";

class ClassController {

  static listClasses = async (req, res, next) => {
    try {
      const listClasses = classes.find();
      req.result = listClasses;
      next();
    } catch (e) {
      next(e);
    }
  }

  static listClassById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const classFound = await classes.findById(id);
      if (classFound) {
        res.status(200).json(classFound);
      } else {
        next(new NotFound("Id da aula não localizado"));
      }
    } catch (e) {
      next(e);
    }
  }

  static listClassByFilter = async (req, res, next) => {
    try {
      const search = await processSearch(req.query);
      if (search) {
        const classResult = classes
          .find(search)
          .populate("category");
        req.result = classResult;
        next();
      } else {
        res.status(200).send([]);
      }
    } catch (e) {
      next(e);
    }
  }

  static createClass = async (req, res, next) => {
    const newClass = req.body;
    try {
      const categoryFound = await category.findById(newClass.category);
      if (categoryFound) {
        const fullClass = { ...newClass, category: { ...categoryFound._doc } };
        const classCreated = await classes.create(fullClass);
        res.status(201).json({ message: "Aula criada com sucesso", class: classCreated });
      } else {
        next(new NotFound("Id da Categoria não localizada"));
      }
    } catch (e) {
      next(e);
    }
  }

  static updateClass = async (req, res, next) => {
    try {
      const { id } = req.params;
      const classFound = await classes.findByIdAndUpdate(id, req.body, { new: true });
      if (classFound) {
        res.status(200).json({ message: "Aula atualizada com sucesso", class: classFound });
      } else {
        next(new NotFound("Id da aula não localizado"));
      }
    } catch (e) {
      next(e);
    }
  }

  static deleteClass = async (req, res, next) => {
    try {
      const { id } = req.params;
      const classFound = await classes.findByIdAndDelete(id);
      if (classFound) {
        res.status(200).json({ message: "Aula excluída com sucesso" });
      } else {
        next(new NotFound("Id da Aula não localizado"));
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

export default ClassController;
