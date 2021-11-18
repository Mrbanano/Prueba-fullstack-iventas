import { useContext, useEffect, createContext } from 'react'
import { useSocket } from '../hook/useSocket'
import { AuthContext } from '../auth/AuthContext'

export const SocketContext = createContext()

const host = 'http://192.168.1.75:3005'

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, desconnectSocket } = useSocket(host)

  const { auth } = useContext(AuthContext)

  useEffect(() => {
    if (auth.isAuthenticated) {
      connectSocket()
    }
  }, [auth, connectSocket])
  useEffect(() => {
    if (!auth.isAuthenticated) {
      desconnectSocket()
    }
  }, [auth, desconnectSocket])

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  )
}
