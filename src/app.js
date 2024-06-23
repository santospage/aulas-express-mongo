import express from 'express'

const app = express()

app.get('/blogging', (req, res) => {
  res.status(200).send('Servidos blogging')
})

export default app
