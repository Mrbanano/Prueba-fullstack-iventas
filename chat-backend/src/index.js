/*const { server } = require('./SocketServer')
require('dotenv').config({
  path: '../.env'
})

async function main() {
  const port = process.env.PORT || 3000
  await server(port)
  console.log('Server running on port', port)
}

main()*/

// Server Model: Contiene todo el servidor de express + socket.io configurado
const Server = require('./models/Server')

// Paquete para leer y establecer las variables de entorno
require('dotenv').config()

// Inicializar la instancia del server
const server = new Server()

// Ejecutar el server
server.execute()
