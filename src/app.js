import express from 'express'

const app = express()
app.use(express.json())

const posts = [
  { id: 1, titulo: 'A história do Brasil' },
  { id: 2, titulo: 'Aritmética e Geometria' },
]

app.get('/blogging', (req, res) => {
  res.status(200).send('Servidos blogging')
})

app.get('/blogging/posts', (req, res) => {
  res.status(200).json(posts)
})

app.get('/blogging/posts/:id', (req, res) => {
  const index = buscaPost(req.params.id)
  res.status(200).json(posts[index])
})

app.post('/blogging/posts', (req, res) => {
  posts.push(req.body)
  res.status(201).send('Post cadastrado com sucesso')
})

app.put('/blogging/posts/:id', (req, res) => {
  const index = buscaPost(req.params.id)
  posts[index].titulo = req.body.titulo
  res.status(200).json(posts[index])
})

app.delete('/blogging/posts/:id', (req, res) => {
  const index = buscaPost(req.params.id)
  posts.splice(index, 1)
  res.status(201).send('Post removido com sucesso')
})

function buscaPost(id) {
  return posts.findIndex((posts) => {
    return posts.id === Number(id)
  })
}

export default app
