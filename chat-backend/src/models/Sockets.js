const { verifyTokenSocket } = require('../middlewares/authJWT')
const {
  userConnected,
  userDesconnected
} = require('../controllers/Socket.controller')
class Sockets {
  constructor(io) {
    this.io = io

    this.socketEvents()
  }

  socketEvents() {
    // On connection
    this.io.on('connection', async (socket) => {
      const token = socket.handshake.query['x-access-token']
      const [valid, id] = verifyTokenSocket(token)

      if (!valid) {
        console.log('[❌]', ' Socket no identificado')
        return socket.disconnect()
      }

      const user = await userConnected(id)
      console.log('[✔️ ]', ` Se conecto el cliente ${id}`)

      socket.on('disconnect', async () => {
        const user = await userDesconnected(id)
        console.log(
          '[❌ ]',
          ` Se desconecto el cliente ${id == null ? ' ' : id}`
        )
      })
    })
  }
}

module.exports = Sockets
