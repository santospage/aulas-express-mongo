import express from 'express'
import PostController from '../controllers/postController.js'

const routes = express.Router()

routes.get('/blogging/posts', PostController.listPosts)
routes.get('/blogging/posts/search', PostController.listPostsByTitle)
routes.get('/blogging/posts/:id', PostController.listPostById)
routes.post('/blogging/posts', PostController.createPosts)
routes.put('/blogging/posts/:id', PostController.updatePost)
routes.delete('/blogging/posts/:id', PostController.deletePost)

export default routes
