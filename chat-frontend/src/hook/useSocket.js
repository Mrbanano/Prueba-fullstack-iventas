import { useCallback, useEffect, useState } from 'react'
import io from 'socket.io-client'

export const useSocket = (serverPath) => {
  const [socket, setsocket] = useState(null)
  const [online, setOnline] = useState(false)

  const connectSocket = useCallback(() => {
    const token = localStorage.getItem('token')

    const socketTemp = io.connect(serverPath, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
      query: {
        'x-access-token': token
      }
    })
    setsocket(socketTemp)
  }, [serverPath])

  const desconnectSocket = useCallback(() => {
    socket?.disconnect()
  }, [socket])

  useEffect(() => {
    setOnline(socket?.connected)
  }, [socket])

  useEffect(() => {
    socket?.on('connect', () => setOnline(true))
  }, [socket])

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false))
  }, [socket])

  return {
    socket,
    online,
    connectSocket,
    desconnectSocket
  }
}
