import mongoose from "mongoose"
import { categorySchema } from "./Category.js"

const postSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: [true, "O título do post é obrigatório"] },
    detail: { type: String, required: [true, "O detalhe do post é obrigatória"] },
    date: { type: Date },
    resume: { type: String, required: [true, "O resumo do post é obrigatório"] },
    image: { type: Object },
    category: categorySchema,
  },
  { versionKey: false },
)

const post = mongoose.model("posts", postSchema)

export default post
