export function getByIdSupplierController(req, res) {
  const id = req.params.id
  res.json({ message: `Fornecedor ${id} consultado com sucesso!` })
}
