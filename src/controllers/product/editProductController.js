export const editProductController = (req, res) => {
  const dados = req.body
  res.json({ message: 'Produto editado com sucesso!', product: dados })
}