import express from 'express'

const app = express()
const port = 3333

app.use(express.json()) //lendo as strings e voltando para 


app.post('/user', (req, res) => {
  const dados = req.body
  res.send({message: 'usuario criado com sucesso!',
    profile: dados
  })
})

app.get('/user', (req, res) => {
  res.json({message: 'Usuário consultado com sucesso!'})
})

app.put('/user', (req, res) => {
  const dados = req.body
  res.json({message: 'Usuário editado com sucesso!'})
})

app.patch('/user', (req, res) => {
  res.json({message: 'Usuário editado parcialmente com sucesso!'})
})

app.delete('/user', (req, res) => {
  res.json({message: 'Usuário deletado com sucesso'})
})

app.listen(port, () => {
  console.log(`API Rodando em http://localhost:${port}`)
})
