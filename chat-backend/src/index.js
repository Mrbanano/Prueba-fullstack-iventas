const app = require('./App.js')
require('dotenv').config({
  path: '../.env'
})

async function main() {
  const port = process.env.PORT || 3000
  await app.listen(port)
  console.log('Server running on port', port)
}

main()
