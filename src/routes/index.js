import express from "express";
import classes from "./classRoutes.js"
import category from "./categoryRoutes.js";
import user from "./userRoutes.js";

const routes = (app) => {
  app
    .route("/blogging")
    .get((req, res) => res.status(200).send("API de blogging"));

  app.use(express.json(), classes, category, user);
};

export default routes;
