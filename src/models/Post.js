import mongoose from "mongoose"
import { categorySchema } from "./Category.js"

const postSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    detail: { type: String, required: true },
    date: { type: Date },
    resume: { type: String, required: true },
    image: { type: Object },
    category: categorySchema,
  },
  { versionKey: false },
)

const post = mongoose.model("posts", postSchema)

export default post
