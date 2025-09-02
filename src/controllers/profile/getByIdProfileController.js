export function getByIdProfileController(req, res) {
  const id = req.params.id
  res.json({ message: `Usuário ${id} consultado com sucesso!` })
}
