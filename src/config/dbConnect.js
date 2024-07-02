import mongoose from "mongoose"
import process from "process"

const uri = process.env.STRING_DB_CONNECTION

async function connectToDatabase() {
  mongoose.connect(uri)
  return mongoose.connection
}

export default connectToDatabase
