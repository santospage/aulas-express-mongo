import express from "express"

import connectToDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js"
import errorHandling from "./middlewares/errorHandling.js"
import manipulator404 from "./middlewares/manipulator404.js"

const connection = await connectToDatabase()

connection.on("error", (error) => {
  console.error("Erro de conexao", error)
})

connection.once("open", () => {
  console.log("Conexão com banco realizada com sucesso")
})

const app = express()
app.use(express.json())
routes(app)

app.use(manipulator404)

app.use(errorHandling)

export default app
