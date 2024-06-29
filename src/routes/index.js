import express from 'express'
import posts from './postsRoutes.js'

const routes = (app) => {
  app
    .route('/blogging')
    .get((req, res) => res.status(200).send('APIs blogging/posts'))

  app.use(express.json(), posts)
}

export default routes
