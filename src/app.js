import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandling from "./middlewares/errorHandling.js";
import manipulator404 from "./middlewares/manipulator404.js";

const app = express();

// Conectar ao banco de dados
(async () => {
  try {
    const connection = await connectToDatabase();
    connection.on("error", (error) => {
      console.error("Erro de conexão", error);
    });
    connection.once("open", () => {
      console.log("Conexão com banco realizada com sucesso");
    });
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  }
})();

// Middleware para lidar com JSON
app.use(express.json());

routes(app);

app.use(manipulator404);
app.use(errorHandling);

export default app;
