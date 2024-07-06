import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: [true, "A categoria é obrigatória"] },
  },
  { versionKey: false, timestamps: true },
)

const category = mongoose.model("Category", categorySchema);

export { category };
