export const getByIdProductController = (req, res) => {
  const id = req.params.id
  res.json({ message: `Produto ${id} consultado com sucesso!` })
}