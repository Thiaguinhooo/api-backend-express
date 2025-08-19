import express from 'express'

const router = express.Router()
    
router.post('/', (req,res) => {
      const dados = req.body
      res.json({
          message: 'Usuário criado com sucesso' ,
          profile: dados
      })
})

router.post('/', (req, res) => {
  const dados = req.body
  res.send({message: 'usuario criado com sucesso!',
    profile: dados
  })
})

router.get('/', (req, res) => {
  res.json({message: 'Usuários consultados com sucesso!'})
})

router.get('/:id', (req, res) => {

  const { id } = req.params.id
  res.json({message: 'Usuário consultado com sucesso!'})
})

router.put('/', (req, res) => {
  const dados = req.body
  res.json({message: 'Usuário editado com sucesso!'})
})

router.patch('/', (req, res) => {
  res.json({message: 'Usuário editado parcialmente com sucesso!'})
})

router.delete('/', (req, res) => {
  res.json({message: 'Usuário deletado com sucesso'})
})

export default router