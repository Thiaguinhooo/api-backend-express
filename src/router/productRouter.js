import express from 'express'

const router = express.Router()

// Cria um novo produto
router.post('/', (req, res) => {
  const dados = req.body
  res.json({
    message: 'Produto criado com sucesso!',
    product: dados
  })
})

// Consulta todos os produtos
router.get('/', (req, res) => {
  res.json({ message: 'Produtos consultados com sucesso!' })
})

// Consulta um produto pelo ID
router.get('/:id', (req, res) => {
  const id = req.params.id
  res.json({ message: `Produto ${id} consultado com sucesso!` })
})

// Edita um produto (substituição completa)
router.put('/', (req, res) => {
  const dados = req.body
  res.json({ message: 'Produto editado com sucesso!', product: dados })
})

// Edita parcialmente um produto
router.patch('/', (req, res) => {
  res.json({ message: 'Produto editado parcialmente com sucesso!' })
})

// Deleta um produto
router.delete('/', (req, res) => {
  res.json({ message: 'Produto deletado com sucesso' })
})

export default router