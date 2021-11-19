const { verifyTokenSocket } = require('../middlewares/authJWT')
const {
  userConnected,
  userDesconnected,
  getUsers,
  savedMessage
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
      console.log('[✔️ ]', ` Se conecto el cliente ${user._id}`)

      //join in room socket
      socket.join(id)
      //all user
      this.io.emit('ShowContacts', await getUsers())

      // listen client message
      socket.on('PrivateMessage', async (payload) => {
        const message = await savedMessage(payload)
        this.io.to(payload.Receiver).emit('PrivateMessage', message)
        this.io.to(payload.Sender).emit('PrivateMessage', message)
      })

      // On disconnect
      socket.on('disconnect', async () => {
        const user = await userDesconnected(id)
        this.io.emit('ShowContacts', await getUsers())
        console.log(
          '[❌ ]',
          ` Se desconecto el cliente ${id == null ? ' ' : id}`
        )
      })
    })
  }
}

module.exports = Sockets
