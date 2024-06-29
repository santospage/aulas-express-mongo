import mongoose from 'mongoose'

const uri = process.env.DB_CONNECTION_STRING

async function connectToDatabase() {
  mongoose.connect(uri)
  return mongoose.connection
}

export default connectToDatabase
