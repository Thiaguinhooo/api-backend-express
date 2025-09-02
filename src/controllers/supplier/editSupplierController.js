export function editSupplierController(req, res) {
  const dados = req.body
  res.json({ message: 'Fornecedor editado com sucesso!', supplier: dados })
}
