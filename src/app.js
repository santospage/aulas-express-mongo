import express from "express"
import connectToDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js"

const connection = await connectToDatabase()

connection.on("error", (error) => {
  console.error("erro de conexao", error)
})

connection.once("open", () => {
  console.log("Conexao com banco realizada com sucesso")
})

const app = express()
routes(app)

export default app
