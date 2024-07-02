import mongoose from "mongoose"

const categorySchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
  },
  { versionKey: false },
)

const category = mongoose.model("categories", categorySchema)

export { category, categorySchema }
