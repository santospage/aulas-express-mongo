import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: [true, "O título do post é obrigatório"] },
    detail: { type: String, required: [true, "O detalhe do post é obrigatória"] },
    date: { type: Date, default: Date.now },
    resume: { type: String, required: [true, "O resumo do post é obrigatório"] },
    image: { type: Object },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }
  },
  { versionKey: false, timestamps: true },
)

const post = mongoose.model("Post", postSchema);

export default post;
