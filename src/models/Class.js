import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: [true, "O título da aula é obrigatória"] },
    detail: { type: String, required: [true, "O detalhe da aula é obrigatória"] },
    date: { type: Date, default: Date.now },
    resume: { type: String, required: [true, "O resumo da aula é obrigatória"] },
    image: { type: Object },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }
  },
  { versionKey: false, timestamps: true },
)

const classes = mongoose.model("Class", classSchema);

export default classes;
