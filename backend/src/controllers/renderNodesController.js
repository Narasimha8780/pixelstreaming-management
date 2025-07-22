let renderNodes = []

exports.registerRenderNode = (req, res) => {
  const { name, ip, status } = req.body
  if (!name || !ip) {
    return res.status(400).json({ error: 'Name and IP are required' })
  }
  const existingIndex = renderNodes.findIndex(rn => rn.ip === ip)
  if (existingIndex !== -1) {
    renderNodes[existingIndex] = { name, ip, status }
  } else {
    renderNodes.push({ name, ip, status })
  }
  res.json({ message: 'Render node registered successfully', renderNode: { name, ip, status } })
}

exports.getAllRenderNodes = (req, res) => {
  res.json(renderNodes)
}
