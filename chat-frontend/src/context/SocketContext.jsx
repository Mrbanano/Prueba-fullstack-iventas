import { useContext, useEffect, createContext } from 'react'
import { useSocket } from '../hook/useSocket'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from './Chat/ChatContex'
import { types } from '../types/types'
import { scrollToBottom, scrollToBottomDelay } from '../helpers/scroll'

export const SocketContext = createContext()

const host = '/'

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, desconnectSocket } = useSocket(host)
  const { auth } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)

  //Conection

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
  //users conecteds
  useEffect(() => {
    socket?.on('ShowContacts', (users) => {
      dispatch({
        type: types.userLoaded,
        payload: users
      })
    })
  }, [socket, dispatch])

  useEffect(() => {
    socket?.on('PrivateMessage', (message) => {
      dispatch({
        type: types.newMessage,
        payload: message
      })
      scrollToBottomDelay('conversation-content')
    })
  }, [socket, dispatch])

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  )
}
