import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    user: { type: String, required: [true, "O código de login é obrigatório"] },
    fullname: { type: String, required: [true, "O nome do usuário é obrigatório"] },
    password: { type: String, required: [true, "A senha é obrigatória"] },
    salpass: { type: String, default: "" },
    email: { type: String }
  },
  { versionKey: false, timestamps: true },
)

const user = mongoose.model("User", userSchema);

export default user;
