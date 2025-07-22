const servers = [
  {
    id: 1,
    name: 'Node-06',
    ip: '10.6.0.10',
    instanceMax: 0,
    cpuUsage: '0%',
    gpuUsage: '0%',
    memoryUsage: '3%',
    memoryUsage2: '11%',
    diskUsage: '46%',
    status: 'Online'
  },
  {
    id: 2,
    name: '4core-abu-dhabi',
    ip: '10.6.0.16',
    instanceMax: 0,
    cpuUsage: '100%',
    gpuUsage: '54%',
    memoryUsage: '88%',
    memoryUsage2: '79%',
    diskUsage: '46%',
    status: 'Online'
  }
]

exports.getAllServers = (req, res) => {
  res.json(servers)
}

exports.getServerById = (req, res) => {
  const id = parseInt(req.params.id)
  const server = servers.find(s => s.id === id)
  if (!server) {
    return res.status(404).json({ error: 'Server not found' })
  }
  res.json(server)
}

exports.performAction = (req, res) => {
  const id = parseInt(req.params.id)
  const { action } = req.body
  const server = servers.find(s => s.id === id)
  if (!server) {
    return res.status(404).json({ error: 'Server not found' })
  }
  // For demo, just return success
  res.json({ message: `Action '${action}' performed on server ${server.name}` })
}
