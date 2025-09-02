export function editProfileController(req, res) {
  const dados = req.body
  res.json({ message: 'Usuário editado com sucesso!', profile: dados })
}
