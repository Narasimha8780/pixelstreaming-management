const inquirer = require('inquirer')
const axios = require('axios')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

let adminNodeIP = ''

// Prompt for admin node private IP
async function promptAdminIP() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'adminIP',
      message: 'Enter Admin Node Private IP:',
      validate: function(value) {
        const pass = value.match(
          /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}$/
        )
        if (pass) {
          return true
        }
        return 'Please enter a valid IP address'
      }
    }
  ])
  adminNodeIP = answers.adminIP
  console.log(`Admin Node IP set to: ${adminNodeIP}`)
}

// Register this render node with admin node
async function registerWithAdmin() {
  try {
    const response = await axios.post(`http://${adminNodeIP}:3001/api/render-nodes/register`, {
      name: 'Render Node 1',
      ip: getLocalIP(),
      status: 'Online'
    })
    console.log('Registered with admin node:', response.data)
  } catch (error) {
    console.error('Failed to register with admin node:', error.message)
  }
}

// Utility to get local IP address (simplified)
function getLocalIP() {
  const os = require('os')
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address
      }
    }
  }
  return '127.0.0.1'
}

// Start render node server
app.get('/status', (req, res) => {
  res.json({ status: 'Render node running', ip: getLocalIP() })
})

app.listen(PORT, async () => {
  console.log(`Render node service running on port ${PORT}`)
  await promptAdminIP()
  await registerWithAdmin()
})
