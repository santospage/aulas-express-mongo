import express from "express";
import posts from "./postsRoutes.js";
import category from "./categoryRoutes.js";

const routes = (app) => {
  app
    .route("/blogging")
    .get((req, res) => res.status(200).send("API de blogging"));

  app.use(express.json(), posts, category);
};

export default routes;
